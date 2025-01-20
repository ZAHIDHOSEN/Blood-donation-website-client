import React, { useEffect, useState } from 'react';
import UseAxiosPublic from '../../Hook/UseAxiosPublic';
import { Link } from 'react-router-dom';

const Blog = () => {
    const axiosPublic = UseAxiosPublic();
    const [blogs, setBlogs] = useState([])

    useEffect(() =>{
        axiosPublic.get('/blogs')
        .then(res =>{
            console.log(res.data)
            setBlogs(res.data)
        })
    },[axiosPublic])


    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
            {
                blogs.map(blog => <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                      <img
                        src={blog.image}
                        alt="blog image" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{blog.title}</h2>
                      <p>{blog.author}</p>
                      <div className="card-actions justify-end">
                        <Link to={`/blog/${blog._id}`}><button className="btn btn-primary">Details</button></Link>
                      </div>
                    </div>
                  </div>)
            }
            
        </div>
    );
};

export default Blog;