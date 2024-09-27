import React from 'react'
import Testimonial from '../../components/Testimonial'
import Frequently from '../../components/Frequently'
import Working from '../../components/Working'
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className=''>
      {/* Header Section */}
      <div className='py-32 sm:py-40 text-white' 
        style={{ 
          backgroundImage: `url('./page_heading_1.jpg')`, 
          backgroundRepeat: 'no-repeat', 
          backgroundPosition: 'center', 
          backgroundSize: 'cover' 
        }}>
        <h1 className='text-center text-3xl sm:text-5xl font-bold'>About Us</h1>
        <div className='flex justify-center items-center gap-1 font-bold text-sm my-3 sm:my-5'>
          <Link to='/' className='text-center'>HOME</Link>
          <img src="./db.png" alt="" className='w-4 h-4 sm:w-5 sm:h-5' />
          <p>ABOUT US</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 px-5 sm:px-16 lg:px-24 py-8">
        {/* Image Section */}
        <div className="flex justify-center lg:justify-start">
          <img src="./about_img_2.png" alt="" className="w-full h-auto mt-10 lg:mt-36" />
        </div>

        {/* Text Section */}
        <div className="lg:mx-10 mt-10 lg:mt-20">
          <p className="text-lg sm:text-xl font-medium text-orange-500 flex gap-3 items-center">
            <img src="./ac.png" className="w-5 h-5 sm:w-6 sm:h-6 animate-rotate" alt="Rotating Image" />
            ABOUT US
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold my-4 leading-normal text-[#010f34]">
            Turning up the chill factor in your home or office
          </h1>
          <p className="text-sm sm:text-md font-medium my-4">
            This involves setting up a new air conditioning system in your home or office. It's crucial to ensure that the unit is properly sized for the space and installed correctly for optimal efficiency.
          </p>
          <ul className="text-sm sm:text-lg mt-5 leading-loose font-semibold text-gray-500">
            <li className="flex items-center gap-2 sm:gap-4">
              <img src="./rb.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
              Ventilation System Maintenance
            </li>
            <li className="flex items-center gap-2 sm:gap-4">
              <img src="./rb.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
              Indoor Air Quality Testing
            </li>
            <li className="flex items-center gap-2 sm:gap-4">
              <img src="./rb.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
              Cool Craft Custom Solutions
            </li>
          </ul>

          {/* Button and Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 lg:mt-14 items-center gap-5">
            <Button className='text-sm sm:text-lg px-5 sm:px-10 py-4 sm:py-6 gap-2 sm:gap-4 bg-orange-500 hover:bg-red-500'>
              READ MORE <ArrowRight />
            </Button>
            <div className="flex gap-5 items-center">
              <img src="./avatar_1.png" alt="" className="w-12 h-12 sm:w-14 sm:h-14 mt-2 sm:mt-3" />
              <div>
                <p className="text-md sm:text-lg font-bold">Chan Dra Dev</p>
                <p className="text-xs sm:text-sm text-gray-500 font-bold">Call any time for services</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Components */}
      <Testimonial />
      <Frequently />
      <Working />
    </div>
  )
}

export default About
