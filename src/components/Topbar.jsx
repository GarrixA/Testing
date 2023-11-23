import React from 'react'
import park from "../assets/park.png";
import { Link } from 'react-router-dom';
function Topbar() {
  return (
    <div>
        <div className="flex flex-col md:flex-row items-center">
        <img src={park} height={40} width={100}/>
        <div className="md:ml-40 md:mt-10 space-x-4 md:space-x-10 text-center md:text-left">
         <button className="mb-2 md:mb-0">About us</button>
         <button className="mb-2 md:mb-0">Contact us</button>
         <Link to={"login"}>
         <button className="mb-2 md:mb-0">Login</button>
         </Link>
         <button className="mb-2 md:mb-0">FAQ</button>
       </div>
      </div>
    </div>
  )
}

export default Topbar;