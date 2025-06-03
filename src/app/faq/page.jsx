"use client";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion"
import {ChevronUp,ChevronDown} from "lucide-react"
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

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"], // 0 when top hits, 1 when bottom hits top
   });
  const rotate = useTransform(scrollYProgress,[0,.5],[20,0])
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef}   style={{ perspective: 1000 }} className="w-screen h-[80vh]  text-black  ">
      <div className="max-w-6xl mx-auto flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-8 text-center">FAQs</h1>
        <motion.div   className="flex flex-col gap-4 p-4">
          {faqs.map(({question,answer}, index) => (
            <motion.div key={index} className="bg-[#002b3d] p-2 md:p-4 text-white rounded-xl overflow-hidden gap-6">
              <button
                className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center"
                onClick={() => toggle(index)}
              >
                {question}
                <span className="text-xl transition-opacity duration-150">{openIndex === index ? <ChevronUp /> : <ChevronDown />}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-sm">
                 {answer}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

  );
};

export default FAQPage;