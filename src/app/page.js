import React from "react";
import HeroSection from "./Hero/page";
import ContactSection from "./contact/page";
import FAQPage from "./faq/page";
import AboutSection from "./about/page";
import ShowCase from "./showcase/page";
import PrdGeneratorSection from "./prdGenerator/page";
import Footer from "./components/Footer";
import Services from "./service/page";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="h-auto relative">
      <Navbar />

      <HeroSection />
     <div style={{ backgroundImage:'url("./bg.png")' , backgroundPosition: 'center -40vh', }} className="w-screen h-fit absolute z-30 flex  bg-cover bg-no-repeat flex-col overflow-x-hidden">
      <ShowCase />

      <AboutSection />
      <Services />
      <PrdGeneratorSection />

      <FAQPage />
      <ContactSection />

      <Footer />
        {/* 
         */}
      </div>
    </div>
  );
}