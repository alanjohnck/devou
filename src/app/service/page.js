"use client";
import React, { useState } from "react";

const services = [
  {
    title: "Web Development",
    description:
      "We build responsive web apps using Next.js, Tailwind CSS, Node.js, and Vercel for modern deployment.",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps built with Flutter or React Native, integrating seamlessly with backend APIs.",
  },
  {
    title: "Backend Engineering",
    description:
      "Scalable backend systems using Node.js, Express, MongoDB, PostgreSQL, and AWS cloud services.",
  },
  {
    title: "UI/UX Design",
    description:
      "Human-centered design with Figma, interactive prototypes, and accessible UI built with Tailwind.",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="w-screen h-[100vh] flex flex-col justify-between items-center px-4">
      <main className="h-1/4 flex items-end justify-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-black text-center">Our Services</h1>
      </main>

      {/* Desktop Layout */}
      <div className="hidden md:flex  w-[90%] h-1/2 justify-center items-center gap-6 relative overflow-hidden">
        {services.map((service, index) => {
          const isActive = activeIndex === index;
          const isInactive = activeIndex !== null && !isActive;
          if(isActive){
            setTimeout(()=>{
              setActiveIndex(null)
            },10000)
          }
          return (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`${
                isActive
                  ? "flex-[4] max-w-9xl z-10"
                  : isInactive
                  ? "hidden"
                  : "flex-1 max-w-[350px]"
              } bg-[#002b3d] text-white h-full rounded-lg shadow-md flex flex-col items-center justify-center p-6 transition-all duration-500 ease-in-out cursor-pointer`}
            >
              <h3 className="text-3xl font-semibold text-center leading-tight">
                {service.title}
              </h3>
              {isActive && (
                <p className="mt-4 text-sm text-center text-gray-200 transition-opacity duration-300 ease-in-out">
                  {service.description}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden w-full max-w-md space-y-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#002b3d] text-white w-full h-[120px] rounded-lg shadow-md flex items-center justify-center p-4 hover:bg-[#003547] transition-colors duration-300"
          >
            <h3 className="text-lg font-semibold text-center leading-tight">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
