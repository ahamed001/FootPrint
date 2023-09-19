import React from 'react'
import { Outlet } from 'react-router-dom'


const Womens = () => {
  
  const images = [
    {
      image: require("../Womens/Images/Casuals.jpg"),
      name: "Casuals"
    },
    {
      image: require("../Womens/Images/Heel.jpg"),
      name: "Heel"
    },
    {
      image: require("../Womens/Images/Medieval.jpg"),
      name: "Medieval"
    },
    {
      image: require("../Womens/Images/Professional.jpg"),
      name: "Professional"
    },
    {
      image: require("../Womens/Images/Boots.jpg"),
      name: "Boots"
    }
    
  ]

  return (

   <div>
    <img src={require('../Womens/Images/Womens.jpg')} alt="Womens" className=' w-full' />

    <h1 className='text-5xl font-extrabold my-5 pt-6'>Elegant Footwear for Her</h1>

    <p className='font-normal pb-3 text-lg mb-4'>We wanted to make Foot Print even better, so we did. Warmer, softer, and always original.</p>
    
  <div className=' flex justify-around'>
    
    <div className='grid gap-16 grid-cols-3 grid-rows-2'>

      {
        images.map((i, id) => (
          
          <div className='relative'>
            
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

export default Womens