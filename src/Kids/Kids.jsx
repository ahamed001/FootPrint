import React from 'react'
import { Outlet } from 'react-router-dom'

const Kids = () => {

  const images = [
    {
      image: require("../Kids/Images/Crocs.jpg"),
      name: "Crocs"
    },
    {
      image: require("../Kids/Images/Leather.jpg"),
      name: "Leather"
    },
    {
      image: require("../Kids/Images/Lights.jpg"),
      name: "Lights"
    },
    {
      image: require("../Kids/Images/Party.jpg"),
      name: "Party"
    },
    {
      image: require("../Kids/Images/Walkingsandal.jpg"),
      name: "Walkingsandal"
    },
    {
      image: require("../Kids/Images/Shazz.jpg"),
      name: "Shazz"
    }
  ]

  return (

    <div>

      <img src={require('../Kids/Images/Kids.jpg')} alt="Kids" className=' w-full' />

      <h1 className='text-5xl font-extrabold my-5 pt-6'>Footwear for Little Ones</h1>

      <p className='font-normal pb-3 text-lg mb-4'>Contrast Pieces or Serve two-tone Fits. Whichever way you decide to go, you're sure to Ace the Look</p>
  
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


export default Kids