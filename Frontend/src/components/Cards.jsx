import React from 'react'

function Cards({image, name, description, load}) {
  return (
      <div className="w-72 h-80 bg-white rounded-lg shadow-md flex flex-col items-center p-4">
  <h3 className="text-lg font-bold text-gray-800 mb-2">{name}</h3>
  
  <img
    src={image}
    alt="Place Image"
    className="w-full h-40 object-cover rounded-md mb-3"
  />
  
  <p className="text-gray-600 text-sm text-center grow">
    {description}
  </p>
</div>
  )
}

export default Cards