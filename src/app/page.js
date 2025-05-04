import React from "react";
import Image from "next/image";
import HeroSection from "./Hero/page";
import Navbar from "./components/Navbar";
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
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-100 rounded-full z-0"></div>
              <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden">
                <Image 
                  src="/devoulogo.png" 
                  alt="Devou" 
                  width={500}
                  height={300}
                  className="w-full h-auto transform scale-95 hover:scale-100 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/70 to-transparent flex items-end p-8">
                  <h3 className="text-white font-bold text-xl md:text-2xl">Established 2025</h3>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-teal-100 rounded-full z-0"></div>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <div className="h-px bg-indigo-600 w-12 mr-4"></div>
                <h2 className="text-indigo-600 font-medium text-lg">About Devou</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Your Partner in Digital <span className="text-indigo-600">Transformation</span>
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                At Devou, we believe technology should be simple, powerful, and accessible to every business. 
                Founded in 2025, our company was built on a clear vision — to empower businesses with tailored 
                technological solutions that drive real results.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our approach is rooted in our core philosophy: <span className="font-semibold text-indigo-800">Design. Develop. Deploy.</span> 
                From custom software and automation to full-stack digital transformation, we deliver value at every 
                step of your growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/about" className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  Learn More About Us
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="/contact" className="inline-flex items-center border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 py-3 px-6 rounded-lg font-semibold transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Website Development Is Important - Interactive Section */}
      <section className="py-20 bg-white" id="why-website">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why Website Development Is <span className="text-indigo-600">Essential</span>
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              In today&apos;s digital world, your website is often the first touchpoint with potential customers. Make it count.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Interactive Card 1 */}
            <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
              <div className="h-3 bg-indigo-600"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
                  Global Reach
                </h3>
                <p className="text-slate-600">
                  A professionally developed website gives your business instant global presence, allowing you to reach customers anywhere, anytime.
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-indigo-600 h-1.5 rounded-full" style={{width: "93%"}}></div>
                  </div>
                  <p className="text-sm text-indigo-600 mt-1 text-right font-medium">93% Reach</p>
                </div>
              </div>
            </div>

            {/* Interactive Card 2 */}
            <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
              <div className="h-3 bg-teal-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-teal-600 transition-colors">
                  Cost-Effective Marketing
                </h3>
                <p className="text-slate-600">
                  Websites provide one of the highest ROIs among marketing channels, with 24/7 visibility at a fraction of traditional advertising costs.
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-teal-500 h-1.5 rounded-full" style={{width: "87%"}}></div>
                  </div>
                  <p className="text-sm text-teal-600 mt-1 text-right font-medium">87% ROI</p>
                </div>
              </div>
            </div>

            {/* Interactive Card 3 */}
            <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
              <div className="h-3 bg-indigo-800"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-indigo-800 transition-colors">
                  Credibility & Trust
                </h3>
                <p className="text-slate-600">
                  In today&apos;s digital age, not having a website can harm your credibility. A professional web presence builds trust with potential customers.
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-indigo-800 h-1.5 rounded-full" style={{width: "75%"}}></div>
                  </div>
                  <p className="text-sm text-indigo-800 mt-1 text-right font-medium">75% Trust Factor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Counter Section */}
          <div className="mt-20 bg-indigo-50 rounded-2xl p-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">75%</div>
                <p className="text-slate-700">Users judge business credibility based on website design</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">88%</div>
                <p className="text-slate-700">Users unlikely to return after bad website experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">70%</div>
                <p className="text-slate-700">Small business websites increase revenue</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">3.5b</div>
                <p className="text-slate-700">Google searches per day worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MVP Development Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-indigo-800 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Minimum Viable Product <span className="text-teal-400">Development</span>
              </h2>
              <p className="text-lg mb-8">
                Launch faster, iterate smarter. Our MVP development approach helps you validate your business idea with minimal investment.
              </p>
              
              <div className="space-y-4">
                {/* Accordion-style feature list */}
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer">
                  <h3 className="font-semibold text-xl flex items-center">
                    <span className="bg-teal-500 text-white p-1 rounded mr-3 inline-flex">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                    Rapid Development
                  </h3>
                  <p className="mt-2 pl-10">
                    Get your product to market in weeks, not months. Test core functionality quickly and economically.
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer">
                  <h3 className="font-semibold text-xl flex items-center">
                    <span className="bg-teal-500 text-white p-1 rounded mr-3 inline-flex">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </span>
                    Data-Driven Growth
                  </h3>
                  <p className="mt-2 pl-10">
                    Gather real user feedback and analytics to guide future development and feature prioritization.
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer">
                  <h3 className="font-semibold text-xl flex items-center">
                    <span className="bg-teal-500 text-white p-1 rounded mr-3 inline-flex">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                      </svg>
                    </span>
                    Cost Efficiency
                  </h3>
                  <p className="mt-2 pl-10">
                    Minimize initial investment while maximizing learning. Focus resources on what matters most.
                  </p>
                </div>
              </div>
              
              <div className="mt-10">
                <a href="/service" className="bg-teal-500 hover:bg-teal-400 text-white py-3 px-8 rounded-lg font-semibold transition-all inline-flex items-center group">
                  Explore MVP Services
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-teal-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-600 rounded-full opacity-20"></div>
              <div className="bg-white p-4 rounded-xl shadow-2xl transform rotate-3 relative z-10">
                <Image src="/devoulogo.png" alt="MVP Development" width={500} height={300} className="w-full h-auto rounded-lg" />
              </div>
              <div className="bg-teal-500 p-3 rounded-lg shadow-xl absolute -bottom-5 -left-5 transform -rotate-6 z-0">
                <div className="bg-white p-4 rounded">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="h-2 bg-gray-200 rounded"></div>
                    <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-2 bg-gray-200 rounded w-4/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skilled Developer Team Section */}
      <section className="py-20 bg-white" id="team">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our <span className="text-indigo-600">Skilled</span> Development Team
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Experience and expertise come together in our team of passionate developers committed to delivering excellence.
            </p>
          </div>

          {/* Skill Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Skill Card 1 */}
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100 group">
              <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center text-white mb-6 transform group-hover:rotate-6 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Front-End Development</h3>
              <p className="text-slate-600 mb-4">
                Creating stunning, responsive interfaces with modern frameworks and pixel-perfect precision.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">React</span>
                  <span className="text-xs font-medium text-indigo-600">95%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                  <div className="bg-indigo-600 h-1.5 rounded-full" style={{width: "95%"}}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">Next.js</span>
                  <span className="text-xs font-medium text-indigo-600">90%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                  <div className="bg-indigo-600 h-1.5 rounded-full" style={{width: "90%"}}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">Tailwind CSS</span>
                  <span className="text-xs font-medium text-indigo-600">98%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                  <div className="bg-indigo-600 h-1.5 rounded-full" style={{width: "98%"}}></div>
                </div>
              </div>
            </div>

            {/* Skill Card 2 */}
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100 group">
              <div className="w-16 h-16 bg-teal-500 rounded-xl flex items-center justify-center text-white mb-6 transform group-hover:rotate-6 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Back-End Development</h3>
              <p className="text-slate-600 mb-4">
                Building robust, scalable server solutions with cutting-edge technologies.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">Node.js</span>
                  <span className="text-xs font-medium text-teal-600">92%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                  <div className="bg-teal-500 h-1.5 rounded-full" style={{width: "92%"}}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">Express.js</span>
                  <span className="text-xs font-medium text-teal-600">88%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                  <div className="bg-teal-500 h-1.5 rounded-full" style={{width: "88%"}}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">MongoDB</span>
                  <span className="text-xs font-medium text-teal-600">94%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                  <div className="bg-teal-500 h-1.5 rounded-full" style={{width: "94%"}}></div>
                </div>
              </div>
            </div>

            {/* Skill Card 3 */}
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100 group">
              <div className="w-16 h-16 bg-indigo-800 rounded-xl flex items-center justify-center text-white mb-6 transform group-hover:rotate-6 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Mobile Development</h3>
              <p className="text-slate-600 mb-4">
                Crafting native and cross-platform mobile experiences that users love.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">React Native</span>
                  <span className="text-xs font-medium text-indigo-800">89%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                  <div className="bg-indigo-800 h-1.5 rounded-full" style={{width: "89%"}}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">Flutter</span>
                  <span className="text-xs font-medium text-indigo-800">85%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                  <div className="bg-indigo-800 h-1.5 rounded-full" style={{width: "85%"}}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">iOS/Android</span>
                  <span className="text-xs font-medium text-indigo-800">82%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                  <div className="bg-indigo-800 h-1.5 rounded-full" style={{width: "82%"}}></div>
                </div>
              </div>
            </div>

            {/* Skill Card 4 */}
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100 group">
              <div className="w-16 h-16 bg-indigo-500 rounded-xl flex items-center justify-center text-white mb-6 transform group-hover:rotate-6 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">UI/UX Design</h3>
              <p className="text-slate-600 mb-4">
                Creating intuitive, beautiful interfaces that provide exceptional user experiences.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">Figma</span>
                  <span className="text-xs font-medium text-indigo-500">96%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                  <div className="bg-indigo-500 h-1.5 rounded-full" style={{width: "96%"}}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">Adobe XD</span>
                  <span className="text-xs font-medium text-indigo-500">90%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                  <div className="bg-indigo-500 h-1.5 rounded-full" style={{width: "90%"}}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">Prototyping</span>
                  <span className="text-xs font-medium text-indigo-500">93%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                  <div className="bg-indigo-500 h-1.5 rounded-full" style={{width: "93%"}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Team CTA */}
          <div className="text-center">
            <a href="/about" className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-lg font-semibold transition-colors">
              Meet Our Team
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <PortfolioSection />
      <FAQPage />

      <ContactSection />
    </div>
  );
}