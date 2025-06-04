"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../admin/firebaseConfig";
import Spinner from "../../../components/Loading";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const docRef = doc(db, "portfolio", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProject({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.warn("No such project found.");
        }
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    if (id) fetchProject();
  }, [id]);

  if (!project) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#114959] text-white">
        <Spinner />
      </div>
    );
  }

  return (
    <div
      className="min-h-screen w-full bg-cover bg-no-repeat bg-center text-black"
      style={{ backgroundImage: 'url("/projectbg.png")' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10">
        {/* Project Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-left">
          {project.projectName}
        </h1>

        {/* Project Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left font-semibold text-lg mb-10">
          <div>
            <h3 className="text-gray-700">Year</h3>
            <p className="text-black">{project.year}</p>
          </div>
          <div>
            <h3 className="text-gray-700">Client</h3>
            <p className="text-black">{project.client}</p>
          </div>
          <div>
            <h3 className="text-gray-700">Industry</h3>
            <p className="text-black">{project.industry}</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full aspect-video overflow-hidden rounded-2xl shadow-lg">
          <img
            src={project.imageUrl}
            alt={project.projectName}
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      <div className="py-5 font-normal text-base md:text-lg leading-relaxed text-black md:text-justify  rounded-xl p-4 ">
         <p>{project.longDesc}</p>
     </div>

      </div>
    </div>
  );
};

export default ProjectDetail;
