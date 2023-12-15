import React from 'react'

const cards=()=> {
  return (
    <>
<div class="max-w-sm rounded overflow-hidden drop-shadow-md  shadow-lg shadow-gray-500/60   backdrop-blur-md bg-white/20 m-4">
  <img class="w-full" src='/shoemap.png'  alt='card'/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Your Project Name</div>
    <p class="text-gray-100 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
  <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  DEMO
</button>
  </div>
</div>


    
    </>
  )
}

export default cards