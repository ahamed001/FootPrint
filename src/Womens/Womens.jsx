import React from 'react'
import { Outlet } from 'react-router-dom'


const Womens = () => {
  
  const images = [
    {
      id: 1,
      image: require("../Womens/Images/Casuals.jpg"),
      name: "Casuals"
    },
    {
      id: 2,
      image: require("../Womens/Images/Heel.jpg"),
      name: "Heel"
    },
    {
      id: 3,
      image: require("../Womens/Images/Medieval.jpg"),
      name: "Medieval"
    },
    {
      id: 4,
      image: require("../Womens/Images/Professional.jpg"),
      name: "Professional"
    },
    {
      id: 5,
      image: require("../Womens/Images/Boots.jpg"),
      name: "Boots"
    }
    
  ]

  return (

    <div>
      <img src={require('../Womens/Images/Womens.jpg')} alt="Womens" className=' w-full' />

      <h1 className='sm:text-5xl text-3xl font-extrabold my-5 pt-6'>Elegant Footwear for Her</h1>

      <p className='font-normal pb-3 text-lg mb-4 px-2'>We wanted to make Foot Print even better, so we did. Warmer, softer, and always original.</p>
      
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

export default Womens