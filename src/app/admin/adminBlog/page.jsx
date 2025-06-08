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
  const [editingId, setEditingId] = useState(null); // Track if editing an existing blog

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
    if (editingId) {
      // If editing, update the existing blog
      await updateDoc(doc(db, "blogs", editingId), formData);
      setEditingId(null); // Reset editing state
    } else {
      // Otherwise, add a new blog
      await addDoc(blogsRef, formData);
    }
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

  const handleEdit = (blog) => {
    setFormData({
      topic: blog.topic || "",
      title: blog.title || "",
      date: blog.date || "",
      shortDesc: blog.shortDesc || "",
      longDesc: blog.longDesc || "",
      imageUrl: blog.imageUrl || "",
    });
    setEditingId(blog.id);
  };

  return (
    <div className="min-h-screen bg-white text-black p-8 text-center ">
      <div className="max-w-screen mx-auto bg-white shadow-lg rounded-lg p-6">
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
            className="bg-[#114959] text-white px-4 py-2 rounded hover:bg-[#114959]/80 transition"
          >
            {editingId ? "Save Changes" : "Add Blog"}
          </button>
          {editingId && (
            <button
              onClick={() => {
                setEditingId(null);
                setFormData({
                  topic: "",
                  title: "",
                  date: "",
                  shortDesc: "",
                  longDesc: "",
                  imageUrl: "",
                });
              }}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition mt-2"
            >
              Cancel Edit
            </button>
          )}
        </div>

        <ul className="space-y-4">
          {blogs.map((b) => (
            <li key={b.id} className="border p-4 rounded-md shadow-sm bg-gray-50">
              <div className="font-semibold text-lg">{b.title}</div>
              <div className="text-sm text-gray-600">{b.date}</div>
              <div className="mt-2 flex gap-2 justify-center">
                <button
                  onClick={() => handleEdit(b)}
                  className="px-3 py-1 bg-[#114959] text-white rounded hover:bg-[#114959]/80 transition"
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
