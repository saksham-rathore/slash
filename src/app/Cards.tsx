"use client";
import React, {useState} from "react";
import { google_Sans, pacifico } from "./fonts";

const Cards = () => {

  const [showform, setshowform] = useState(false);

  return (
    <>
      {showform ? (
        <div className={`${google_Sans.className} mx-10 my-4 flex flex-col items-center text-gray-600 text-sm`}>
          <form className="w-80 p-6 shadow-md hover:shadow-2xl rounded-xl flex flex-col gap-4 border border-gray-100 bg-white">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Register With google</h2>
            
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-medium">Email</label>
              <input type="email" id="email" placeholder="john@example.com" className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="username" className="mb-1 font-medium">Username</label>
              <input type="text" id="username" placeholder="johndoe" className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-1 font-medium">Password</label>
              <input type="password" id="password" placeholder="••••••••" className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
            </div>
            
            <button id="register" onClick={(submit) => submit.preventDefault()} type="submit" className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition duration-300 mt-2">
              Register
            </button>
            <button onClick={() => setshowform(false)} className="w-full text-gray-500 font-medium py-2 rounded-lg hover:bg-gray-100 transition duration-300 border border-gray-200">
              Back
            </button>
          </form>
        </div>
      ) : (
        <>
          <div
            className={`${google_Sans.className} mx-10 my-4 text-gray-600 text-sm`}
          >
            <button onClick={() => setshowform(true)}>
            <div className="w-80 h-12 shadow-md hover:shadow-2xl rounded-xl flex items-center justify-center p-2 my-2 bg-white">
              <img src="/google-color.svg" className="h-full px-2" />
              <h1>Continue with Google</h1>
            </div>
            </button>
          </div>
          <div
            className={`${google_Sans.className} mx-10 my-4 text-gray-600 text-sm`}
          >
            <button onClick={() => setshowform(true)}>
            <div className="w-80 h-12 shadow-md hover:shadow-2xl rounded-xl flex items-center justify-center p-2 bg-white">
              <img src="/github.png" className="h-full px-2" />
              <h1>Continue with Github</h1>
            </div>
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Cards;
