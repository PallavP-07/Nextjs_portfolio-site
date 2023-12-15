import React from 'react'
import Image from 'next/image'
import { Social } from '@/Contents';


const NavBar=()=> {
  
  return (
    <>
    <div className=" flex  justify-between items-center text-white  w-full h-[70px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-8">
        <div className='flex items-center'> 
       <img  src='/logo.png' alt='logo' className='w-[60px]'/>
       <span className="text-transparent text-[30px] bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Pallav</span>
        </div>
        <div className="flex items-center justify-between w-[600px] h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
           
                <a>About Me </a>
                <a>Skills</a>
                <a>Projects</a>
                <a>Achivements</a>
        

        </div>
        <div className="flex flex-row gap-5">
           {Social.map((icon)=>(
                <Image
                src={icon.src}
                alt={icon.name}
                key={icon.name}
                width={20}
                height={20}
              />
           ))}

        </div>
    </div>
    </>
  )
}

export default NavBar;