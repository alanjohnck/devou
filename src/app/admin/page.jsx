"use client";
import React, { useState } from "react";
import PortfolioAdmin from "./adminPortfolio/page";
import CareersAdmin from "./adminCareers/page";
import BlogAdmin from "./adminBlog/page";
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("portfolio");

  const renderSection = () => {
    switch (activeTab) {
      case "portfolio":
        return <PortfolioAdmin />;
      case "careers":
        return <CareersAdmin />;
      case "blogs":
        return <BlogAdmin />;
      default:
        return null;
    }
  };

  return (
    <div className="h-fit w-screen bg-white text-black">
      <div className="w-full h-auto  mx-auto bg-white shadow rounded-lg p-8">
        <img src="./logobgwhite.png" className="w-20 h-8 "></img>
        <h1 className="text-2xl font-bold text-center mb-4">Admin Dashboard</h1>

        <div className="h-fit max-w-full  flex justify-center gap-4 mb-6">
          <button
            onClick={() => setActiveTab("portfolio")}
            className={`px-4 py-2 rounded font-medium ${
              activeTab === "portfolio"
                ? "bg-[#114959] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Portfolio
          </button>
          <button
            onClick={() => setActiveTab("careers")}
            className={`px-4 py-2 rounded font-medium ${
              activeTab === "careers"
                ? "bg-[#114959] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
           Careers
          </button>
          <button
            onClick={() => setActiveTab("blogs")}
            className={`px-4 py-2 rounded font-medium ${
              activeTab === "blogs"
                ? "bg-[#114959] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
           Blogs
          </button>
        </div>
        <div className="max-w-screen h-fit">
        {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
