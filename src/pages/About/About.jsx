import React from 'react'
import Testimonial from '../../components/Testimonial'
import Frequently from '../../components/Frequently'
import Working from '../../components/Working'
import { ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className=''>
      <div className='py-40 text-white' style={{ backgroundImage: `url('./page_heading_1.jpg')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <h1 className='text-center text-5xl font-bold'>About Us</h1>
      <div className='flex justify-center items-center gap-1 font-bold text-sm my-5'>
      <Link to='/' className='text-center'>HOME</Link>
      <img src="./db.png" alt="" className='w-5 h-5' />
      <p>ABOUT US</p>
      </div>
      </div>
      <div className="grid grid-cols-2 px-24 py-8">
      <div>
        <img src="./about_img_2.png" alt="" className="w-full h-3/4 mt-36" />
      </div>
      <div>
        <div className="mx-10 mt-20">
        <p className="text-xl font-medium text-orange-500 flex gap-3 items-center"><img src="./ac.png" className="w-6 h-6 animate-rotate" alt="Rotating Image" />
        ABOUT US</p>
        <h1 className="text-5xl font-bold my-4 leading-normal text-[#010f34]">Turning up the chill factor in your home or office</h1>
        <p className="text-md font-medium my-4">
          This involves setting up a new air conditioning system in your home or office. It's crucial to ensure that the unit is properly sized for the space and installed correctly for optimal efficiency
        </p>
        <ul className="text-xl mt-5 leading-loose font-semibold text-gray-500">
          <li className="flex items-center gap-4"><img src="./rb.png" alt="" className="w-5 h-5" />Ventilation System Maintenance</li>
          <li className="flex items-center gap-4"><img src="./rb.png" alt="" className="w-5 h-5" />Indoor Air Quality Testing</li>
          <li className="flex items-center gap-4"><img src="./rb.png" alt="" className="w-5 h-5" />Cool Craft Custom Solutions</li>
        </ul>
        </div>
        <div className="grid grid-cols-2 mx-10 mt-14 items-center">
            <div>
                <Button className='text-lg px-10 py-6 gap-4 bg-orange-500 hover:bg-red-500'>READ MORE <ArrowRight/></Button>
            </div>
            <div className="flex gap-5 items-center">
                <img src="./avatar_1.png" alt="" className="w-14 h-14 mt-3" />
                <div>
                    <p className="text-lg font-bold">Chan Dra Dev</p>
                    <p className="text-sm text-gray-500 font-bold">Call any time for services</p>
                </div>
            </div>
        </div>
      </div>
    </div>
      <Testimonial/>
      <Frequently/>
      <Working/>
    </div>
  )
}

export default About