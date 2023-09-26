import React from 'react'
import { Outlet } from 'react-router-dom'

const Mens = () => {

  const images = [
    {
      id: 1,
      image: require("../Mens/Images/Boots.jpg"),
      name: "Boots"
    },
    {
      id: 2,
      image: require("../Mens/Images/Canvas.jpg"),
      name: "Canvas"
    },
    {
      id: 3,
      image: require("../Mens/Images/Sports.jpg"),
      name: "Sports"
    },
    {
      id: 4,
      image: require("../Mens/Images/Formals.jpg"),
      name: "Formals"
    },
    {
      id: 5,
      image: require("../Mens/Images/Summer.jpeg"),
      name: "Summer"
    },
    {
      id: 6,
      image: require("../Mens/Images/Sneakers.jpg"),
      name: "Sneakers"
    }
  ]

  return (

    <div>
      <img src={require('../Mens/Images/Mens.jpg')} alt="Mens" className=' w-full' />

      <h1 className='sm:text-5xl text-3xl font-extrabold my-5 pt-6'>Shoes for Him</h1>
      <p className='font-normal pb-3 text-lg mb-4 px-2'>Engineered to the Exact Specifications of Athletes and Regular Folks.</p>
    
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

export default Mens