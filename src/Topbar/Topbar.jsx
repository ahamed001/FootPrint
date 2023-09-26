import React from "react";
import { FaShoePrints, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

let Topbar=()=>{

  return(

    <div className="flex justify-between bg-gray-200 py-2">
      <Link to={`/`}>
        <FaShoePrints className="text-2xl	sm:ml-5 ml-2 cursor-pointer hover:text-gray-700"/>
      </Link>
      <Link to={`/`}>
        <p className="text-xl font-bold cursor-pointer">Foot Print</p>
      </Link>

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