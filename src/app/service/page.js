


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

const ServicesSection = () => {
    const [activeService, setActiveService] = useState(0);
    
    const services = [
      {
        icon: <Globe className="h-8 w-8 text-white" />,
        title: "Web Development",
        description: "Custom web applications with responsive design and exceptional performance. We use modern frameworks like React, Vue, and Angular to create engaging user experiences.",
        bgColor: "from-blue-600 to-indigo-600",
        technologies: ["React", "Node.js","Next.js" ]
      },
      {
        icon: <Smartphone className="h-8 w-8 text-white" />,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android. We focus on smooth performance, intuitive UX, and offline capabilities.",
        bgColor: "from-purple-600 to-pink-600",
        technologies: ["React Native", "Flutter", ]
      },
      {
        icon: <Server className="h-8 w-8 text-white" />,
        title: "Backend Engineering",
        description: "Robust, scalable backend systems with microservices architecture. Our solutions handle high traffic while maintaining reliability and security.",
        bgColor: "from-teal-600 to-green-600",
      technologies: ["Node.js", "Python", "GraphQL", "REST APIs"]
    },
    {
      icon: <Layers className="h-8 w-8 text-white" />,
      title: "UI/UX Design",
      description: "User-centered design that balances aesthetics with functionality. We create intuitive interfaces that guide users naturally through your application.",
      bgColor: "from-orange-600 to-yellow-600",
      technologies: ["Figma","Wireframing"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-sm font-medium text-indigo-800 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2"></span>
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Comprehensive Development Solutions</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We offer end-to-end services to help you build, launch, and scale your digital products with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                activeService === index 
                  ? `bg-gradient-to-r ${service.bgColor} text-white shadow-lg scale-105` 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className={`p-3 rounded-lg inline-flex mb-4 ${
                activeService === index ? 'bg-white/20' : `bg-gradient-to-r ${service.bgColor}`
              }`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className={`text-sm ${activeService === index ? 'text-white/80' : 'text-slate-600'}`}>
                {activeService === index ? service.description : service.description.substring(0, 60) + '...'}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-slate-100 p-8 rounded-2xl">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{services[activeService].title}</h3>
              <p className="text-slate-600 mb-6">{services[activeService].description}</p>
             
            </div>
            <div className="md:w-2/3">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-lg font-semibold text-slate-800 mb-4">Technologies We Use</h4>
                <div className="flex flex-wrap gap-2">
                  {services[activeService].technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">Our Approach</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 p-1 bg-indigo-100 rounded-full">
                        <ChevronRight size={12} className="text-indigo-600" />
                      </div>
                      <span className="text-slate-600 text-sm">In-depth discovery and requirements analysis</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 p-1 bg-indigo-100 rounded-full">
                        <ChevronRight size={12} className="text-indigo-600" />
                      </div>
                      <span className="text-slate-600 text-sm">Collaborative design and development process</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 p-1 bg-indigo-100 rounded-full">
                        <ChevronRight size={12} className="text-indigo-600" />
                      </div>
                      <span className="text-slate-600 text-sm">Rigorous testing and quality assurance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 p-1 bg-indigo-100 rounded-full">
                        <ChevronRight size={12} className="text-indigo-600" />
                      </div>
                      <span className="text-slate-600 text-sm">Seamless deployment and ongoing support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;