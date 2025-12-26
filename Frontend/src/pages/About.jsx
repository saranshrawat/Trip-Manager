import React from 'react'
import Heading from '../components/Heading'
import AboutUs_View from '../components/AboutUs_View'
import Carousel from '../components/Carousel'
import Cards from '../components/Cards'
import { AboutpageData } from '../data/data'
import { AboutUsData } from '../data/data'
import { AboutPage_secondHeading } from '../data/data'
import Testimonials from '../components/Testimonials'
import { motion } from 'framer-motion'
import Accordian from '../components/Accordian'

function About() {
  const {subtitle,description,buttonText,buttonLink,varient}=AboutpageData;
  const {description:secondDescription,varient:secondVarient}=AboutPage_secondHeading;
  return (
    <div>

    {/*Our 1st section heading component  */}

  <div className="flex justify-start">
      <Heading subtitle={subtitle} description={description} buttonText={buttonText} buttonLink={buttonLink} varient={varient} />
   </div>

{/* About Us backgroung image section  */}
   <div>
     <AboutUs_View />
   </div>



{/* our second section heading and text  */}

   <div>
      <h1>Why Choose Us</h1>
      <Heading description={secondDescription} varient={secondVarient} />
   </div>


       <div>
    
          <Heading />
   
     </div>

   
   
   
   
     {/* our cards section data */}
     <motion.div
      initial={{opacity:.2, y:100}}
      transition={{duration:1}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      
      className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 md:px-8">

 
      
      {AboutUsData.map((item)=>(
        <Cards
          key={item.id}
          counter={item.counter}
          title={item.title}
          description={item.description}
          varient={item.varient}
        />
      ))}


     </motion.div>


        {/* our FAQ accordian component */}

    <motion.div 
    initial={{opacity:.2, y:100}}
      transition={{duration:1}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
     className="flex justify-self-start">
  <Accordian />
</motion.div>

        
        {/* Testimonials component  */}
        
         <Testimonials />

        

      
       
    </div>
       

    
  )
}

export default About