import React from 'react'
import backgroundImage from '../assets/background.jpg';

function AboutUs_View() 
 {
  return (
 <div className="relative bg-gray-900 h-[60vh] sm:h-[70vh] md:h-screen flex rounded-lg">
  {/* Background image with reduced width */}
  <img
    src={backgroundImage}
    alt="About Us Image"
    className="w-8/9  sd:w-8/9  md:w-8/9 h-full object-cover rounded-lg shadow-lg"
  />

  {/* Overlay card positioned between image and blue background */}


<div className="absolute bottom-8 right-8
                w-48 h-64 sm:w-56 sm:h-70 md:w-64 md:h-90 
                backdrop-blur-sm shadow-lg rounded-xl p-4 
                border border-white/60 text-center 
                flex flex-col justify-center">
  <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
    My Journey
  </h1>
  <p className="mt-2 text-xs sm:text-sm md:text-base text-white">
  lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
    ut liqua. lorem ipsum dolor sit amet, consectetur adipiscing elit.
    smod tempor incididunt
    ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
</div>
</div>
  )
}

export default AboutUs_View



