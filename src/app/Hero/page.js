import React from 'react';
import { ChevronRight, Code, Layers, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-40 right-40 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-white/[0.05]"></div>
      
      {/* Content Container */}
      <div className="relative container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-white mb-6">
          <span className="flex h-2 w-2 rounded-full bg-teal-400 mr-2"></span>
          Innovative App & Web Development
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          <span className="block">Transform Your Ideas Into</span>
          <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
            Digital Excellence
          </span>
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10">
          We build scalable, user-centered applications that leverage cutting-edge technology to solve complex business challenges.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-white text-indigo-900 font-medium rounded-lg flex items-center justify-center hover:bg-white/90 transition-all">
            Get Started
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
          <button className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/20 transition-all">
            View Our Work
          </button>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-4xl">
          <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
            <div className="p-3 bg-teal-400/20 rounded-lg mb-4">
              <Zap className="h-6 w-6 text-teal-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Cutting-Edge Tech</h3>
            <p className="text-white/70 text-center">Leveraging the latest frameworks and technologies for optimal performance.</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
            <div className="p-3 bg-purple-400/20 rounded-lg mb-4">
              <Layers className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Seamless UX</h3>
            <p className="text-white/70 text-center">Creating intuitive interfaces that delight and engage your users.</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
            <div className="p-3 bg-blue-400/20 rounded-lg mb-4">
              <Code className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Scalable Solutions</h3>
            <p className="text-white/70 text-center">Building systems that grow with your business needs and user base.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;