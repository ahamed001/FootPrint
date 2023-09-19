import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
const currentDate = new Date();
const currentYear = currentDate.getFullYear();


  return (
    <div className='bg-black h-[370px] pt-10 pb-56 mt-20'>
        <div className='flex justify-evenly'>
            <div className='flex flex-col text-start'>

                <h2 className='px-10 pb-4 text-xl font-semibold text-white cursor-pointer'> Get Help </h2>
                <p className='px-11 pb-2 text-sm text-gray-400 hover:text-white cursor-pointer'> Order Status </p>
                <p className='px-11 pb-2 text-gray-400 hover:text-white cursor-pointer'> Delivery </p>
                <p className='px-11 pb-2 text-gray-400 hover:text-white cursor-pointer'> Returns </p>
                <p className='px-11 pb-2 text-gray-400 hover:text-white cursor-pointer'> Payment Options </p>
                <p className='px-11 pb-2 text-gray-400 hover:text-white cursor-pointer'> Contact Us On All Other Inquiries </p>

            </div>

            <div className='flex flex-col text-start'>

                <h2 className='px-10 pb-4 text-xl font-semibold text-white cursor-pointer'> About Us </h2>
                <p className='px-11 pb-2 text-sm text-gray-400 hover:text-white cursor-pointer'> News </p>
                <p className='px-11 pb-2 text-gray-400 hover:text-white cursor-pointer'> Careers </p>
                <p className='px-11 pb-2 text-gray-400 hover:text-white cursor-pointer'> Investors </p>
                <p className='px-11 pb-2 text-gray-400 hover:text-white cursor-pointer'> Sustainability </p>

            </div>

            <div className='flex text-start'>
                
                <FaFacebook className='text-gray-400 text-3xl mx-3 hover:text-[#1877F2] cursor-pointer'/>
                <FaTwitter className='text-gray-400 text-3xl mx-3 hover:text-[#00acee] cursor-pointer'/>
                <FaInstagram className='text-gray-400 text-3xl mx-3 hover:text-[#c13584] cursor-pointer'/>
                <FaYoutube className='text-gray-400 text-3xl mx-3 hover:text-[#CD201F] cursor-pointer'/>

            </div>

        </div>

        <p className='text-gray-100 text-2xl pt-12 hover:text-[#1877F2] cursor-pointer'> &copy; {currentYear} Foot Print, Inc. All Rights Reserved</p>

    </div>

  )
}

export default Footer