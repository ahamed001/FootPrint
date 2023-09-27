import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import axios from 'axios'

const Signin = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/signin', {
        Email: email,
        Password: password,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
};
  return (
    <div className='lg:w-[30%] md:w-[50%] sm:w-[70%] w-[90%] pb-10 mt-12 m-auto shadow-xl rounded-md'>
        <form onSubmit={handleSubmit}>

          <p className='py-5 my-4 text-2xl font-bold'>YOUR ACCOUNT FOR <br/> EVERYTHING</p>

          <input type="email" placeholder='Email Address' className='my-2 px-3 py-2 w-8/12 rounded-md border-slate-300 border-[1px]' onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" placeholder='Password' className=' my-2 px-3 py-2 w-8/12 rounded-md border-slate-300 border-[1px]' onChange={(e)=>setPassword(e.target.value)}/>

          <p className='font-normal text-sm text-gray-400 py-2'>By logging in, you agree to Foot Print's <br/><span className=' underline decoration-1 cursor-pointer'>Privacy Policy</span> and <span className=' underline decoration-1 cursor-pointer'>Terms of Use</span>.</p>
          
          <button type='submit' className='mb-5 mt-2 px-3 py-2 w-8/12 font-semibold bg-black text-white rounded-md border-[2px] border-black'>SIGN IN</button>

          <p className=' font-normal text-sm text-gray-400 py-2'>Not a Member? <Link to={'/joinus'}> <span className=' underline decoration-1 text-black cursor-pointer'>Join Us</span></Link>.</p>
            
        </form>
      <Outlet/>
    </div>
  )
}

export default Signin