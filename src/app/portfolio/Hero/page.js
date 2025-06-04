"use client"

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PortfolioHeroSection = () => {
   const sectionRef = useRef(null);
   const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
   });

    

   const borderRadius = useTransform(scrollYProgress, [0, 1], [50, 0]);
   const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1.2]);
 
  return (
    <section
      ref={sectionRef}
      style={{
        backgroundImage:'url("./herobg.png")'
      }}
      className="w-screen h-[200vh] relative flex items-start justify-center bg-no-repeat bg-cover"
    >
      <motion.div
        style={{ borderRadius,scale }}
        className="w-screen h-screen sticky top-0 z-20 overflow-x-hidden flex items-center justify-center "
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover absolute inset-0 -z-10"
          preload="auto"

        >
          <source src="https://sqwghclq2pchj0ml.public.blob.vercel-storage.com/portfolio-2-T4V4uj0ingWtnzOjUg2o32GzQsiOjP.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h1 className="text-4xl md:text-8xl font-bold text-white z-10">Portfolio</h1>
      </motion.div>
    </section>
  );
};

export default PortfolioHeroSection;
