import HeroSection from "./Hero/page";
import Navbar from "./components/Navbar";
import AboutSection from "./about/page";
import ServicesSection from "./service/page";
import ContactSection from "./contact/page";

export default function Home() {
  return (
      <div className="h-auto">
         <Navbar />
         <HeroSection />
         <AboutSection />
         <ServicesSection />
         {/* <PortfolioSection /> */}
         <ContactSection />
      </div>
  );
}
