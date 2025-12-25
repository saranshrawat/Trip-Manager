import React from 'react'
import { Link } from 'react-router-dom';

function Heading() {
  return (
   <div className="bg-white py-20 px-6 sm:px-12 lg:px-24">
  <div className="max-w-4xl mx-auto text-center space-y-6">
    
    <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
      Welcome to <span className="text-blue-600">My Trip Manager</span>
    </h1>

    <h2 className="text-2xl sm:text-3xl text-gray-700 font-medium">
      Explore the world better by managing your trips
    </h2>

    <h3 className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
      Plan smarter. Travel better. Your personal trip manager for organizing itineraries, saving favorite places, and staying on track.
    </h3>

    <div className="pt-6">
    
    
    {/* based on this, if user is not loged in it will show login page/signup page, else it will move us to Myplaces */}
      <Link
        to="/get-started"
        className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
      >
        Get Started
      </Link>
    </div>

  </div>
</div>
  )
}

export default Heading;