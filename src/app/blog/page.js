// app/blog/page.jsx

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { db } from "../admin/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import Navbar from "../components/navbarComponent";
import Footer from "../components/footerCompononet";
import Spinner from "../components/Loading";

const Blog = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogsRef = collection(db, "blogs");
      const data = await getDocs(blogsRef);
      setBlogs(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    fetchBlogs();
  }, []);

  if(!blogs) return <Spinner />
  return (
    <>
     
    <Navbar />
    <div style={{backgroundImage:'url("./herobg.png")'}} className="min-h-[200vh] flex flex-col items-center justify-center bg-white text-black p-8 bg-no-repeat bg-cover">
      <div className="w-3/4 flex justify-center py-8 px-2">
          <h1 className="text-3xl  md:text-6xl  font-bold" >Blogs</h1>
      </div>
      <div className="flex flex-col  md:grid grid-cols-3 grid-rows-3 gap-8 ">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.id}`}
            className="bg-gray-100 w-[40vh] h-[50vh] flex flex-col justify-end rounded-2xl overflow-hidden  duration-300 relative"
          >
            {blog.imageUrl && (
              <img
                  src={blog.imageUrl}               
                  className="w-full h-full object-cover scale-100 absolute inset-0 z-1 transform transition-transform duration-300 hover:scale-110 opacity-40 "
             />
            )}
            <div className="p-4 flex flex-col z-10">
              <h3 className="text-sm text-gray-600">{blog.topic}</h3>
              <h2 className="text-xl font-bold text-gray-800">{blog.title}</h2>
              <p className="text-sm text-gray-500">{blog.date}</p>
              <p className="mt-2 text-gray-700">{blog.shortDesc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Blog;
