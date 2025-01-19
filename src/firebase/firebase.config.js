// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: import.meta.env.VITE_apiKey,
 authDomain: import.meta.env.VITE_authDomain,
 projectId: import.meta.env.VITE_projectId,
 storageBucket: import.meta.env.VITE_storageBucket,
 messagingSenderId: import.meta.env.VITE_messagingSenderId,
 appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);








// import { useContext, useMemo, useRef, useState } from "react";
// import { Controller, useForm } from "react-hook-form";
// import { AuthContext } from "../../../Provider/AuthProvider";
// import UseAxiosSecure from "../../../Hook/UseAxiosSecure";
// import { useNavigate } from "react-router-dom";
// import JoditEditor from 'jodit-react';
// import Swal from "sweetalert2";
// import UseAxiosPublic from "../../../Hook/UseAxiosPublic";


// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

// const AddBlog = () => {

//     const {user} = useContext(AuthContext);
//     const axiosPublic = UseAxiosPublic()
//     const navigate = useNavigate();
    
//     const editor = useRef(null);
// 	const [content, setContent] = useState("");

//     const config = useMemo(() => ({
//         readonly: false, 
   
//       }),
//       []
// );


  
  




    
//      const handleSubmit = async(e) =>{
//         e.preventDefault();
//         const form = e.target;
//         const title = form.title.value;
//         const image = form.image.value;
//         const editor = form.editor.value;
//         console.log(title, image, editor);

//         // image upload to imagebb and then get url

            
//     const imageFile = {image: data.image[0]}

//     const res = await axiosPublic.post(image_hosting_api,imageFile,{
//        headers: {
//           'content-type': 'multipart/form-data' 
//        }

//     })
   
  
   



        

//      }

    
//     return (
//         <div>

//       <h2 className="text-3xl font-bold">Add Blogs</h2>


//      <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Title */}
//         <div className="form-control">
//           <label className="label">Title</label>
//           <input
//             type="text"
//              name="title"
//             placeholder="Enter blog title"
//             className="input input-bordered"
//           />
//         </div>

//         {/* Thumbnail Upload */}
//         <div className="form-control w-full my-4">
//                     <input
//                         type="file"
//                          name="image"
//                         className="file-input w-full max-w-xs"
//                     />
                    
//                 </div>

        
//            {/* Rich Text Editor */}
//            <div className="form-control">
//                     <label className="label">Content</label>
                  
//                     <JoditEditor
//                     name="editor"
                 
// 			         ref={editor}
// 			        value={content}
// 			        config={config}
// 			         tabIndex={1} // tabIndex of textarea
// 			         onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
// 			         onChange={newContent => {}}
// 		              />
                        
                    
                    
//                 </div>

//         {/* Submit Button */}
//         <div className="form-control">
//           <button type="submit" className="btn btn-primary">
//             Create Blog
//           </button>
//         </div>
//       </form>

           
            
//         </div>
//     );
// };

// export default AddBlog;

