import React from 'react'

const MenP = () => {
  return (
    <div>
      <div className='md:flex justify-evenly w-[95%] py-1 mx-auto shadow-xl rounded-xl'>
        <div className='text-black mx-5 my-auto'>
          <img src={require("../Home/Images/Men.jpg")} alt="Mens" className='w-96 h-72 rounded-lg my-5' />
        </div>
        <div className=' mx-5 md:w-[50%] my-10 text-start'>
          <div className='my-4'>
            <h1 className='text-3xl font-bold'>Formal Wear</h1>
            <p className='text-xl font-semibold'>Men's</p>
          </div>
            <p className='md:pr-20 pr-5 text-gray-600'>
              Elevate your style and step into sophistication with our Classic Leather Formal Wear. 
              Crafted with meticulous attention to detail, these shoes are the epitome of timeless elegance and modern comfort.
            </p>
          <div className='my-4 text-base font-meddium text-gray-600'>
            <p className='text-lg font-semibold text-black'>MRP : ₹7495.00</p>
            <p>incl. of taxes</p>
            <p>(Also includes all applicable duties)</p>
          </div>
          <button className='rounded-full bg-black font-semibold text-white px-5 py-2 my-3 hover:bg-white hover:text-black hover:font-bold hover:ring-1 hover:ring-black'>
            Add to Bag
          </button>
          <div className='my-2'>
            <p className=' font-semibold text-lg my-2'>Your Satisfaction Is Our Priority!</p>
            <p className='md:pr-20 pr-5 text-gray-600'>
              If, for any reason, you're not completely satisfied with your purchase, 
              rest assured that our easy return process is designed to ensure a truly stress-free 
              and convenient experience for you. Your happiness matters, and we're committed to making 
              your return or exchange as effortless as possible. Your confidence in shopping with us is our utmost priority.
            </p>
          </div>
        
        </div>      
      </div>
    </div>
  )
}

export default MenP