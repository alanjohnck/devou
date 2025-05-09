import HeroSection from "./Hero/page";
import Navbar from "./components/Navbar";
import AboutSection from "./about/page";
import ServicesSection from "./service/page";
import ContactSection from "./contact/page";
import FAQPage from "./faq/page";
import CareerPage from "./career/page";
import PortfolioSection from "./portfolio/page";
export default function Home() {
  return (
    <div className="h-auto relative">
      {/* Modern Floating Let's Talk Button */}
      <a
  href="https://wa.me/+918089640469?text=Hello"
  className="fixed bottom-6 right-6 bg-indigo-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center font-medium z-50 group"
>
  <span>Let&apos;s Talk</span> {/* Replaced ' with &apos; */}
  <svg 
    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
</a>


      <Navbar />      
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <FAQPage />
      <CareerPage />
      <ContactSection />
    </div>
  );
}