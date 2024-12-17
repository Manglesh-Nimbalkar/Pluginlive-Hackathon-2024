
"use client"
import DashboardBoxes from "@/components/DashboardBoxes/DashboardBoxes";
import SalesStats from "@/components/SalesStats/SalesStats";
import TopSellingProducts from "@/components/TopSellingProducts/TopSellingProducts";
import WelcomeRow from "@/components/WelcomeRow/WelcomeRow";
import Image from "next/image";

// import Home_page from "../../../../public/assets/imgs/Home_page.png";
// const Home_main = Home_page.src;

import React, { useState,useEffect } from "react";
import { FaVideo, FaMicrophone, FaChartBar,FaGlobe } from "react-icons/fa";
import { getAuth, onAuthStateChanged } from "firebase/auth";





const Dashboard = () => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });
  }, []);

  if (!user) {
    return <p>Loading...</p>;  // Loading state while user is not authenticated or data is being fetched
  }


  // const [userData] = useState({
  //   name: "Sarah Anderson",
  //   email: "sarah.anderson@example.com",
  //   bio: "Senior Software Engineer with expertise in React and Cloud Technologies. Passionate about building scalable applications and mentoring junior developers.",
  //   location: "San Francisco, CA",
  //   profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  // });

  const features = [
    {
      id: 1,
      icon: <FaVideo className="w-8 h-8" />,
      title: "Video Interface",
      description: "Record and playback videos with advanced controls"
    },
    {
      id: 2,
      icon: <FaMicrophone className="w-8 h-8" />,
      title: "Speech Analysis",
      description: "AI-powered speech-to-text and pronunciation scoring"
    },
    {
      id: 3,
      icon: <FaChartBar className="w-8 h-8" />,
      title: "Assessment Reports",
      description: "Detailed performance analytics and downloadable reports"
    },
    {
      id: 4,
      icon: <FaGlobe className="w-8 h-8" />,
      title: "Multilingual Support",
      description: "Our reports are available in multiple languages for better accessibility and global reach."
    }
  ];

  return (
    
      <div className="max-w-7xl  h-[550px] mx-auto mt-10">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden ">
          <div className="flex flex-col md:flex-row">
            {/* Profile Section */}
          

            <div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-indigo-100 p-8 text-white h-[550px] overflow-hidden">
  <div className="flex flex-col items-center space-y-4">
    <div className="relative">
      <img
        src={user.photoURL || Home_main}
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-white shadow-lg transform transition-transform duration-300 hover:scale-105"
        onError={(e) => {
          e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
        }}
      />
    </div>
    <h2 className="text-3xl font-bold mt-4 text-blue-800">{user.displayName || "User"}</h2>
    <p className="text-blue-100 mb-2 text-blue-800">{user.email || "mail"}</p>
    <div className="mt-2 text-center">
      <p className="text-lg text-blue-100 leading-relaxed text-blue-800">I am a dedicated Computer Engineer with a passion for solving complex problems, designing scalable solutions, and contributing to innovative projects. I thrive on teamwork and continuous learning to achieve excellence.{/* Add custom bio note here */}</p>
      <p className="text-lg mt-2 text-blue-100 text-blue-800">Mobile No : {user.phoneNumber || "8956752579"}</p>
    </div>
  </div>
</div>


            {/* Features Section */}
             {/* <div className="md:w-2/3 p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">Features & Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 bg-blue-100 rounded-full text-blue-600 transition-colors duration-300 hover:bg-blue-200">
                        {feature.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
             </div> */}


<div className="w-full md:w-2/3 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Features</h2>
            <div className="grid gap-6 ">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-start p-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-md cursor-pointer"
                >
                  <div className="flex-shrink-0 p-3 bg-blue-500 text-white rounded-lg">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>








          </div>
        </div>
      </div>
    
  );
};

export default Dashboard;