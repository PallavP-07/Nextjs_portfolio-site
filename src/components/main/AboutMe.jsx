import React from "react";
import Image from 'next/image'
function AboutMe() {
  return (
    <>
      <div className="flex  justify-center items-center text-white   h-full drop-shadow-md  shadow-lg shadow-gray-500/60   backdrop-blur-md bg-white/20   p-20 m-40 mx-10 rounded-md">
        <div className="flex  justify-between items-center">
            <Image src='/Admin.svg' width={120} height={120} alt='admin'/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          aut autem, doloremque quo ducimus repellat non labore cum enim amet
          omnis ipsum hic veniam consequuntur repellendus nemo, aspernatur, ipsa
          natus!
        </p>

        </div>
      </div>
    </>
  );
}

export default AboutMe;
