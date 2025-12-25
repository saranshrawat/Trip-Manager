import React from 'react'
import Cards from './Cards'
import chopta from '../assets/chopta.jpg'
import kedarnath from '../assets/kedarnath.jpg'
import norway from '../assets/norway.jpg'
import switzerland from '../assets/switzerland.jpg'
import madmaheshwar from '../assets/madmaheshwar.jpg'
import ladakh from '../assets/ladakh.jpg'
import Slider from "react-slick";



function Carousel() {
  

 const settings = {
  centerMode: true,
  infinite: true,
  centerPadding: "0px", // remove extra padding
  slidesToShow: 3,
  speed: 500,
  fade: true,
  arrows: true, 
  responsive: [
    {
      breakpoint: 1024,
         settings: {
        slidesToShow: 2,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        centerPadding: "0px",
      },
    },
  ],
};


  return (
    
    <div className="slider-container">
         <Slider {...settings}>
            <Cards image={chopta} name="Chopta" description="Beautiful mountain views" load="false" />
            <Cards image={kedarnath} name="Kedarnath" description="Sacred temple in the Himalayas" load="false" />
            <Cards image={norway} name="Norway" description="Scenic fjords and Northern Lights" load="false" />
            <Cards image={switzerland} name="Switzerland" description="Alpine landscapes and charming villages" load="false"/>
            <Cards image={madmaheshwar} name="Madmaheshwar" description="Historic pilgrimage site in Madhya Pradesh"  load="false"/>
            <Cards image={ladakh} name="Ladakh" description="Stunning mountain landscapes and monasteries" load="false"/>

         </Slider>

    </div>
  )
}

export default Carousel