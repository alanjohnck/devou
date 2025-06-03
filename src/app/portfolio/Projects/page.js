"use client";

import { useEffect, useState } from "react";
import { db } from "../../admin/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import CustomCursor from "../../components/customCursorComponent";

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
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "portfolio"));
        const fetched = querySnapshot.docs.map((doc) => doc.data());

        // Merge layout + fetched data
        const mergedData = gridLayout.map((layout, index) => {
          const project = fetched[index] || {};
          return {
            title: project.projectName || "No Title",
            description: project.shortDesc || "No Description",
            imageUrl: project.imageUrl || "",
            ...layout,
          };
        });

        setProjects(mergedData);
      } catch (err) {
        console.error("Error fetching Firestore projects:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-[150vh] w-screen bg-[#114959] flex items-center justify-center">
      <div className="flex flex-col md:grid grid-cols-4 grid-rows-5 gap-4 h-[80vh] w-[80vw] relative">
        <CustomCursor />
        {projects.map((item, idx) => (
          <div
            key={idx}
            className={`${item.grid} ${item.bg} cursor-target flex flex-col items-start justify-start rounded-3xl p-4 relative`}
          >
            {item.imageUrl && (
              <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute top-0 left-0 w-full h-full object-contain opacity-10 z-0"
              />
            )}
            <h2 className="text-3xl font-bold text-black mb-2 z-10">{item.title}</h2>
            <p className="text-xl text-gray-700 z-10">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
