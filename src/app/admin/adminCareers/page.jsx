"use client"

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
    await addDoc(careersRef, formData);
    fetchRoles();
    setFormData({ role: "", description: "", type: "", location: "" });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "careers", id));
    fetchRoles();
  };

  const handleUpdate = async (id) => {
    await updateDoc(doc(db, "careers", id), formData);
    fetchRoles();
  };

  return (
    <div>
      <h2>Careers</h2>
      <input name="role" value={formData.role} onChange={handleChange} placeholder="Role" />
      <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
      <input name="type" value={formData.type} onChange={handleChange} placeholder="Type" />
      <input name="location" value={formData.location} onChange={handleChange} placeholder="Remote/Onsite" />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {roles.map((r) => (
          <li key={r.id}>
            {r.role} - {r.type} ({r.location})
            <button onClick={() => handleUpdate(r.id)}>Update</button>
            <button onClick={() => handleDelete(r.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CareersAdmin;