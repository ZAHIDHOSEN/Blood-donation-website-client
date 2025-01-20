import React from 'react';
import BannerImg from '../assets/Banner.jpg' 
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div
        className="hero min-h-96"
        style={{
          backgroundImage: `url(${BannerImg})`,
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
            <p className="mb-5">
            Blood donation is a selfless act that saves millions of lives every year. By donating blood, you contribute to the recovery and survival of patients in need.
           
            </p>
           <Link to="/register"> <button className="btn btn-primary mr-4">Join as a donor</button></Link>
          <Link to={`/search`}><button className="btn btn-success">Search Donors</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;