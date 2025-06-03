"use client";

import React, { useEffect, useState } from "react";
import { db } from "../admin/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CareerPage = () => {
  const [jobOpenings, setJobOpenings] = useState([]);
 
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const careersRef = collection(db, "careers");
        const snapshot = await getDocs(careersRef);
        const jobs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setJobOpenings(jobs);
      } catch (error) {
        console.error("Error fetching careers:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
    <Navbar />
    <section style={{backgroundImage:'url("./herobg.png")'}}  id="career" className=" h-fit md:h-screen  md:p-0 w-screen bg-slate-50 bg-cover bg-repeat">
      <div className=" pt-30">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Join Our Team
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            At Devou, we are always looking for talented individuals to help us
            build innovative digital solutions. Explore our current job
            openings and become a part of our journey.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col gap-12">
  {jobOpenings.map((job, index) => (
    <div
      key={job.id || index}
      className={`flex flex-col md:flex-row items-center ${
        index % 2 == 0 ? "md:flex-row-reverse" : ""
      } gap-8`}
    >
     

      {/* Job Description Panel */}
      <div className={`md:w-1/2 text-white bg-linear-to-r  from-[#07232B] to-[#004966] ${index%2==0?"rounded-l-2xl":"rounded-r-2xl"}  shadow-md hover:shadow-lg transition-shadow p-6`}>
        <h3 className="text-xl font-semibold  mb-2">
          {job.role}
        </h3>
        <p className=" mb-4">{job.description}</p>
        {/* <ul className="list-disc list-inside  mb-4">
          {job.requirements?.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul> */}
        <p className="text-sm  mb-2">
          <strong>Location:</strong> {job.location}
        </p>
        <p className="text-sm  mb-4">
          <strong>Type:</strong> {job.type}
        </p>
        <a
          href="mailto:devou.in@gmail.com?subject=Application for the Interns"
          className="px-4 py-2 bg-[#77C3DF] text-black rounded-lg hover:bg-[#77C3DF]/30 transition-colors"
        >
          Apply Now
        </a>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
    <Footer />
  </>
  );
};

export default CareerPage;
