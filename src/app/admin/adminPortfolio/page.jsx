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

  const [editingId, setEditingId] = useState(null);

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
    if (editingId) {
      // Update existing project
      await updateDoc(doc(db, "portfolio", editingId), formData);
      setEditingId(null);
    } else {
      // Add new project
      await addDoc(portfolioRef, formData);
    }
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
    // If deleting project being edited, reset form & editing state
    if (editingId === id) {
      setEditingId(null);
      setFormData({
        projectName: "",
        shortDesc: "",
        year: "",
        client: "",
        industry: "",
        imageUrl: "",
        longDesc: "",
      });
    }
  };

  const handleEdit = (project) => {
    setFormData({
      projectName: project.projectName || "",
      shortDesc: project.shortDesc || "",
      year: project.year || "",
      client: project.client || "",
      industry: project.industry || "",
      imageUrl: project.imageUrl || "",
      longDesc: project.longDesc || "",
    });
    setEditingId(project.id);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
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

  return (
    <div className="p-6   mx-auto bg-white text-black">
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
          className="md:col-span-2 bg-[#114959] hover:bg-[#114959]/80 text-white font-semibold py-2 rounded transition"
        >
          {editingId ? "Save Changes" : "Add Project"}
        </button>
        {editingId && (
          <button
            onClick={handleCancelEdit}
            className="md:col-span-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 rounded transition"
          >
            Cancel Edit
          </button>
        )}
      </div>

      {/* Projects List */}
      <ul className="space-y-4">
        {projects.map((p) => (
          <li
            key={p.id}
            className="bg-gray-100 rounded-lg p-4 shadow flex flex-col md:flex-row md:items-center md:justify-around"
          >
            <div>
              <p className="text-lg font-semibold">{p.projectName}</p>
              <p className="text-sm text-gray-600">Year: {p.year}</p>
            </div>
            <div className="mt-2 md:mt-0 flex gap-2">
              <button
                onClick={() => handleEdit(p)}
                className="bg-[#114959] hover:bg-[#114959]/80 text-white px-3 py-1 rounded"
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
