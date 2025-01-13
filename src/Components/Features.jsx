import React from 'react';
import { FaHandHoldingHeart, FaSearchLocation, FaChartLine, FaBook } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className=" mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Our Features</h2>
        <p className="text-gray-600 mb-10">
          Discover how we make blood donation simple, impactful, and accessible to everyone.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <FaHandHoldingHeart className="text-red-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Registration</h3>
            <p className="text-gray-600">
              Sign up quickly and join our life-saving mission with ease.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <FaSearchLocation className="text-red-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Find a Center</h3>
            <p className="text-gray-600">
              Locate the nearest blood donation center or camp effortlessly.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <FaChartLine className="text-red-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Track Your Impact</h3>
            <p className="text-gray-600">
              See how your donation has made a difference in saving lives.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <FaBook className="text-red-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Educational Resources</h3>
            <p className="text-gray-600">
              Learn about the importance and process of blood donation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
