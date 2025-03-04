"use client";

import { motion } from "framer-motion";
import { slideInFromTop, slideInFromLeft, slideInFromRight } from "@/lib/motion";
import { useState } from "react";

export const Encryption = () => {
  const experiences = [
    {
      title: "Web Development Intern",
      company: "Agevole Innovations",
      period: "January 2024 - July 2024",
      points: [
        "Designed and developed user interfaces for 5 major projects and 3 minor projects",
        "Presented key website features in 4 client meetings",
        "Collaborated with designers and backend teams to refine layouts and components",
        "Enhanced frontend performance through lazy loading and code splitting"
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Sapphire Solutions",
      period: "August 2022 - December 2022",
      points: [
        "Led a group of 5 interns in designing and developing the full company website",
        "Built and optimized responsive components using React, TypeScript, and Bootstrap",
        "Mentored team members by reviewing code and offering feedback",
        "Integrated frontend with backend services using RESTful APIs"
      ],
    }
  ];

  return (
    <div id="experience" className="flex flex-col relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-10 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Professional{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Experience
          </span>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center z-[20] w-full h-auto mt-28 gap-10">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            variants={index % 2 === 0 ? slideInFromLeft(index * 0.2) : slideInFromRight(index * 0.2)}
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: 5,
              boxShadow: "0px 0px 20px rgba(114, 255, 247, 0.6)",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full max-w-4xl border border-[#7042F88B] bg-[#0300145e] backdrop-blur-sm p-6 rounded-lg transform-gpu"
          >
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-200">{exp.title}</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm mb-3">
                <span className="text-purple-400">{exp.company}</span>
                <span className="hidden md:block text-gray-400">•</span>
                <span className="text-gray-400">{exp.period}</span>
              </div>
              
              <ul className="space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-gray-300 flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};
