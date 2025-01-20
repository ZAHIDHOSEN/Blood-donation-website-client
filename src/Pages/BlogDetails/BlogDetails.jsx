import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UseAxiosPublic from '../../Hook/UseAxiosPublic';
import { AuthContext } from '../../Provider/AuthProvider';

const BlogDetails = () => {
    const {loading} = useContext(AuthContext)
    const {id} = useParams();
    const axiosPublic = UseAxiosPublic();
    const[blog, setBlog] = useState({});

    useEffect(() =>{
        axiosPublic.get(`/blogs/${id}`)
        .then(res =>{
            setBlog(res.data)
        })
    },[id,axiosPublic])
 
    return (
        <div className="container mx-auto p-4">
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src={blog.image} alt="blog image" className="w-full h-96 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="text-3xl font-bold">{blog.title}</h2>
              <p className="text-gray-600">Author: {blog.author}</p>
              <p className="text-lg">{blog.content}</p>
            </div>
          </div>
        </div>
      );
};

export default BlogDetails;