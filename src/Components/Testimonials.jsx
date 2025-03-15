import React from 'react';
import { motion } from "framer-motion";

const Testimonials = () => {

    const testimonials = [
        {
          name: "Zahid hosen",
          bloodType: "O+",
          feedback:
            "Donating blood was a fulfilling experience. Knowing I saved a life makes me want to do it again!",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
        },
        {
          name: "Ena",
          bloodType: "A-",
          feedback:
            "The donation process was smooth, and the team was very supportive. Happy to contribute!",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
        },
        {
          name: "Dipto",
          bloodType: "B+",
          feedback:
            "I received blood in an emergency. This platform truly saves lives. Forever grateful!",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
        },
      ];
    return (
        <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            What Our Donors Say
          </h2>
          <p className="text-gray-600 mt-2">
            Hear from our amazing donors and recipients!
          </p>
  
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-2xl shadow-lg border border-gray-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full border-2 border-red-500"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Blood Type: <span className="font-bold">{testimonial.bloodType}</span>
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">
                  "{testimonial.feedback}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Testimonials;