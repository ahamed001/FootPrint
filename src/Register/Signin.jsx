import React from 'react'
import { Outlet } from 'react-router-dom'

const Signin = () => {
  return (
    <div className='lg:w-[30%] md:w-[50%] sm:w-[70%] w-[90%] pb-10 mt-12 m-auto shadow-xl rounded-md'>
        <form>

          <p className='py-5 my-4 text-2xl font-bold'>YOUR ACCOUNT FOR <br/> EVERYTHING</p>

          <input type="email" placeholder='Email Address' className='my-2 px-3 py-2 w-8/12 rounded-md border-slate-300 border-[1px]'/>
          <input type="password" placeholder='Password' className=' my-2 px-3 py-2 w-8/12 rounded-md border-slate-300 border-[1px]'/>

          <p className='font-normal text-sm text-gray-400 py-2'>By logging in, you agree to Foot Print's <br/><span className=' underline decoration-1 cursor-pointer'>Privacy Policy</span> and <span className=' underline decoration-1 cursor-pointer'>Terms of Use</span>.</p>
          
          <button className='mb-5 mt-2 px-3 py-2 w-8/12 font-semibold bg-black text-white rounded-md border-[2px] border-black'>SIGN IN</button>

          <p className=' font-normal text-sm text-gray-400 py-2'>Not a Member? <span className=' underline decoration-1 text-black cursor-pointer'>Join Us</span>.</p>
            
        </form>
      <Outlet/>
    </div>
  )
}

export default Signin