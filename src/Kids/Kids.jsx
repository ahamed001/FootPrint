import React from 'react'
import { Outlet } from 'react-router-dom'

const Kids = () => {

  const images = [
    {
      id: 1,
      image: require("../Kids/Images/Crocs.jpg"),
      name: "Crocs"
    },
    {
      id: 2,
      image: require("../Kids/Images/Leather.jpg"),
      name: "Leather"
    },
    {
      id: 3,
      image: require("../Kids/Images/Lights.jpg"),
      name: "Lights"
    },
    {
      id: 4,
      image: require("../Kids/Images/Party.jpg"),
      name: "Party"
    },
    {
      id: 5,
      image: require("../Kids/Images/Walkingsandal.jpg"),
      name: "Walkingsandal"
    },
    {
      id: 6,
      image: require("../Kids/Images/Shazz.jpg"),
      name: "Shazz"
    }
  ]

  return (

    <div>

      <img src={require('../Kids/Images/Kids.jpg')} alt="Kids" className=' w-full' />

      <h1 className='sm:text-5xl text-3xl font-extrabold my-5 pt-6'>Footwear for Little Ones</h1>

      <p className='font-normal pb-3 text-lg mb-4 px-2'>Contrast Pieces or Serve two-tone Fits. Whichever way you decide to go, you're sure to Ace the Look</p>
    
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


export default Kids