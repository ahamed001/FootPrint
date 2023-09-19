import React from 'react'
import { Outlet } from 'react-router-dom'

const Joinus = () => {
  return (
    <div className='w-[30%] pb-10 mt-12 m-auto shadow-xl rounded-md'>
        <form>

                <p className='py-5 mt-4 text-2xl font-bold'>BECOME A MEMBER</p>

                <p className=' text-gray-400 text-sm pb-4'>Create your Foot Print Member profile and get<br/> first access to the very best of Foot Print products,<br/> inspiration and community.</p>

                <input type='email' placeholder='Email Address' className='my-2 px-3 py-2 w-8/12 rounded-md border-slate-300 border-[1px]'/>
                <input type="password" placeholder='Password' className=' my-2 px-3 py-2 w-8/12 rounded-md border-slate-300 border-[1px]'/>
                <input type="text" placeholder='First Name' className='my-2 px-3 py-2 w-8/12 rounded-md border-slate-300 border-[1px]'/>
                <input type="text" placeholder='Last Name' className='my-2 px-3 py-2 w-8/12 rounded-md border-slate-300 border-[1px]'/>

                <p className='font-normal text-sm text-gray-400 py-2'>By logging in, you agree to Foot Print's <br/><span className=' underline decoration-1 cursor-pointer'>Privacy Policy</span> and <span className=' underline decoration-1 cursor-pointer'>Terms of Use</span>.</p>
                
                <button className='mb-5 mt-2 px-3 py-2 w-8/12 font-semibold bg-black text-white rounded-md border-[2px] border-black'>JOIN US</button>

                <p className=' font-normal text-sm text-gray-400 py-2'>Already a Member? <span className=' underline decoration-1 text-black cursor-pointer'>Sign In</span>.</p>
            
        </form>
        <Outlet/>
    </div>
  )
}

export default Joinus