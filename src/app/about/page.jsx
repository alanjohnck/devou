"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutSection = () => {
  const cards = [
    {
      title: "Global Reach",
      description: "Serving clients across 15+ countries",
      gridClasses: "col-start-1 col-end-2 row-start-1 row-end-2",
    },
    {
      title: "Future-Proof",
      description: "Building with scalability in mind",
      gridClasses: "col-start-1 col-end-2 row-start-2 row-end-3",
    },
    {
      title: "Agile Process",
      description: "Rapid iteration with continuous feedback",
      gridClasses: "col-start-2 col-end-3 row-start-1 row-end-3",
    },
    {
      title: "Experienced Team",
      description: "Top talent from diverse tech backgrounds",
      gridClasses: "col-start-3 col-end-5 row-start-1 row-end-3",
    },
  ];

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Transition effects for cards
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 5]);
  const scale = useTransform(scrollYProgress, [0,.5], [0.9, 1]);

  return (
    <section
      ref={sectionRef}
      className="w-screen h-[150vh] md:h-screen flex flex-col justify-center items-center  font-bold text-black"
    >
      <motion.div  className="max-w-6xl h-1/2 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl mb-4">About Devou</h1>
        <p className="text-lg leading-relaxed">
          We turn complex ideas into elegant digital solutions. At Devou, we
          believe in the transformative power of technology when it's
          thoughtfully applied. Our team combines technical expertise with
          creative thinking to deliver solutions that not only work flawlessly
          but also provide exceptional user experiences.
        </p>
      </motion.div>

      <div className="w-[90%]  h-1/2  flex flex-col md:grid  grid-cols-4 md:grid-rows-2 justify-center p-4 gap-3">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`${card.gridClasses} bg-[#122933]  p-10 md:p-0 rounded-3xl relative overflow-hidden flex items-center justify-center pb-6`}
          >
            <div className="absolute inset-0 bg-[#122933] bg-opacity-20"></div>
            <div className="relative z-10 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {card.title}
              </h3>
              <p className="text-sm md:text-base opacity-90 p-2">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
