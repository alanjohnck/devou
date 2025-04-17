"use client";
import React, { useState } from "react";

const FAQPage = () => {
  const faqs = [
    {
      question: "What services does Devou offer?",
      answer:
        "Devou specializes in web development, mobile app development, UI/UX design, and backend engineering. We provide end-to-end solutions for your digital needs.",
    },
    {
      question: "How can I contact Devou for a project?",
      answer:
        "You can reach us via email at devou.in@gmail.com or call us at +91 98950 89090. Alternatively, you can use the contact form on our website.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We work with clients across various industries, including fintech, healthcare, education, e-commerce, and travel.",
    },
    {
      question: "Do you offer ongoing support after project delivery?",
      answer:
        "Yes, we provide ongoing support and maintenance to ensure your project runs smoothly after deployment.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Have questions? We’ve got answers. If you don’t find what you’re
            looking for, feel free to contact us.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-6 bg-slate-100 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <button
                className="w-full text-left flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-slate-800">
                  {faq.question}
                </h3>
                <span className="text-indigo-600">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <p className="mt-4 text-slate-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;