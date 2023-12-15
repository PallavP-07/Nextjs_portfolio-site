import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import '../../app/globals.css'
function TypeWriter() {
  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }
  return (
    <div className='text-white typeing text-3xl'>
      <h2 >i am a <span>   <Typewriter
            words={['Frontend Developer','Web Designer','Full Stack Developer']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1500}
            onLoopDone={handleDone}
          /></span></h2>
    </div>
  )
}

export default TypeWriter