"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1.4]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["4rem", "0rem"]);
  const circleScale = useTransform(scrollYProgress, [0.45, 0.55, 1, 2], [1, 20, 15, 0]);
  const circleOpacity = useTransform(scrollYProgress, [0.45, 0.5, 0.9, 1], [0, 1, 1, 1]);
  const circleBorderRadius = useTransform(scrollYProgress, [0.45, 0.55], ["60%", "0%"]);

  return (
    <section
      ref={sectionRef}
      className="h-[200vh] w-full bg-white flex items-start justify-center relative"
    >
      <motion.div
        style={{
          scale,
          borderRadius,
          width: "100vw",
          height: "100vh",
        }}
        className="sticky top-0 z-10 overflow-hidden"
      >
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-[4rem]"
        >
          <source src="portfolio.mp4" type="video/mp4" />
        </video>

        {/* Text content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            Transform your ideas <br />
            into <br />
            Digital Reality
          </h1>
          <br />
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium max-w-3xl mx-auto">
            We build scalable, user-centered applications that leverage
            cutting-edge technology to solve complex business challenges.
          </p>
        </div>
      </motion.div>

      {/* Expanding Circle */}
      <motion.div
        style={{
          scale: circleScale,
          opacity: circleOpacity,
          borderRadius: circleBorderRadius,
          backgroundImage: 'url("/bg.png")',
        }}
        className="w-30 h-30 absolute bottom-8 left-1/2 -translate-x-1/2 z-20  rounded-full hidden sm:block "
      />
    </section>
  );
};

export default HeroSection;
