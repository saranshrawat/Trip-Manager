import React from 'react'
import home_image from '../assets/home_image.png';

function Description() {
  return (
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 p-8 bg-gray-900 rounded-xl shadow-lg">
  {/* Text Section */}
  <div className="flex-1 max-w-md bg-gray-200 rounded-lg shadow-md p-6 transform transition duration-300 hover:animate-wiggle">
    <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
      Travel Manager
    </h2>
    <p className="text-gray-700 text-base leading-relaxed mb-6">
      Plan smarter. Travel better. Organize itineraries, save favorite places,
      and stay on track with ease. Check out more about us.
    </p>

    {/* Buttons */}
    <div className="flex gap-4">
      <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 hover:scale-105 transition duration-300">
        Learn More
      </button>
      <button className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow hover:bg-gray-900 hover:scale-105 transition duration-300">
        Contact Us
      </button>
    </div>
  </div>

  {/* Image Section */}
 <div className="flex-1 max-w-sm">
  <img
    src={home_image}
    alt="Travel Image"
    className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition duration-300"
  />
</div>
</div>
  )
}

export default Description