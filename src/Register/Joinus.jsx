import React, {useState} from 'react'
import axios from 'axios'
import { Link, Outlet } from 'react-router-dom'

const Joinus = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [fname, setFname] = useState()
  const [lname, setLname] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/joinus',{
      email:email,
      password:password,
      firstname:fname,
      lastname:lname,
    })
    .then (result => console.log(result))
    .catch (err => console.log(err))
  }

  return (

    <div className='lg:w-[30%] md:w-[50%] sm:w-[70%] w-[90%] pb-10 mt-12 m-auto shadow-xl rounded-md'>
      <form onSubmit={handleSubmit}>

        <p className='py-5 mt-4 text-2xl font-bold'>BECOME A MEMBER</p>

        <p className=' text-gray-400 text-sm pb-4'>Create your Foot Print Member profile and get<br/> first access to the very best of Foot Print products,<br/> inspiration and community.</p>

        <input type='email' placeholder='Email Address' className='my-2 px-3 py-2 w-8/12 rounded-md border-slate-300 border-[1px]' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Password' className=' my-2 px-3 py-2 w-8/12 rounded-md border-slate-300 border-[1px]' onChange={(e)=>setPassword(e.target.value)}/>
        <input type="text" placeholder='First Name' className='my-2 px-3 py-2 w-8/12 rounded-md border-slate-300 border-[1px]' onChange={(e)=>setFname(e.target.value)}/>
        <input type="text" placeholder='Last Name' className='my-2 px-3 py-2 w-8/12 rounded-md border-slate-300 border-[1px]' onChange={(e)=>setLname(e.target.value)}/>

        <p className='font-normal text-sm text-gray-400 py-2'>By logging in, you agree to Foot Print's <br/><span className=' underline decoration-1 cursor-pointer'>Privacy Policy</span> and <span className=' underline decoration-1 cursor-pointer'>Terms of Use</span>.</p>
        
        <button type='submit' className='mb-5 mt-2 px-3 py-2 w-8/12 font-semibold bg-black text-white rounded-md border-[2px] border-black'>JOIN US</button>

        <p className=' font-normal text-sm text-gray-400 py-2'>Already a Member? <Link to={'/signin'}> <span className=' underline decoration-1 text-black cursor-pointer'>Sign In</span></Link>.</p>
    
      </form>
      <Outlet/>
   </div>
  )
}

export default Joinus