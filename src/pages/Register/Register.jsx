import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";


const Register = () => {
    const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="relative w-full max-w-4xl h-[500px] bg-white rounded-lg shadow-lg flex overflow-hidden">
        {/* Image Section */}
        <div
          className={`absolute inset-0 w-1/2 h-full bg-cover bg-center transition-all duration-700 ease-in-out ${
            isLogin ? "left-0" : "left-[50%]"
          }`}
          style={{
            backgroundImage: `url('./bg1.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
          }}
        >
            {/* <p>Here is login</p> */}
        </div>

        {/* Login Form */}
        <div
          className={`absolute w-1/2 h-full transition-all duration-700 ease-in-out ${
            isLogin ? "left-[50%] opacity-100" : "left-full opacity-0"
          } flex items-center justify-center backdrop-blur-md`} style={{
            backgroundImage: `url('./bg.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
          }}
        >
          <div className="p-4 md:p-16 backdrop-blur-sm bg-white/30" >
            <h2 className="text-xl font-semibold mb-10 text-center">Login</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
              >
                Login
              </button>
              <div className='flex justify-center items-center gap-3'>
                <Link to=''> <img src="./g.png" alt="" className='w-5 h-5' /> </Link>
                <Link to=''> <img src="./facebook.png" alt="" className='w-5 h-5' /> </Link>
                <Link to=''> <img src="./instagram.png" alt="" className='w-5 h-5' /> </Link>
              </div>
              <p className="mt-4 text-sm text-center text-white">
                Forgot Password?{" "}
                <span
                  onClick={() => setIsLogin(true)}
                  className="text-black font-bold cursor-pointer"
                >
                  Reset
                </span>
              </p>
              <p className="mt-4 text-sm text-center text-white">
                Don't have an account?{" "}
                <span
                  onClick={() => setIsLogin(false)}
                  className="text-black font-bold cursor-pointer"
                >
                  Register
                </span>
              </p>
              
            </form>
          </div>
        </div>

        {/* Register Form */}
        <div
          className={`absolute w-1/2 h-full transition-all duration-700 ease-in-out  ${
            !isLogin ? "left-0 opacity-100" : "-left-[50%] opacity-0"
          } flex items-center justify-center`} style={{
            backgroundImage: `url('./bg.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
          }}
        >
          <div className="p-4 md:px-20 py-6 backdrop-blur-sm bg-white/30">
            <h2 className="text-xl font-semibold mb-3 text-center">Register</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full p-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
              >
                Register
              </button>
              <div className='flex justify-center items-center gap-3'>
                <Link to=''> <img src="./g.png" alt="" className='w-5 h-5' /> </Link>
                <Link to=''> <img src="./facebook.png" alt="" className='w-5 h-5' /> </Link>
                <Link to=''> <img src="./instagram.png" alt="" className='w-5 h-5' /> </Link>
              </div>
              <p className="mt-4 text-sm text-center text-white">
                Already have an account?{" "}
                <span
                  onClick={() => setIsLogin(true)}
                  className="text-black font-bold cursor-pointer"
                >
                  Login
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register