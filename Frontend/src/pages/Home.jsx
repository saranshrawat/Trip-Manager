import React from 'react'
import Heading from '../components/Heading'
import Description from '../components/Description'
import Carousel from '../components/Carousel'
import { HomepageData } from '../data/data'
function Home() {
   const {title,title_span,subtitle,description,buttonText,buttonLink,varient}=HomepageData;
  return (
    <div>
                    
              <div>
                 <Heading title={title} title_span={title_span} subtitle={subtitle} description={description} buttonText={buttonText} buttonLink={buttonLink} varient={varient} />
              </div>
              
          <Description /> 
           <div className="m-6 p-6 bg-white rounded-xl shadow-xl border border-gray-300">
  <Carousel />
</div>


        
    </div>
  )
}

export default Home