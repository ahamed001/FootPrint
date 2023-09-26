import React from 'react'
import { Outlet } from 'react-router-dom'

const Featured = () => {

  const images = [
    {
      id: 1,
      image: require("../Featured/Images/Dance.jpg"),
      name: "Dancing Shoes"
    },
    {
      id: 2,
      image: require("../Featured/Images/Hiking.jpg"),
      name: "Trekking Shoes"
    },
    {
      id: 3,
      image: require("../Featured/Images/Skate.jpg"),
      name: "Skating Shoes"
    },
    {
      id: 4,
      image: require("../Featured/Images/Bedroom.jpg"),
      name: "Bedroom Slippers"
    },
    {
      id: 5,
      image: require("../Featured/Images/Socks.jpg"),
      name: "Socks"
    },
    {
      id: 6,
      image: require("../Featured/Images/Soles.jpg"),
      name: "Soles"
    },
    {
      id: 7,
      image: require("../Featured/Images/Horn.jpg"),
      name: "Shoe Horn"
    },
    {
      id: 8,
      image: require("../Featured/Images/Polish.jpg"),
      name: "Shoe Polish"
    },
    {
      id: 9,
      image: require("../Featured/Images/Spray.jpeg"),
      name: "Sprain Spray"
    },
    {
      id: 10,
      image: require("../Featured/Images/Bags.png"),
      name: "Shoe Bag"
    },
  
  ]

  return (

    <div>
      <img src={require('../Featured/Images/Featured.jpg')} alt="Featured" className=' w-full' />

      <h1 className='sm:text-5xl text-3xl font-extrabold my-5 pt-6'>Seasonal Favorites</h1>
      <p className='font-normal pb-3 text-lg mb-4 px-2 sm:px-4'>The Season is here. Start yours Prepared with the Best in Touch, Agility, Precision and Speed.</p>
    
      <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-2 place-items-center'>

          {
            images.map((i, id) => (
              
              <div className='relative' key={i.id}>  
                <img src = {i.image} alt="Footwear" className='w-96 h-64 my-4 shadow-md' />
                <span className='absolute left-8 bottom-10 bg-slate-100 px-4 py-1 hover:bg-slate-200 cursor-pointer rounded-full text-gray-900 text-xl font-bold'>{i.name}</span>
              </div>

            ))
          }

        </div>
     
     <Outlet/> 
    </div>
  )
}


export default Featured