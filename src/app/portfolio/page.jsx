

"use client"
import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Code, 
  Layers, 
  Zap, 
  Menu, 
  X, 
  Users, 
  Monitor, 
  Smartphone, 
  Server, 
  Globe, 
  Mail, 
  MapPin, 
  Phone,
  ArrowRight,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';
const PortfolioSection = () => {
    const [hoveredProject, setHoveredProject] = useState(null);
    
    const projects = [
      {
        title: "Fintech Dashboard",
        category: "Web Application",
        image: "finance",
        description: "A comprehensive financial analytics platform with real-time data visualization"
      },
      {
        title: "EcoTrack",
        category: "Mobile App",
        image: "eco",
        description: "Sustainability tracking app that helps users reduce their carbon footprint"
      },
      {
        title: "HealthConnect",
        category: "Web Platform",
        image: "health",
        description: "Telemedicine platform connecting patients with healthcare providers"
      },
      {
        title: "RetailGenius",
        category: "E-commerce",
        image: "retail",
        description: "AI-powered retail management system with inventory optimization"
      },
      {
        title: "LearnSphere",
        category: "EdTech",
        image: "education",
        description: "Interactive learning management system for remote education"
      },
      {
        title: "TravelBuddy",
        category: "Mobile App",
        image: "travel",
        description: "Personalized travel companion app with local recommendations"
      }
    ];
  
    // Background colors for project cards
    const bgColors = [
      "bg-indigo-600",
      "bg-purple-600",
      "bg-blue-600",
      "bg-teal-600",
      "bg-pink-600",
      "bg-orange-600"
    ];
  
    // Generate placeholder image based on project theme
    const getPlaceholderImage = (theme, index) => {
      return (
        <div className={`${bgColors[index % bgColors.length]} w-full h-full flex items-center justify-center`}>
          <span className="text-6xl text-white/30 font-bold">{theme.charAt(0).toUpperCase()}</span>
        </div>
      );
    };
  
    return (
      <section id="portfolio" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-sm font-medium text-indigo-800 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2"></span>
              Our Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore some of our best work that showcases our expertise across various industries and technologies.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="relative rounded-xl overflow-hidden shadow-lg group h-64 cursor-pointer"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                {getPlaceholderImage(project.image, index)}
                
                {/* Project Info Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6 flex flex-col justify-end transition-all duration-300 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-90'
                }`}>
                  <div className={`transition-all duration-500 ${
                    hoveredProject === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-60'
                  }`}>
                    <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-xl font-bold text-white mt-1 mb-2">{project.title}</h3>
                    <p className={`text-white/70 text-sm mb-4 transition-all duration-500 ${
                      hoveredProject === index ? 'opacity-100' : 'opacity-0'
                    }`}>{project.description}</p>
                    <button className={`flex items-center text-sm text-white font-medium transition-all duration-500 ${
                      hoveredProject === index ? 'opacity-100' : 'opacity-0'
                    }`}>
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg inline-flex items-center hover:bg-indigo-700 transition-colors">
              View All Projects
              <ChevronRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    );
  };

  export default PortfolioSection;