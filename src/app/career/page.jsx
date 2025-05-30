"use client";
import React from "react";

const CareerPage = () => {
  const jobOpenings = [
    {
      title: "Backend Developer",
      location: "Remote",
      type: "Internship",
      description:
        "Join our team as a Backend Developer to build scalable and secure APIs using Node.js and GraphQL.",
      requirements: [
        "Proficiency in Node.js and Express.",
        "Experience with GraphQL and REST APIs.",
        "Knowledge of database systems like MongoDB or PostgreSQL.",
        "Ability to write clean and maintainable code.",
      ],
    },
    {
      title: "WordPress Developer",
      location: "Remote",
      type: "Internship",
      description:
        "We are seeking a talented WordPress Developer to create and maintain custom WordPress themes and plugins, ensuring high performance and availability.",
      requirements: [
        "Proficiency in WordPress development, including custom themes and plugins.",
        "Strong knowledge of PHP, HTML, CSS, and JavaScript.",
        "Experience with WordPress APIs and hooks.",
        "Understanding of SEO best practices.",
        "Ability to troubleshoot and resolve website issues.",
        "Good communication and problem-solving skills.",
      ],
    },
  ];

  return (
    <section id="career" className="py-20 pt-20 bg-slate-50">
      <div className="container mx-auto px-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobOpenings.map((job, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {job.title}
              </h3>
              <p className="text-slate-600 mb-4">{job.description}</p>
              <ul className="list-disc list-inside text-slate-600 mb-4">
                {job.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
              <p className="text-sm text-slate-500 mb-2">
                <strong>Location:</strong> {job.location}
              </p>
              <p className="text-sm text-slate-500 mb-4">
                <strong>Type:</strong> {job.type}
              </p>
              <a
                  href="mailto:devou.in@gmail.com?subject=Application for the Interns"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerPage;