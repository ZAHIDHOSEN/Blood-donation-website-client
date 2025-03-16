import React from 'react';

const Faq = () => {

    const faqs = [
        {
          question: "Who can donate blood?",
          answer: "Generally, healthy individuals aged 18-65, weighing at least 50kg, can donate blood. However, eligibility may vary based on health conditions.",
        },
        {
          question: "How often can I donate blood?",
          answer: "You can donate whole blood every 8 weeks (56 days) and platelets every 2 weeks, depending on the type of donation.",
        },
        {
          question: "Is blood donation safe?",
          answer: "Yes, blood donation is a safe process. Sterile, disposable needles are used, ensuring there is no risk of infection.",
        },
        {
          question: "How long does the donation process take?",
          answer: "The entire process, including registration, donation, and rest, takes about 45-60 minutes. The actual blood donation takes around 10 minutes.",
        },
        {
          question: "What should I eat before donating blood?",
          answer: "Eat a balanced meal, stay hydrated, and avoid fatty foods before donation to ensure a smooth process.",
        },
      ];
    return (
        
              <div className="max-w-4xl mx-auto p-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <h3 className="text-lg font-semibold p-2 bg-gray-100 rounded-md">{faq.question}</h3>
            <p className="mt-2 px-4 text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
        
    );
};

export default Faq;