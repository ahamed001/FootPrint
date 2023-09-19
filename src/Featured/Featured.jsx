import React from 'react'
import { Outlet } from 'react-router-dom'

const Featured = () => {

  const images = [
    {
      image: require("../Featured/Images/Dance.jpg"),
      name: "Dancing Shoes"
    },
    {
      image: require("../Featured/Images/Hiking.jpg"),
      name: "Trekking Shoes"
    },
    {
      image: require("../Featured/Images/Skate.jpg"),
      name: "Skating Shoes"
    },
    {
      image: require("../Featured/Images/Bedroom.jpg"),
      name: "Bedroom Slippers"
    },
    {
      image: require("../Featured/Images/Socks.jpg"),
      name: "Socks"
    },
    {
      image: require("../Featured/Images/Soles.jpg"),
      name: "Soles"
    },
    {
      image: require("../Featured/Images/Horn.jpg"),
      name: "Shoe Horn"
    },
    {
      image: require("../Featured/Images/Polish.jpg"),
      name: "Shoe Polish"
    },
    {
      image: require("../Featured/Images/Spray.jpeg"),
      name: "Sprain Spray"
    },
    {
      image: require("../Featured/Images/Bags.png"),
      name: "Shoe Bag"
    },
  
  ]

  return (

    <div>
      <img src={require('../Featured/Images/Featured.jpg')} alt="Featured" className=' w-full' />

      <h1 className='text-5xl font-extrabold my-5 pt-6'>Seasonal Favorites</h1>

      <p className='font-normal pb-3 text-lg mb-4'>The Season is here. Start yours Prepared with the Best in Touch, Agility, Precision and Speed.</p>
    
    <div className='flex justify-around'>
    
    <div className='grid gap-16 grid-cols-3 grid-rows-2'>

      {
        images.map((i, id) => (
          
          <div className = 'relative'>
            
            <img src = {i.image} alt="Footwear" className='w-96 h-64 my-4 shadow-md' />
            <span className='absolute left-8 bottom-10 bg-slate-100 px-4 py-1 hover:bg-slate-200 cursor-pointer rounded-full text-gray-900 text-xl font-bold'>{i.name}</span>
           
          </div>

        ))
      }

    </div>

    </div>
     
     <Outlet/>
     
    </div>
  )
}


export default Featured