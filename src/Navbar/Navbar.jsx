import React, {useState} from "react";
import { Link } from "react-router-dom";

let Navbar=()=>{

  const [isFeaturedOpen, setIsFeaturedOpen] = useState(false);
  const [isMensOpen, setIsMensOpen] = useState(false);
  const [isWomensOpen, setIsWomensOpen] = useState(false);
  const [isKidsOpen, setIsKidsOpen] = useState(false);

  const toggleFeatured = () => {
    setIsFeaturedOpen(!isFeaturedOpen);
  };

  const toggleMens = () => {
    setIsMensOpen(!isMensOpen);
  };

  const toggleWomens = () => {
    setIsWomensOpen(!isWomensOpen);
  };

  const toggleKids = () => {
    setIsKidsOpen(!isKidsOpen);
  };

  return(

      <div className="flex justify-evenly text-lg pt-4 pb-4">
        
          <div
            className={`Featured ${isFeaturedOpen ? "open" : ""}`} 
            onMouseEnter={toggleFeatured}
            onMouseLeave={toggleFeatured}
          >
            <Link to={`Featured`} className=" hover:border-b-2 pb-2 border-black px-2">Featured</Link>

            {isFeaturedOpen && (
              <div className=" absolute bg-white flex text-left justify-evenly w-full mt-2 py-8 left-0 transition-transform">
                  <div className="p-3">
                     <h1 className=" my-2 font-semibold text-base cursor-pointer">New & Featured</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">New Arrivals</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Latest Shoes</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Best Sellers</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Customize with Foot Print by you</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Member Exclusive</p>
                  </div>

                  <div className="p-3">

                     <h1 className="my-2 font-semibold text-base cursor-pointer">New for Men</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Shoes</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Accessories</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Shop All New</p>

                  </div>
                  
                  <div className="p-3">

                     <h1 className="my-2 font-semibold text-base cursor-pointer">New for Women</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Shoes</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Accessories</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Shop All New</p>

                  </div>
                  
                  <div className="p-3">

                     <h1 className="my-2 font-semibold text-base cursor-pointer">New for Kids</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Shoes</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Accessories</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Shop All New</p>

                  </div>
              </div>
            )}
          </div>

          <div
            className={`Mens ${isMensOpen ? "open" : ""}`} 
            onMouseEnter={toggleMens}
            onMouseLeave={toggleMens}
          >
            <Link to={`/Men's`} className="hover:border-b-2 pb-2 border-black px-2">Men</Link> 

            {isMensOpen && (
              <div className=" absolute bg-white flex text-left justify-evenly w-full mt-2 py-8 left-0">
                  <div className="p-3">
                     <h1 className="my-2 font-semibold text-base cursor-pointer">Featured</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">New Releases</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Best Sellers</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Member Exclusive</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Last Sizes Available</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Back to Office</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Customize with Foot Print by you</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Sustainable Materials</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Sale</p>
                  </div>

                  <div className="p-3">

                     <h1 className="my-2 font-semibold text-base cursor-pointer">Shoes</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">All Shoes</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Lifestyle</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Sneakers</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Sandals & Slides</p>

                  </div>
                  
                  <div className="p-3">

                     <h1 className="my-2 font-semibold text-base cursor-pointer">Shop by Sport</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Running</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Football</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Tennis</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Skateboarding</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Gym and Traing</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Yoga</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Golf</p>

                  </div>
                  
                  <div className="p-3">

                     <h1 className="my-2 font-semibold text-base cursor-pointer">Accessories & Equipment</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">All Accessories & Equipment</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Bags and Backpacks</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Socks</p>

                  </div>
              </div>
            )}
          </div>

          <div
            className={`Womens ${isWomensOpen ? "open" : ""}`} 
            onMouseEnter={toggleWomens}
            onMouseLeave={toggleWomens}
          >
            <Link to={`/Women's`} className="hover:border-b-2 pb-2 border-black px-2">Women</Link>

            {isWomensOpen && (
              <div className=" absolute bg-white flex text-left justify-evenly w-full mt-2 py-8 left-0">
                  <div className="p-3">
                     <h1 className="my-2 font-semibold text-base cursor-pointer">Featured</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">New Releases</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Best Sellers</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Member Exclusive</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Last Sizes Available</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Customize with Foot Print by you</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Sustainable Materials</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Sale</p>
                  </div>

                  <div className="p-3">

                     <h1 className="my-2 font-semibold text-base cursor-pointer">Shoes</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">All Shoes</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Lifestyle</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Sandals & Slides</p>

                  </div>
                  
                  <div className="p-3">

                     <h1 className="my-2 font-semibold text-base cursor-pointer">Shop by Sport</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Football</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Tennis</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Gym and Traing</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Yoga</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Golf</p>

                  </div>
                  
                  <div className="p-3">

                     <h1 className="my-2 font-semibold text-base cursor-pointer">Accessories & Equipment</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">All Accessories & Equipment</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Bags and Backpacks</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Socks</p>

                  </div>
              </div>
            )}
          </div>

          <div
            className={`Kids ${isKidsOpen ? "open" : ""}`} 
            onMouseEnter={toggleKids}
            onMouseLeave={toggleKids}
          >
            <Link to={`/Kid's`} className="hover:border-b-2 pb-2 border-black px-2">Kids</Link>

            {isKidsOpen && (
              <div className=" absolute bg-white flex text-left justify-evenly w-full mt-2 py-8 left-0">
                  <div className="p-3">
                     <h1 className="my-2 font-semibold text-base cursor-pointer">Featured</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">New Releases</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Best Sellers</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Member Exclusive</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Last Sizes Available</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Back to School</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Sale</p>
                  </div>

                  <div className="p-3">

                     <h1 className="my-2 font-semibold text-base cursor-pointer">Boy's Shoes</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">All Shoes</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Lifestyle</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Sandals & Slides</p>

                  </div>
                  
                  <div className="p-3">

                     <h1 className="my-2 font-semibold text-base cursor-pointer">Girl's Shoes</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">All Shoes</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Lifestyle</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Sandals & Slides</p>

                  </div>
                  
                  <div className="p-3">

                     <h1 className="my-2 font-semibold text-base cursor-pointer">Kids by Age</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Older Kids (7 - 14 Years)</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Younger Kids (4 - 7 Years)</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:text-black">Babies & Toddlers (0 - 4 Years)</p>

                  </div>
                  
              </div>
            )}
          </div>
      
        <input type="search" placeholder="Search" className="bg-gray-200 px-5 pt-1 pb-1 rounded-3xl outline-none hover:bg-gray-300"/>

      </div>
)}

export default Navbar;