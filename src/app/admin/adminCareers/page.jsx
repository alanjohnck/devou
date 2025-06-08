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

const CareersAdmin = () => {
  const [roles, setRoles] = useState([]);
  const [formData, setFormData] = useState({
    role: "",
    description: "",
    type: "",
    location: "",
  });
  const [editingId, setEditingId] = useState(null); // Track role being edited

  const careersRef = collection(db, "careers");

  const fetchRoles = async () => {
    const data = await getDocs(careersRef);
    setRoles(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (editingId) {
      await updateDoc(doc(db, "careers", editingId), formData);
      setEditingId(null);
    } else {
      await addDoc(careersRef, formData);
    }
    fetchRoles();
    setFormData({ role: "", description: "", type: "", location: "" });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "careers", id));
    fetchRoles();
    if (editingId === id) {
      setEditingId(null);
      setFormData({ role: "", description: "", type: "", location: "" });
    }
  };

  const handleEdit = (role) => {
    setFormData({
      role: role.role || "",
      description: role.description || "",
      type: role.type || "",
      location: role.location || "",
    });
    setEditingId(role.id);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({ role: "", description: "", type: "", location: "" });
  };

  return (
    <div className=" mx-auto p-6 bg-white text-black rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        💼 Careers Admin Panel
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="Role"
          className="border rounded px-4 py-2 w-full required"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="border rounded px-4 py-2 w-full required"
        />
        <input
          name="type"
          value={formData.type}
          onChange={handleChange}
          placeholder="Type (Full-time/Part-time)"
          className="border rounded px-4 py-2 w-full required"
        />
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Remote/Onsite"
          className="border rounded px-4 py-2 w-full required"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-[#114959] text-white px-6 py-2 rounded hover:bg-[#114959]/70 transition"
      >
        {editingId ? "Save Changes" : "Add Role"}
      </button>

      {editingId && (
        <button
          onClick={handleCancelEdit}
          className="ml-4 bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition"
        >
          Cancel Edit
        </button>
      )}

      <ul className="mt-8 space-y-4">
        {roles.map((r) => (
          <li
            key={r.id}
            className="border p-4 rounded shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-2"
          >
            <div>
              <p className="font-semibold text-lg">{r.role}</p>
              <p className="text-sm text-gray-600">{r.description}</p>
              <p className="text-sm">
                <span className="text-gray-700 font-medium">{r.type}</span> — {r.location}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(r)}
                className="bg-[#114959] text-white px-4 py-1 rounded hover:bg-[#114959]/80"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(r.id)}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
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

export default CareersAdmin;
