import React from 'react'
import Heading from '../components/Heading'
import AboutUs_View from '../components/AboutUs_View'
import Carousel from '../components/Carousel'
import Cards from '../components/Cards'
import { AboutpageData } from '../data/data'

function About() {
  const {subtitle,description,buttonText,buttonLink,varient}=AboutpageData;
  return (
    <div>

  <div className="flex justify-start">
      <Heading subtitle={subtitle} description={description} buttonText={buttonText} buttonLink={buttonLink} varient={varient} />
   </div>

{/* About Us backgroung image section  */}
    <AboutUs_View />


<Carousel/>

    <div>

       <div>
    
     <Heading />
   
     </div>


     <div>
 
             <div>
                     <Cards/>
                     <Cards/>
                     <Cards/>

             </div>

              <div>
                     <Cards/>
                     <Cards/>
                     <Cards/>

              </div>       


     </div>


      
       
    </div>
       

    </div>
  )
}

export default About