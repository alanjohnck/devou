"use client"

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import PortfolioHeroSection from "./Hero/page";
import ProjectSection from "./Projects/page";


const PortfolioSection = () =>{

  return(
     <>

            <Navbar />
            <PortfolioHeroSection />
            <ProjectSection />
            <Footer />
     </>
  );
}

export default PortfolioSection;