"use client"

import Footer from "../components/footerCompononet";
import Navbar from "../components/navbarComponent";
import PortfolioHeroSection from "./Hero/page";
import ProjectSection from "./projects/page";


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