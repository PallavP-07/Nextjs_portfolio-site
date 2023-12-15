import React from 'react'

const Footer=() =>{
  return (
    <>
    
        <div className=' w-full h-1/2 bg-cover bg-center bg-no-repeat '>
    
        <img src='/footer.svg'  className=" bottom-[-400px] object-cover w-full h-full opacity-50" /> 
        </div>
        <footer className="bg-gray-800 text-white p-4 w-full transition-opacity duration-300">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0 sm:order-1">
          &copy; {new Date().getFullYear()} My Company
        </div>
        <div className="flex flex-col sm:flex-row sm:order-2">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400 sm:ml-4">Terms of Service</a>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <a href="#" className="mr-4 hover:text-gray-400">
          <i className="fa fa-facebook-f" aria-hidden="true"></i>
        </a>
        <a href="#" className="mr-4 hover:text-gray-400">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="#" className="mr-4 hover:text-gray-400">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="#" className="hover:text-gray-400">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </div>
      <div className="mt-4 text-center">
        <p>Designed and Developed by Pallav Panda</p>
      </div>
    </footer>
    </>
  )
}

export default Footer