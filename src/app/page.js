"use client";

import React, { useState, useEffect } from "react";
import HeroSection from "./Hero/page";
import ContactSection from "./contact/page";
import FAQPage from "./faq/page";
import AboutSection from "./about/page";
import ShowCase from "./showcase/page";
import PrdGeneratorSection from "./prdGenerator/page";
import Footer from "./components/footerCompononet";
import Services from "./service/page";
import Navbar from "./components/navbarComponent";
import Spinner from "./components/Loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [bgLoaded, setBgLoaded] = useState(true); // true by default

  useEffect(() => {
    // Loading spinner timeout
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    // Preload background image and handle failure
    const img = new Image();
    img.src = "./bg.png";
    img.onload = () => setBgLoaded(true);
    img.onerror = () => setBgLoaded(false);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <div className="h-auto relative">
      <Navbar />
      <HeroSection />
      <div
        style={{
          backgroundImage: bgLoaded ? 'url("./bg.png")' : "none",
          backgroundColor: bgLoaded ? "transparent" : "#1a1a1a", // fallback color
          backgroundPosition: "center -40vh",
        }}
        className="w-screen h-fit absolute z-30 flex bg-cover bg-no-repeat flex-col overflow-x-hidden"
      >
        <ShowCase />
        <AboutSection />
        <Services />
        <PrdGeneratorSection />
        <FAQPage />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
