'use client'
import React, { useEffect, useState } from "react";
import TypingEffect from "./TypeWriter";
import Image from 'next/image'
import ScrollButton from "./scrollButton";

const MainContent = () => {
  
  return (
    <>
    <div className=" flex h-full  w-full z-[20]">
      <div className="flex  w-full h-full justify-between mx-20 py-20 mt-40 items-center ">
      <div className="flex flex-col  ">
        <h3 className="text-slate-100 text-lg mb-2">Hii There,</h3>
        <h2 className="text-slate-100 text-4xl mb-2">I'm <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Pallav Panda</span></h2>
        <TypingEffect />
        <div className="flex gap-5 m-4">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Hire Me</button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">About Me</button>
        <ScrollButton/>
       
        </div>
       </div>
        <div>
      <img src='/space.svg' id='glitchImage' className="w-80" />
        </div>
      </div>
    </div>
       
      
    </>
  );
};

export default MainContent;


 // Replace with the path to your local SVG file




