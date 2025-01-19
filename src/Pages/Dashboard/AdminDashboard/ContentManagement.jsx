import React from 'react';
import { Link } from 'react-router-dom';

const ContentManagement = () => {
    return (
        <div className='flex justify-end'>
           <Link to={`/dashboard/content-management/addBlog`}> <button className='btn btn-lg bg-green-700 text-white'>Add Blog</button></Link>
            
        </div>
    );
};

export default ContentManagement;