"use client";
import React, { useState } from 'react';
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Devou transformed our business with their exceptional web application. Their attention to detail and focus on user experience resulted in a platform that our customers love.",
    author: "Sarah Johnson",
    position: "CEO, TechVision Inc.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    id: 2,
    quote: "Working with Devou on our mobile app was a game-changer. They understood our requirements perfectly and delivered a solution that exceeded our expectations.",
    author: "Michael Chen",
    position: "CTO, InnovateX",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    id: 3,
    quote: "The team at Devou is incredibly talented and professional. They've been instrumental in our digital transformation journey, providing solutions that are both robust and scalable.",
    author: "Emma Rodriguez",
    position: "Digital Director, Global Brands",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    id: 4,
    quote: "Devou's approach to our e-commerce platform redesign was methodical and results-driven. They managed to increase our conversion rates by 35% within three months of launch.",
    author: "David Kim",
    position: "Marketing Head, RetailNow",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=200&auto=format&fit=crop"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="relative py-20 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#3E268F" d="M46.5,-57.5C60.5,-45.5,72.3,-30.7,75.8,-14C79.3,2.7,74.5,21.1,64.9,35.8C55.2,50.5,40.8,61.4,24.9,66.9C9.1,72.4,-8.2,72.6,-21.8,65.9C-35.4,59.3,-45.4,45.9,-55.3,31.6C-65.3,17.3,-75.2,2.2,-74.6,-13.1C-73.9,-28.3,-62.7,-43.6,-48.5,-55.6C-34.4,-67.6,-17.2,-76.3,-0.3,-75.9C16.5,-75.6,32.5,-69.4,46.5,-57.5Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#3E268F" d="M35.9,-47.8C45.5,-35.3,51.5,-22.8,56.7,-7.9C61.8,7,66.2,24.3,59.8,35.9C53.4,47.5,36.3,53.3,19.5,58.6C2.8,64,-13.5,69,-25.9,64.1C-38.3,59.3,-46.7,44.6,-53.3,29.9C-59.8,15.3,-64.5,0.8,-62.1,-12.3C-59.7,-25.4,-50.3,-37.2,-38.8,-49.1C-27.3,-61.1,-13.7,-73.2,-0.1,-73.1C13.5,-72.9,26.3,-60.4,35.9,-47.8Z" transform="translate(100 100)" />
          </svg>
        </div>
        {/* Light grid pattern */}
        <div className="absolute inset-0 bg-grid-indigo/[0.03]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#3E268F]">Client Success Stories</h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-600">
            Hear what our clients have to say about their experience working with us.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* Quote icon */}
            <Quote 
              size={64} 
              className="absolute text-indigo-200 top-8 left-8 opacity-30" 
            />
            
            {/* Testimonial content */}
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex justify-center">
                <motion.div
                  key={activeIndex}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-full overflow-hidden w-48 h-48 border-4 border-white shadow-lg"
                >
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].author} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              
              <div className="md:w-2/3">
                <motion.div
                  key={`quote-${activeIndex}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className="text-xl md:text-2xl font-light text-gray-700 italic mb-6">
                    "{testimonials[activeIndex].quote}"
                  </p>
                  
                  <div className="flex items-center">
                    <div>
                      <h4 className="font-semibold text-lg text-[#3E268F]">
                        {testimonials[activeIndex].author}
                      </h4>
                      <p className="text-gray-600">
                        {testimonials[activeIndex].position}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="absolute bottom-8 right-8 flex gap-2">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow hover:bg-indigo-100 transition duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow hover:bg-indigo-100 transition duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            {/* Progress indicator */}
            <div className="absolute bottom-8 left-8 flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-8 bg-[#3E268F]' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
