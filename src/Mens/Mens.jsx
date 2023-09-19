import React from 'react'
import { Outlet } from 'react-router-dom'

const Mens = () => {

  const images = [
    {
      image: require("../Mens/Images/Boots.jpg"),
      name: "Boots"
    },
    {
      image: require("../Mens/Images/Canvas.jpg"),
      name: "Canvas"
    },
    {
      image: require("../Mens/Images/Sports.jpg"),
      name: "Sports"
    },
    {
      image: require("../Mens/Images/Formals.jpg"),
      name: "Formals"
    },
    {
      image: require("../Mens/Images/Summer.jpeg"),
      name: "Summer"
    },
    {
      image: require("../Mens/Images/Sneakers.jpg"),
      name: "Sneakers"
    }
  ]

  return (

    <div>
      <img src={require('../Mens/Images/Mens.jpg')} alt="Mens" className=' w-full' />

      <h1 className='text-5xl font-extrabold my-5 pt-6'>Shoes for Him</h1>

      <p className='font-normal pb-3 text-lg mb-4'>Engineered to the Exact Specifications of Athletes and Regular Folks.</p>
          
    <div className='flex justify-around'>
    
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

export default Mens