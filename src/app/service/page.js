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
  Twitter,
  CheckCircle,
  BookOpen,
  Workflow,
  Rocket,
  Tool,
  Code2,
  Bug,
  BarChart,
  Speaker,
  Settings,
  RefreshCw
} from 'lucide-react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [activeStage, setActiveStage] = useState(0);
    
  const services = [
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      title: "Web Development",
      description: "Custom web applications with responsive design and exceptional performance. We use modern frameworks like React, Vue, and Angular to create engaging user experiences.",
      bgColor: "from-blue-600 to-indigo-600",
      technologies: ["React", "Node.js", "Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
      benefits: [
        "Responsive design for all devices",
        "SEO-friendly architecture",
        "Fast loading times",
        "Accessibility compliance"
      ]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-white" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android. We focus on smooth performance, intuitive UX, and offline capabilities.",
      bgColor: "from-purple-600 to-pink-600",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "App Store Optimization"],
      benefits: [
        "Native-like performance",
        "Cross-platform compatibility",
        "Offline functionality",
        "Push notification integration"
      ]
    },
    {
      icon: <Server className="h-8 w-8 text-white" />,
      title: "Backend Engineering",
      description: "Robust, scalable backend systems with microservices architecture. Our solutions handle high traffic while maintaining reliability and security.",
      bgColor: "from-teal-600 to-green-600",
      technologies: ["Node.js", "Python", "GraphQL", "REST APIs", "AWS", "Docker", "Kubernetes"],
      benefits: [
        "Scalable architecture",
        "High-performance database design",
        "Authentication systems",
        "Cloud-native solutions"
      ]
    },
    {
      icon: <Layers className="h-8 w-8 text-white" />,
      title: "UI/UX Design",
      description: "User-centered design that balances aesthetics with functionality. We create intuitive interfaces that guide users naturally through your application.",
      bgColor: "from-orange-600 to-yellow-600",
      technologies: ["Figma", "Wireframing", "Prototyping", "User Research", "Design Systems", "Animation"],
      benefits: [
        "Intuitive navigation",
        "Conversion-focused design",
        "Consistent user experience",
        "Accessibility-first approach"
      ]
    }
  ];

  const developmentProcess = [
    {
      icon: <BookOpen className="h-6 w-6 text-white" />,
      title: "1. Discovery & Planning",
      description: "We begin with an in-depth analysis of your business needs, target audience, and project requirements. During this stage, we collaborate closely with stakeholders to understand the vision and define clear objectives.",
      steps: [
        "Initial consultation and requirement gathering",
        "Competitive analysis and market research",
        "Technical feasibility assessment",
        "Project scope definition and documentation",
        "Timeline and milestone planning"
      ]
    },
    {
      icon: <Layers className="h-6 w-6 text-white" />,
      title: "2. Design & Prototyping",
      description: "Our design team creates wireframes and interactive prototypes that visualize the user experience before development begins. This iterative process ensures the final product aligns with your vision and user needs.",
      steps: [
        "Information architecture planning",
        "Low-fidelity wireframing",
        "User flow mapping and journey creation",
        "High-fidelity UI design",
        "Interactive prototyping and user testing"
      ]
    },
    {
      icon: <Code2 className="h-6 w-6 text-white" />,
      title: "3. Development",
      description: "Using agile methodologies, our development team breaks down the project into sprints, focusing on incremental delivery and continuous improvement. Code quality and performance are our top priorities.",
      steps: [
        "Setting up development infrastructure",
        "Front-end component development",
        "Back-end API and database implementation",
        "Integration of third-party services",
        "Regular code reviews and pair programming"
      ]
    },
    {
      icon: <Bug className="h-6 w-6 text-white" />,
      title: "4. Testing & QA",
      description: "Rigorous testing ensures your application is stable, secure, and performs optimally. We conduct multiple types of tests to identify and fix issues before they reach your users.",
      steps: [
        "Unit and integration testing",
        "Performance optimization",
        "Cross-browser and device compatibility testing",
        "Security vulnerability assessment",
        "User acceptance testing"
      ]
    },
    {
      icon: <Rocket className="h-6 w-6 text-white" />,
      title: "5. Deployment",
      description: "We manage the entire deployment process, setting up proper environments, automating deployment pipelines, and ensuring a smooth transition to production.",
      steps: [
        "Server configuration and optimization",
        "CI/CD pipeline setup",
        "Database migration and verification",
        "Environment configuration management",
        "Production deployment and monitoring"
      ]
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-white" />,
      title: "6. Maintenance & Support",
      description: "Our relationship doesn&apos;t end at launch. We provide ongoing maintenance, performance monitoring, and support to ensure your application continues to evolve with your business needs.",
      steps: [
        "Regular security updates and patches",
        "Performance monitoring and optimization",
        "Feature enhancements and updates",
        "Technical support and issue resolution",
        "Analytics review and insights reporting"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-sm font-medium text-indigo-800 mb-3 mt-10">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2"></span>
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Comprehensive Development Solutions</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We offer end-to-end services to help you build, launch, and scale your digital products with confidence, using industry best practices and cutting-edge technologies.
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

        <div className="bg-slate-100 p-8 rounded-2xl mb-16">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{services[activeService].title}</h3>
              <p className="text-slate-600 mb-6">{services[activeService].description}</p>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <h4 className="text-md font-semibold text-slate-800 mb-3">Key Benefits</h4>
                <ul className="space-y-2">
                  {services[activeService].benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle size={16} className="text-green-500 mr-2 mt-1" />
                      <span className="text-slate-600 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <button className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-5 py-2 rounded-lg flex items-center text-sm font-medium hover:shadow-lg transition-all">
                  Get Started
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-lg font-semibold text-slate-800 mb-4">Technologies We Use</h4>
                <div className="flex flex-wrap gap-2 mb-6">
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

        {/* Development Process Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-sm font-medium text-indigo-800 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2"></span>
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Stage-by-Stage Development Journey</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our proven development methodology ensures transparent communication, timely delivery, and exceptional quality at every stage.
            </p>
          </div>

          {/* Process Steps Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {developmentProcess.map((stage, index) => (
              <button 
                key={index}
                onClick={() => setActiveStage(index)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeStage === index 
                    ? `bg-gradient-to-r ${services[0].bgColor} text-white shadow-md` 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {stage.title}
              </button>
            ))}
          </div>

          {/* Active Stage Details */}
          <div className="bg-slate-100 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className={`p-8 md:col-span-1 flex flex-col justify-center bg-gradient-to-r ${services[0].bgColor} text-white`}>
                <div className="p-4 bg-white/20 rounded-full inline-flex mb-6 w-14 h-14 items-center justify-center">
                  {developmentProcess[activeStage].icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{developmentProcess[activeStage].title}</h3>
                <p className="text-white/80">
                  {developmentProcess[activeStage].description}
                </p>
              </div>
              <div className="p-8 md:col-span-2 bg-white">
                <h4 className="text-lg font-semibold text-slate-800 mb-6">Key Activities</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {developmentProcess[activeStage].steps.map((step, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <div className="flex items-start">
                        <div className="mr-3 p-2 bg-indigo-100 rounded-full">
                          <span className="flex h-5 w-5 items-center justify-center bg-indigo-600 text-white text-xs font-bold rounded-full">
                            {idx + 1}
                          </span>
                        </div>
                        <div>
                          <p className="text-slate-700">{step}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">Deliverables</h4>
                  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                    {activeStage === 0 && (
                      <ul className="space-y-2">
                        <li className="flex items-center text-slate-700">
                          <CheckCircle size={16} className="text-indigo-600 mr-2" />
                          Project Brief and Scope Document
                        </li>
                        <li className="flex items-center text-slate-700">
                          <CheckCircle size={16} className="text-indigo-600 mr-2" />
                          Technical Requirements Specification
                        </li>
                        <li className="flex items-center text-slate-700">
                          <CheckCircle size={16} className="text-indigo-600 mr-2" />
                          Project Timeline with Milestones
                        </li>
                      </ul>
                    )}
                    {activeStage === 1 && (
                      <ul className="space-y-2">
                        <li className="flex items-center text-slate-700">
                          <CheckCircle size={16} className="text-indigo-600 mr-2" />
                          Wireframes and User Flows
                        </li>
                        <li className="flex items-center text-slate-700">
                          <CheckCircle size={16} className="text-indigo-600 mr-2" />
                          UI Design Mockups
                        </li>
                        <li className="flex items-center text-slate-700">
                          <CheckCircle size={16} className="text-indigo-600 mr-2" />
                          Interactive Prototypes
                        </li>
                      </ul>
                    )}
                    {activeStage === 2 && (
                      <ul className="space-y-2">
                        <li className="flex items-center text-slate-700">
                          <CheckCircle size={16} className="text-indigo-600 mr-2" />
                          Working Code in Development Environment
                        </li>
                        <li className="flex items-center text-slate-700">
                          <CheckCircle size={16} className="text-indigo-600 mr-2" />
                          API Documentation
                        </li>
                        <li className="flex items-center text-slate-700">
                          <CheckCircle size={16} className="text-indigo-600 mr-2" />
                          Sprint Progress Reports
                        </li>
                      </ul>
                    )}
                    {activeStage === 3 && (
                      <ul className="space-y-2">
                        <li className="flex items-center text-slate-700">
                          <CheckCircle size={16} className="text-indigo-600 mr-2" />
                          QA Test Reports
                        </li>
                        <li className="flex items-center text-slate-700">
                          <CheckCircle size={16} className="text-indigo-600 mr-2" />
                          Performance Optimization Recommendations
                        </li>
                        <li className="flex items-center text-slate-700">
                          <CheckCircle size={16} className="text-indigo-600 mr-2" />
                          Security Audit Results
                        </li>
                      </ul>
                    )}
                    {activeStage === 4 && (
                      <ul className="space-y-2">
                        <li className="flex items-center text-slate-700">
                          <CheckCircle size={16} className="text-indigo-600 mr-2" />
                          Deployment Strategy Document
                        </li>
                        <li className="flex items-center text-slate-700">
                          <CheckCircle size={16} className="text-indigo-600 mr-2" />
                          Production-Ready Application
                        </li>
                        <li className="flex items-center text-slate-700">
                          <CheckCircle size={16} className="text-indigo-600 mr-2" />
                          Environment Configuration Guide
                        </li>
                      </ul>
                    )}
                    {activeStage === 5 && (
                      <ul className="space-y-2">
                        <li className="flex items-center text-slate-700">
                          <CheckCircle size={16} className="text-indigo-600 mr-2" />
                          Maintenance Schedule
                        </li>
                        <li className="flex items-center text-slate-700">
                          <CheckCircle size={16} className="text-indigo-600 mr-2" />
                          Performance Analytics Reports
                        </li>
                        <li className="flex items-center text-slate-700">
                          <CheckCircle size={16} className="text-indigo-600 mr-2" />
                          Feature Enhancement Roadmap
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Process Navigation Arrows */}
            <div className="bg-white px-8 py-4 flex justify-between items-center border-t border-slate-200">
              <button 
                onClick={() => setActiveStage(prev => prev > 0 ? prev - 1 : developmentProcess.length - 1)}
                className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800"
              >
                <ArrowRight size={16} className="mr-2 transform rotate-180" />
                Previous Stage
              </button>
              <div className="flex space-x-1">
                {developmentProcess.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveStage(idx)}
                    className={`h-2 rounded-full transition-all ${
                      activeStage === idx ? 'w-6 bg-indigo-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
              <button 
                onClick={() => setActiveStage(prev => (prev + 1) % developmentProcess.length)}
                className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800"
              >
                Next Stage
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Let&apos;s discuss your requirements and build a solution that perfectly meets your business needs.
            </p>
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;