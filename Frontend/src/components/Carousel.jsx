import React from 'react'
import Cards from './Cards'
import { carouselData } from '../data/data'

function Carousel() {
  return (
   <div className="carousel-container">
  {/* Beautiful central heading */}
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center 
                 text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-pink-500 to-purple-600 
                 drop-shadow-lg tracking-wide mb-8">
    Explore and Discover Unlike Before
  </h1>

  <div className="slider overflow-hidden mask-[linear-gradient(90deg,transparent,rgba(255,255,255,1)_20%,rgba(255,255,255,1)_80%,transparent)]">
    <ul className="slide-track flex animate-scroll pause-on-hover">
      {carouselData.map((item) => (
        <li
          key={item.id}
          className="slide shrink-0 w-[30%] h-[80%] flex items-center p-4"
        >
          <Cards
            title={item.title}
            description={item.description}
            image={item.image}
            varient={item.varient}
          />
        </li>
      ))}
    </ul>
  </div>
</div>
  )
}

export default Carousel