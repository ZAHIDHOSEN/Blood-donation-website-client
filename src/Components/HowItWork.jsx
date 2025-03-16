import React from 'react';
import { FaSearchPlus, FaTint, FaUserPlus } from 'react-icons/fa';

const HowItWork = () => {
    return (
        <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
  
        <div className="flex flex-col items-center text-center">
          <div className="bg-blue-100 p-6 rounded-full mb-4">
            <FaUserPlus className="text-blue-500 text-4xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Step 1: Register as a Donor</h3>
          <p className="text-gray-700">Sign up on our platform to become a verified blood donor.</p>
        </div>

        
        <div className="flex flex-col items-center text-center">
          <div className="bg-green-100 p-6 rounded-full mb-4">
            <FaSearchPlus className="text-green-500 text-4xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Step 2: Find or Create a Donation Request</h3>
          <p className="text-gray-700">Search for donation requests or create a new one to find the right match.</p>
        </div>

   
        <div className="flex flex-col items-center text-center">
          <div className="bg-red-100 p-6 rounded-full mb-4">
            <FaTint className="text-red-500 text-4xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Step 3: Donate Blood & Save Lives</h3>
          <p className="text-gray-700">Donate blood at your convenience and make a life-saving impact.</p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold mb-4">Join Us and Make a Difference!</h3>
        <p className="text-gray-600">Your blood can save lives. Become a donor today and help those in need.</p>
      </div>
    </div>
    );
};

export default HowItWork;