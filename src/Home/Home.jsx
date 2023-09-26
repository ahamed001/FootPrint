import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  
  const images = [
    {
      id: 1,
      image: require("../Home/Images/Men.jpg"),
      name: "Men's",
      path: `Men's`
    },
    {
      id: 2,
      image: require("../Home/Images/Women.jpg"),
      name: "Women's",
      path: `Women's`
    },
    {
      id: 3,
      image: require("../Home/Images/Kids.jpg"),
      name: "Kid's",
      path: `Kid's`
    }
  ]

  return (
    <div>
      <img src={require('../Home/Images/Home.jpg')} alt="Home" className='h-full' />

      <p className='sm:text-7xl text-5xl font-extrabold pt-6 pb-3'>FOOT PRINT</p>

      <p className='font-normal pt-3 pb-5 text-lg lg:px-96 md:px-28 sm:px-10 px-2'>
        Embrace the moment. Step into the season fully equipped with unmatched comfort, 
        flexibility, accuracy, and swiftness in every stride.
      </p>

      <Link to={'/Featured'}>
        <button className='rounded-full bg-slate-900 text-white px-5 pt-2 pb-2 mt-5 mb-10 md:mt-10 md:mb-16 hover:bg-slate-700'>
          Shop Now
        </button>
      </Link>
    
      <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-2 place-items-center '>

        {
          images.map((i, id) => (
            
            <div key={i.id} className='relative'>
              
              <img src = {i.image} alt="Footwear" className='w-96 h-64 object-cover my-4 shadow-md' />
              <Link to = {i.path}>
                <span className='absolute left-8 bottom-10 bg-slate-100 px-4 py-1 hover:bg-slate-200 cursor-pointer rounded-full text-gray-900 text-xl font-bold'>{i.name}</span>
              </Link>
            </div>

          ))
        }

      </div>
     
      <Outlet/>
    </div>
  )
}

export default Home