import React from "react";
import { FaShoePrints, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
let Topbar=()=>{
    const logo = () => {
        window.location.href="http://localhost:3000/"; 
      };

      return(

        <div className="flex justify-between bg-gray-200 pt-2 pb-2">
              <FaShoePrints className="text-2xl	ml-5 cursor-pointer hover:text-gray-700" onClick={logo}/> 
              <p className="text-xl font-bold cursor-pointer" onClick={logo}>Foot Print</p>
              
              <div className="flex mr-5">
              <FaShoppingBag className="mx-2 mt-1 cursor-pointer hover:text-gray-700"/>

              <Link to={`/Joinus`}>
              <p className="px-3 cursor-pointer hover:text-gray-500">Join Us</p> 
              </Link>
              <Link to={`/Signin`}>
              <p className="px-3 cursor-pointer hover:text-gray-700">Sign-in</p>
              </Link>
              </div>

        </div>
)}

export default Topbar;