import React from "react";
import { BackendTech, FrontendTech, other } from "../../Contents/index";
import SkillData from "../subComponents/SkillData";
const Skills = () => {
  return (
    <>
       <section
      id="Skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-20 sm:pb-40 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl">My Skills</h2>
      <div className="flex flex-col sm:flex-row items-center justify-around flex-wrap mt-4 gap-5">
        {FrontendTech.map((icon, index) => (
          <SkillData
            src={icon.Image}
            index={index}
            key={index}
            width={icon.width}
            height={icon.height}
          />
        ))}
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-around flex-wrap mt-4 gap-5">
        {BackendTech.map((icon, index) => (
          <SkillData
            src={icon.Image}
            index={index}
            key={index}
            width={icon.width}
            height={icon.height}
          />
        ))}
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-around flex-wrap mt-4 gap-5">
        {other.map((icon, index) => (
          <SkillData
            src={icon.Image}
            index={index}
            key={index}
            width={icon.width}
            height={icon.height}
          />
        ))}
      </div>
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src='/cards-video.webm'
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default Skills;
