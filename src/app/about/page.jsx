
import { 
    ChevronRight, 
   
    Zap, 
  
    Users, 
   
    Server, 
    Globe, 
    
  } from 'lucide-react';

const AboutSection = () => {
    return (
      <section id="about" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 h-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image/Visual Side */}
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/80 to-purple-600/80 opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center">
                  <p className="text-white font-medium text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-center px-6">
                    Founded in 2020, we've grown from a team of 3 to 20+ passionate tech experts.
                  </p>
                </div>
                <div className="h-64 md:h-96 bg-gradient-to-br from-indigo-200 to-purple-200 flex items-center justify-center">
                  <Users size={120} className="text-indigo-900/30" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-teal-400 rounded-lg"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-indigo-600 rounded-lg"></div>
            </div>
            
            {/* Text Content Side */}
            <div className="lg:w-1/2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-sm font-medium text-indigo-800 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2"></span>
                About Devou
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">We turn complex ideas into elegant digital solutions</h2>
              
              <p className="text-slate-600 mb-6">
                At Devou, we believe in the transformative power of technology when it's thoughtfully applied. 
                Our team combines technical expertise with creative thinking to deliver solutions that not only 
                work flawlessly but also provide exceptional user experiences.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-indigo-100 rounded-lg">
                    <Users size={20} className="text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Experienced Team</h3>
                    <p className="text-slate-500 text-sm">Top talent from diverse tech backgrounds</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-indigo-100 rounded-lg">
                    <Zap size={20} className="text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Agile Process</h3>
                    <p className="text-slate-500 text-sm">Rapid iteration with continuous feedback</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-indigo-100 rounded-lg">
                    <Globe size={20} className="text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Global Reach</h3>
                    <p className="text-slate-500 text-sm">Serving clients across 15+ countries</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-indigo-100 rounded-lg">
                    <Server size={20} className="text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Future-Proof</h3>
                    <p className="text-slate-500 text-sm">Building with scalability in mind</p>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </section>
    );
  };
  export default AboutSection;