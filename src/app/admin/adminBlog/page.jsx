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

const BlogAdmin = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    topic: "",
    title: "",
    date: "",
    shortDesc: "",
    longDesc: "",
    imageUrl: "",
  });

  const blogsRef = collection(db, "blogs");

  const fetchBlogs = async () => {
    const data = await getDocs(blogsRef);
    setBlogs(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await addDoc(blogsRef, formData);
    fetchBlogs();
    setFormData({
      topic: "",
      title: "",
      date: "",
      shortDesc: "",
      longDesc: "",
      imageUrl: "",
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "blogs", id));
    fetchBlogs();
  };

  const handleUpdate = async (id) => {
    await updateDoc(doc(db, "blogs", id), formData);
    fetchBlogs();
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black p-8 text-center ">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">📝 Blog Admin Panel</h2>

        <div className="grid grid-cols-1 gap-4 mb-6">
          {["topic", "title", "date", "shortDesc", "longDesc", "imageUrl"].map((field) => (
            <input
              key={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          ))}
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Add Blog
          </button>
        </div>

        <ul className="space-y-4">
          {blogs.map((b) => (
            <li key={b.id} className="border p-4 rounded-md shadow-sm bg-gray-50">
              <div className="font-semibold text-lg">{b.title}</div>
              <div className="text-sm text-gray-600">{b.date}</div>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => handleUpdate(b.id)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(b.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogAdmin;
