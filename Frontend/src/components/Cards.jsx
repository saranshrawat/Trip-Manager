import React from 'react'

function Cards({key,counter ,image=null, title, description, varient,explore=null}) {
 const variants = {
    carousel: {
    container: "w-80 h-96 bg-gray-900 text-gray-100 rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-transform duration-300 hover:scale-105",
  imageStyle: "w-full h-full rounded-md object-cover shadow-md cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-xl",
    title_style: "text-2xl font-semibold text-white mb-3 truncate",
    description: "text-base text-gray-300 leading-snug line-clamp-4"


   
  },
  AboutUs_card: {
    container: "bg-white/20 p-8 sm:p-10 md:p-12 rounded-lg shadow-md border w-full sm:w-96 md:w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all duration-200 hover:scale-[1.02] transition-all duration-200",
  
  counter: "text-lg sm:text-xl md:text-2xl font-semibold mt-3 text-center",
  
  title_style: "text-gray-500 mb-4 text-sm sm:text-base md:text-lg text-center",
  
  description: "text-center text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed",

  },

  // AboutUs_imageCard: {
  //   container: "bg-white text-gray-900",
  //   imageStyle: "w-full h-40 object-cover rounded-md mb-3",
  // },

  task_card: {
    container: "bg-gray-800 text-white",
    imageStyle: "w-full h-40 object-cover rounded-md mb-3",
     title_style: "text-xl font-bold text-yellow-300",
    description: "text-sm text-gray-300",

  }
};
  
 const selectedVariant = variants[varient];

  return (
     
     
 <div className={selectedVariant.container} >
  <h1>
    {counter}
  </h1>

  <h3 className={selectedVariant.title_style}>
    {title}
  </h3>
  
 {image && ( <img
    src={image}
    alt="Place Image"
    className={selectedVariant.imageStyle}
  />
  )}
  <p className={selectedVariant.description}>
    {description}
  </p>


  {explore && ( <button>
    Explore More
  </button>
  )}
</div>
  )
}

export default Cards