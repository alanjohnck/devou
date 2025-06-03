"use client"

import Footer from "../components/footerCompononet";
import Navbar from "../components/navbarComponent";
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