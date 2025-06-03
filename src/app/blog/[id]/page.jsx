// app/blog/[id]/page.jsx

"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { db } from "../../admin/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { ArrowLeftIcon } from "lucide-react";
const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    const fetchBlog = async () => {
      const docRef = doc(db, "blogs", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBlog(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return  <div className="flex justify-center items-center  w-screen  h-screen bg-white">
      <div className="w-12 h-12 border-4 border-[#122933] border-dashed rounded-full animate-spin"></div>
    </div>;
  }

  return (
    <>
   <div className="w-screen h-fit flex justify-center pt-12 bg-white">
    <div className="min-h-screen max-w-4xl  bg-white p-8">
       <button className="text-black cursor-pointer" onClick={()=>{window.history.back()}}>
             <ArrowLeftIcon />
       </button>
      {blog?.imageUrl && (
        <img
          src={blog.imageUrl || "https://i.postimg.cc/659kD1wm/temp-Imagem-DI4-Ee.avif"}
          alt={blog.title}
          className="w-full h-64 object-contain rounded-lg mb-6"
        />
      )}
      <h3 className="text-sm text-gray-600">{blog.topic}</h3>
      <h1 className="text-3xl font-bold text-gray-800">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
      <p className="text-gray-700">{blog.longDesc}</p>
    </div>
    </div>
    </>
  );
};

export default BlogDetail;
