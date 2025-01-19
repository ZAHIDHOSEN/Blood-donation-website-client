import { useContext, useMemo, useRef, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import UseAxiosSecure from "../../../Hook/UseAxiosSecure";
import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../../Hook/UseAxiosPublic";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddBlog = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();

  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = useMemo(
    () => ({
      readonly: false,
    }),
    []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Retrieve form data
    const title = form.title.value;
    const imageFile = form.image.files[0]; // Correct way to get file input
    console.log("Title:", title);
    console.log("Image File:", imageFile);
    console.log("Editor Content:", content);

    if (!imageFile) {
      Swal.fire("Error", "Please upload an image", "error");
      return;
    }

    try {
      // Upload image to ImageBB
      const imageFormData = new FormData();
      imageFormData.append("image", imageFile);

      const imageRes = await axiosPublic.post(image_hosting_api, imageFormData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      const imageUrl = imageRes.data.data.url; 
      console.log("Uploaded Image URL:", imageUrl);

      
      const blogData = {
        title,
        image: imageUrl,
        content,
        author: user?.email, 
        status: "draft", 
      };

     
      const backendRes = await axiosPublic.post(
        "/blogs",
        blogData
      );

      if (backendRes.data.insertedId) {
        Swal.fire("Success", "Blog created successfully!", "success");
        form.reset();
        setContent(""); 
        navigate("/dashboard/content-management");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      Swal.fire("Error", "Failed to create blog", "error");
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold">Add Blogs</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div className="form-control">
          <label className="label">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter blog title"
            className="input input-bordered"
            required
          />
        </div>

        {/* Thumbnail Upload */}
        <div className="form-control w-full my-4">
          <label className="label">Thumbnail</label>
          <input
            type="file"
            name="image"
            className="file-input w-full max-w-xs"
            required
          />
        </div>

        {/* Rich Text Editor */}
        <div className="form-control">
          <label className="label">Content</label>
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1}
            onBlur={(newContent) => setContent(newContent)}
          />
        </div>

        {/* Submit Button */}
        <div className="form-control">
          <button type="submit" className="btn btn-primary">
            Create Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
