"use client";

import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const PortfolioAdmin = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    projectName: "",
    shortDesc: "",
    year: "",
    client: "",
    industry: "",
    imageUrl: "",
    longDesc: "",
  });

  const portfolioRef = collection(db, "portfolio");

  const fetchProjects = async () => {
    const data = await getDocs(portfolioRef);
    setProjects(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await addDoc(portfolioRef, formData);
    fetchProjects();
    setFormData({
      projectName: "",
      shortDesc: "",
      year: "",
      client: "",
      industry: "",
      imageUrl: "",
      longDesc: "",
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "portfolio", id));
    fetchProjects();
  };

  const handleUpdate = async (id) => {
    await updateDoc(doc(db, "portfolio", id), formData);
    fetchProjects();
  };

  return (
    <div className="p-6 w-screen h-screen mx-auto bg-white text-black">
      <h2 className="text-2xl font-bold mb-6 text-center">📁 Portfolio Admin</h2>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-xl shadow mb-8">
        {[
          { name: "projectName", placeholder: "Project Name" },
          { name: "shortDesc", placeholder: "Short Description" },
          { name: "year", placeholder: "Year" },
          { name: "client", placeholder: "Client" },
          { name: "industry", placeholder: "Industry" },
          { name: "imageUrl", placeholder: "Image URL" },
        ].map(({ name, placeholder }) => (
          <input
            key={name}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder={placeholder}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        ))}
        <textarea
          name="longDesc"
          value={formData.longDesc}
          onChange={handleChange}
          placeholder="Long Description"
          rows={4}
          className="md:col-span-2 border border-gray-300 px-4 py-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          onClick={handleSubmit}
          className="md:col-span-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded transition"
        >
          ➕ Add Project
        </button>
      </div>

      {/* Projects List */}
      <ul className="space-y-4">
        {projects.map((p) => (
          <li
            key={p.id}
            className="bg-gray-100 rounded-lg p-4 shadow flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="text-lg font-semibold">{p.projectName}</p>
              <p className="text-sm text-gray-600">Year: {p.year}</p>
            </div>
            <div className="mt-2 md:mt-0 flex gap-2">
              <button
                onClick={() => handleUpdate(p.id)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(p.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioAdmin;
