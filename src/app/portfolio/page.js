
import Footer from "../components/footerCompononet";
import Navbar from "../components/navbarComponent";
import PortfolioHeroSection from "./Hero/heroPortfolio";
import ProjectSection from "./Projects/projectSection";


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