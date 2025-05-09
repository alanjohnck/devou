"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from 'lucide-react';

const PortfolioSection = () => {
  // Portfolio project data
  const projects = [
    {
      id: 1,
      title: "TagDynamix",
      category: "Web Application",
      description: "Custom inventory management system for retail businesses",
      bgColor: "bg-indigo-600",
      link: "https://www.tagdynamix.com"
    },
    {
      id: 2,
      title: "Rainbow Gardens",
      category: "Web Application",
      description: "E-commerce platform for garden supplies and plants",
      bgColor: "bg-purple-600",
      link: "https://www.rainbowgardens.in/"
    },
    {
      id: 3,
      title: "SnvStarlight",
      category: "Web Application",
      description: "Telemedicine platform connecting patients with healthcare providers",
      bgColor: "bg-blue-600",
      link: "https://snvstarlight.com/"
    },
    {
      id: 4,
      title: "MMH Groups",  
      category: "E-commerce",
      description: "AI-powered retail management system with inventory optimization",
      bgColor: "bg-teal-600",
      link: "https://mmhgroups.com/"
    },
    {
      id: 5,
      title: "Kidco", 
      category: "EdTech",
      description: "Interactive learning management system for remote education",
      bgColor: "bg-pink-600",
      link: "http://www.kidco.in/"
    }];
  
  const placeholderImages = [
    "./tag.jpg",
    "./rainbow.jpg",
    "./snv.jpg",
    "./mmmh.jpg",
    "./kidco.jpg",

  ];
  
  // Mapping placeholder images to projects for demo purposes
  const projectsWithImages = projects.map((project, index) => ({
    ...project,
    image: placeholderImages[index % placeholderImages.length]
  }));
  
  // Create two copies of the projects for continuous scrolling effect
  const row1 = [...projectsWithImages, ...projectsWithImages];
  
  return (
    <section id="portfolio" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-indigo-100/50 blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-purple-100/50 blur-3xl opacity-25"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-sm font-medium text-indigo-800 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2"></span>
            Our Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#3E268F]">Featured Projects</h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-600 mb-12">
            Explore some of our best work that showcases our expertise across various industries and technologies.
          </p>
        </div>
      </div>      {/* Marquee Portfolio Display */}      
      <div className="w-full relative">
    
          <div className="mb-8 overflow-hidden">
            <div className="flex">
              <motion.div
                className="flex whitespace-nowrap"
                initial={{ x: "0%" }}
                animate={{ x: "-100%" }}
                transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
            repeatType: "loop"
                }}
                onUpdate={(latest) => {
            if (latest.x <= -100) {
              latest.x = 0; // Reset position to create a seamless loop
            }
                }}
              >
                {row1.map((project, index) => (                
            <a 
              href={project.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              key={`row1-${project.id}-${index}`} 
              className="w-[350px] h-[250px] flex-shrink-0 mx-4 rounded-xl overflow-hidden group relative"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <div className="mt-2">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>
            </a>
                ))}
             
              </motion.div>
            </div>
          </div>
          
               
               
          {/* Gradient overlays for smooth fade on sides */}
        <div className="absolute top-0 left-0 h-full w-15 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 h-full w-15 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>
      
   
    </section>
  );
};

export default PortfolioSection;