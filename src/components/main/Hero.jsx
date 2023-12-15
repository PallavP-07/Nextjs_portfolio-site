'use client'
import React from 'react'

import MainContent from '../subComponents/MainContent'

const Hero=()=> {
  return (
    <>
   <div className='relative flex flex-col h-full w-full'>
      <video
        loop
        autoPlay
        muted
        className="rotate-180 absolute top-0 left-0 z-[-10] w-full h-full object-cover lg:top-[-210px]">
        <source src='/blackhole.webm' type='video/webm' />
      </video>
      <MainContent />
    </div>
    </>
  )
}

export default Hero