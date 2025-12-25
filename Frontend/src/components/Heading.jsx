import React from 'react'
import { Link } from 'react-router-dom';

function Heading({ title, title_span, subtitle, description, buttonText, buttonLink, varient }) {
  const variants ={
      homepage:{
          container:"bg-white py-20 px-6 sm:px-12 lg:px-24",
          containerInner:"max-w-4xl mx-auto text-center space-y-6",
          title:"text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight",
          title_span:"text-blue-600",
          subtitle:"text-2xl sm:text-3xl text-gray-700 font-medium",
          description:"text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto",
          button:"inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"

               },
  
       Aboutpage: {
  container: "bg-white py-10 px-6 sm:px-12 lg:px-24",
  containerInner: "max-w-6xl mx-auto text-left space-y-4",
  subtitle: "text-4xl sm:text-5xl font-bold text-gray-600 leading-tight",
  description: "text-l sm:text-xl text-gray-600 max-w-7xl",
   button:"inline-block px-8 py-1 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
       },
    
       AboutPage_secondHeading:{
         container: "bg-white py-10 px-6 sm:px-12 lg:px-24",
         containerInner: "max-w-6xl mx-auto text-left space-y-4",
         title:"text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight",
       }

  }



  return (
   <div className={variants[varient]?.container}>
  <div className={variants[varient]?.containerInner}>
    
    {title && (<h1 className={variants[varient]?.title}>
      {title} <span className={variants[varient]?.title_span}>{title_span}</span>
    </h1>)}

    {subtitle && (<h2 className={variants[varient]?.subtitle}>
      {subtitle}
    </h2>)}

    {description && (<h3 className={variants[varient]?.description}>
      {description}
    </h3>)}




    {/* based on this, if user is not loged in it will show login page/signup page, else it will move us to Myplaces */}

   { buttonText && buttonLink && (
     <div className={variants[varient]?.button}>
  
      <Link
        to={buttonLink}
        className={variants[varient]?.button}
      >
       {buttonText}
      </Link>
    </div>
   )}

  </div>
</div>
  )
}

export default Heading;