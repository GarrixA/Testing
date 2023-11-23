import React from 'react';
import park from '../assets/park.png';
import login from '../assets/login.png';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <>
<div className="flex flex-col md:flex-row items-center">
  <img src={park} height={40} width={100} className="mb-4 md:mb-0" />
  <div className="md:ml-40 md:mt-10 space-x-4 md:space-x-10 text-center md:text-left">
    <button className="mb-2 md:mb-0">About us</button>
    <button className="mb-2 md:mb-0">Contact us</button>
    <button>FAQ</button>
  </div>
</div>

  <div className="flex flex-col md:flex-row ml-0 md:ml-40">
  <div className="flex-col bg-blue-200 p-4">
    <p className="mb-4"><b>login</b></p>
      <label htmlFor="email" className="font-semibold block">
        Email:
      </label>
      <input
        type="text"
        id="email"
        className="border-2 border-black rounded-lg p-2 md:p-4 text-black block mb-2 md:mb-4"
        placeholder="Enter your email"
      />
      <label htmlFor="password" className="font-semibold block">
        Password:
      </label>
      <input
        type="password"
        id="password"
        className="border-2 border-black rounded-lg p-2 md:p-4 text-black block mb-4 md:mb-0"
        placeholder="Enter your password"
      />

      <button className="border-2 border-black mb-4 md:mb-0">Submit</button>

      <p className="text-sm">
        Don't have an account yet?{" "}
        <Link to={"/sign"} className="text-secondary">Sign up</Link>
      </p>
    </div>

    <div className="md:ml-4 mt-4 md:mt-0 hidden md:block">
      <img src={login} width={450} alt="Login" />
    </div>
  </div>


         </>
  )
}

export default Login;