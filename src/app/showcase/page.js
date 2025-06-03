"use client"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import { Database,Sparkles,AppWindow } from "lucide-react"

const ShowCase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const cardData = [
    {
      title: "Cutting-Edge Technology",
      description: "Leveraging the latest frameworks and technologies for optimal performance.",
      opacityRange: [0, 0.3],
      scaleRange: [0, 0.3],
      gridClass: "md:col-start-1 col-end-2 row-start-1 row-end-3",
      transition: { type: "spring", stiffness: 100, damping: 25 },
      icon: Sparkles
    },
    {
      title: "Seamless UX",
      description: "Creating intuitive interfaces that delight and engage your users.",
      opacityRange: [0.2, 0.4],
      scaleRange: [0.2, 0.6],
      gridClass: "col-start-2 col-end-3 row-start-2 row-end-4",
      transition: { type: "spring", stiffness: 120, damping: 20 },
      icon: AppWindow
    },
    {
      title: "Scalable Solutions",
      description: "Building systems that grow with your business needs and user base.",
      opacityRange: [0.3, 0.5],
      scaleRange: [0.4, 0.8],
      gridClass: "col-start-3 col-end-4 row-start-3 row-end-5",
      transition: { type: "spring", stiffness: 80, damping: 30 },
      icon: Database
    }
  ];

  return (
    <div
      ref={sectionRef}
      
      className="flex flex-col md:grid grid-cols-3 grid-rows-4 h-[150vh] w-screen justify-center gap-5 p-4"
    >
       <h1 className="text-6xl md:hidden font-bold p-4 text-black text-center">We Offer</h1>
       <br />
      {cardData.map((card, index) => {
        const opacity = useTransform(scrollYProgress, card.opacityRange, [0, 1]);
        const scale = useTransform(scrollYProgress, card.scaleRange, [0.8, 1]);

        return (
          <motion.div
            key={index}
            style={{ opacity, scale }}
            transition={card.transition}
            className={`flex rounded-2xl p-8 ${card.gridClass} bg-[#122933] text-white font-bold scale-x-75 md:rounded-4xl shadow-2xl border border-white/20 backdrop-blur-sm ${index === 0 ? 'stciky top-0' : ''}`}
          >
            <div className="text-center flex ">
              <div className={`f ${index === 0 ? 'md:text-xl' : 'text-xl'} ${card.icon ? 'flex flex-col items-center justify-center gap-5' : ''}`}>
                {card.icon && <card.icon className="w-20 h-20" />}
                <h1 className={`${index === 0 ? 'text-3xl md:text-6xl' : 'text-6xl'}`}>
                  {card.title}
                </h1>
                <p>{card.description}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ShowCase;