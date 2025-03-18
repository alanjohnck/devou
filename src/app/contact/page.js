
"use client"
import React, { useState } from 'react';
import { ChevronRight, MapPin, Mail, Phone,Whatsapp, Twitter, Linkedin, Github, Zap, Instagram } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    submitted: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({ ...formState, submitted: true });
  
    // Construct the Cal.com URL with query parameters
    const { name, email, message } = formState;
    const calUrl = `https://cal.com/devou.in/30min?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&notes=${encodeURIComponent(message)}`;
  
    // Redirect to Cal.com scheduling page
    window.location.href = calUrl;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-white mb-6">
            <span className="flex h-2 w-2 rounded-full bg-teal-400 mr-2"></span>
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to start your project?</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Contact us today to discuss how we can help bring your vision to life with our expertise in app and web development.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all">
              <div className="p-3 bg-teal-400/20 rounded-lg inline-flex mb-4">
                <MapPin className="h-6 w-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Location</h3>
              <p className="text-white/70">
                Thrikkakara<br />
                Ernakulam,682021
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all">
              <div className="p-3 bg-purple-400/20 rounded-lg inline-flex mb-4">
                <Mail className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-white/70">
              devou.in@gmail.com<br />
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all">
              <div className="p-3 bg-blue-400/20 rounded-lg inline-flex mb-4">
                <Phone className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-white/70">
              +91 98950 89090<br />
              </p>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/devou.in" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all">
                <Instagram  className="h-5 w-5 text-white" />
              </a>
              
              <a href="https://github.com/devou-org" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all">
                <Github className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              {formState.submitted ? (
                <div className="text-center py-8">
                   <p className='font-bold text-3xl'>Scheduling your meet....</p>
                  {/* <button 
                    className="px-6 py-3 bg-white text-indigo-900 font-medium rounded-lg inline-flex items-center hover:bg-white/90 transition-all"
                    onClick={() => setFormState({name: '', email: '', message: '', submitted: false})}
                  >
                    Send Another Message
                  </button> */}
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-white mb-2 text-sm">Your Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-teal-400 text-white"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2 text-sm">Your Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-teal-400 text-white"
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-white mb-2 text-sm">Your Message</label>
                    <textarea 
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-teal-400 text-white h-32 resize-none"
                      placeholder="Tell us about your project..."
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="px-6 py-3 bg-white text-indigo-900 font-medium rounded-lg flex items-center hover:bg-white/90 transition-all"
                  >
                    Send Message
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;