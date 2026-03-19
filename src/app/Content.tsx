"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cards from "./Cards";
import { google_Sans,pacifico } from "./fonts";
import { Google_Sans } from "next/font/google";

const Content = () => {
  return (
    <>
      <div className="relative flex justify-center items-center w-full min-h-screen bg-[#fafafa] overflow-hidden">
        {/* Faded Background Pattern - Centered behind the content */}
        <div className="absolute flex items-center justify-center">
          <img
            src="/SVGS.png"
            className="w-[800px] h-[800px] object-cover opacity-[0.25]"
            style={{
              maskImage:
                "radial-gradient(circle at center, black 50%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 50%, transparent 80%)",
            }}
          />
        </div>

        <AnimatePresence>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            transition={{ duration: 1 }}
          >
            {/* Gradient background shadow */}
            <div className="absolute -inset-0.5 bg-linear-to-r from-purple-400 via-yellow-500 to-blue-400 rounded-[10px] blur-3xl opacity-30"></div>

            <div className="relative bg-white p-6 rounded-2xl shadow-[0_6px_30px_rgb(0,0,0,0.08)] border border-gray-100 w-[450px] min-h-[650px]">
              <div className="flex justify-center">
                <img
                  src="/logo-removebg-preview.png"
                  alt="logo"
                  className="w-60 h-27"
                />
              </div>
              <h1 className= {`${google_Sans.className} text-2xl flex justify-center mt-5`}>
                Create your account
              </h1>
              <p className={`${google_Sans.className} text-center mt-1 text-gray-500`}>
                Welcome! Please fill in the details to get started.
              </p>
              <Cards />
              <div className="flex items-center my-6">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="px-4 text-xs text-gray-400 uppercase">or</span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>
              <h1 className={`${google_Sans.className} flex justify-left ml-9 p-2`}>Email Address</h1>
              <div className="flex justify-center">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="border border-gray-400 rounded-xl w-80 h-12 pl-4 focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <h1 className={`${google_Sans.className} flex justify-left ml-9 p-2`}>Password</h1>
              <div className="flex justify-center">
                <input
                  type="text"
                  placeholder="Enter your password"
                  className={`${google_Sans.className} border border-gray-400 rounded-xl w-80 h-12 pl-4 focus:outline-none focus:border-black transition-colors`}
                />
              </div>
              <div className="flex justify-center mt-10">
                  <div className="bg-gradient-to-b from-[#3A3D44] to-[#2B2E34] 
                   text-white px-6 py-3 rounded-xl shadow-md cursor-pointer w-80 h-12 flex items-center justify-center">
                    <span className="flex justify-center items-center">
                      Continue
                    </span>
                  </div>
              </div>
              <span className={`${google_Sans.className} flex justify-center mt-5 text-gray-300`}>
                Powered by Sammy
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Content;
