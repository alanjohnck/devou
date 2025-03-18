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
          {/* Modernized Video Side */} 
          <div className="lg:w-1/2 relative">
            <div className="rounded-xl overflow-hidden shadow-xl relative group">
              {/* If you have a GIF, use an image tag */}
              <img 
                src="/aboutvideo.gif" 
                alt="About Devou" 
                className="w-full rounded-xl transform transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Alternative: If you have an actual video file */}
              {/* 
              <video 
                className="w-full rounded-xl transform transition-transform duration-500 group-hover:scale-105"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src="/aboutvideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              */}
              
              {/* Modern overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Optional play button styling if you want to add it later */}
              <div className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Zap size={16} className="text-indigo-600" />
              </div>
            </div>
            
            {/* Optional caption */}
          </div>
           
          {/* Text Content Side - keeping your original content */}
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