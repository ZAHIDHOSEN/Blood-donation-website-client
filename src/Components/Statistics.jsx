import React from 'react';

const Statistics = () => {
    const stats = [
        { label: "Total Registered Donors", value: "12,345" },
        { label: "Total Successful Donations", value: "8,765" },
        { label: "Active Donation Requests", value: "320" },
        { label: "Volunteers & Organizations Partnered", value: "150+" },
      ];
    return (
        <div className="bg-base-100 py-12 px-6 md:px-12 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center text-black mb-8">
        Key Statistics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-4xl font-bold text-red-500">{stat.value}</h3>
            <p className="text-gray-700 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Statistics;