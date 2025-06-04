"use client";

import { useEffect, useState } from "react";
import { db } from "../../admin/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import CustomCursor from "@/app/components/customCursorComponent";
import Spinner from "../../components/Loading";
const gridLayout = [
  {
    bg: "bg-linear-to-b from-[#E6DBFF] to-white",
    grid: "col-start-1 col-end-3 row-start-1 row-end-4",
  },
  {
    bg: "bg-linear-to-b from-[#DAFFD4] to-white",
    grid: "col-start-1 col-end-3 row-start-4 row-end-6",
  },
  {
    bg: "bg-linear-to-b from-[#DBF6FF] to-white",
    grid: "col-start-3 col-end-5 row-start-1 row-end-3",
  },
  {
    bg: "bg-linear-to-b from-[#C5FFC1] to-white",
    grid: "col-start-3 col-end-5 row-start-3 row-end-6",
  },
];

const ProjectSection = () => {
  const [projects, setProjects] = useState(null);
  const [hoveredId, setHoveredId] = useState(null); // <-- track current project ID

useEffect(() => {
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "portfolio"));
      const fetched = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const mergedData = gridLayout.map((layout, index) => {
        const project = fetched[index] || {};
        return {
          ...layout,
          id: project.id,
          title: project.projectName || "No Title",
          description: project.shortDesc || "No Description",
          imageUrl: project.imageUrl || "",
        };
      });

      setProjects(mergedData);
    } catch (err) {
      console.error("Error fetching Firestore projects:", err);
    }
  };

  fetchData();
  }, []);
 
   if(!projects) return <Spinner />

  return (
    <>
      <CustomCursor projectId={hoveredId} /> {/* <-- pass hoveredId */}
      <div className="h-[150vh] w-screen bg-[#114959] flex items-center justify-center">
        <div className="flex flex-col md:grid grid-cols-4 grid-rows-5 gap-4 h-[80vh] w-[80vw] relative">
          {projects.map((item, idx) => (
            <div
              key={idx}
              className={`${item.grid} ${item.bg} cursor-target flex flex-col items-start justify-start rounded-3xl p-4 relative z-10 overflow-hidden`}
              onMouseEnter={() => setHoveredId(item.id)} // set id on hover
              onMouseLeave={() => setHoveredId(null)}     // clear on leave
            >
              
              <h2 className="text-3xl font-bold text-black mb-2 z-10">{item.title}</h2>
              <p className="text-xl text-black z-10">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
