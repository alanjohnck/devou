import React from 'react';
import { ChevronRight, Code, Layers, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="h-auto relative bg-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-40 right-40 w-72 h-72 bg-gray-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-white/[0.05]"></div>
      
      {/* Content Container */}
      <div className="relative container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800 backdrop-blur-sm text-sm font-medium text-gray-300 mb-6">
          <span className="flex h-2 w-2 rounded-full bg-gray-400 mr-2"></span>
          Innovative App & Web Development
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          <span className="block">Transform Your Ideas Into</span>
          <span className="text-gray-300">
            Digital Excellence
          </span>
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10">
          We build scalable, user-centered applications that leverage cutting-edge technology to solve complex business challenges.
        </p>
        
        {/* CTA Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <button className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/20 transition-all">
            View Our Work
          </button>
        </div> */}
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-4xl">
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
            <div className="p-3 bg-gray-100 rounded-lg mb-4">
              <Zap className="h-6 w-6 text-gray-800" />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">Cutting-Edge Tech</h3>
            <p className="text-gray-700 text-center">Leveraging the latest frameworks and technologies for optimal performance.</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
            <div className="p-3 bg-gray-100 rounded-lg mb-4">
              <Layers className="h-6 w-6 text-gray-800" />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">Seamless UX</h3>
            <p className="text-gray-700 text-center">Creating intuitive interfaces that delight and engage your users.</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
            <div className="p-3 bg-gray-100 rounded-lg mb-4">
              <Code className="h-6 w-6 text-gray-800" />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">Scalable Solutions</h3>
            <p className="text-gray-700 text-center">Building systems that grow with your business needs and user base.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;