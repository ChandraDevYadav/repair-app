import { ArrowRight } from 'lucide-react'
import React from 'react'

const Working = () => {
  return (
    <div className='py-20' style={{ backgroundImage: `url('./how_to_work_bg.svg')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <div className='flex justify-between items-end mx-20'>
        <div>
        <p className="text-xl font-medium text-orange-500 flex mt-10 gap-3 items-center">
            <img
              src="./ac.png"
              className="w-6 h-6 animate-rotate"
              alt="Rotating Image"
            />
            WHO TO WORK
          </p>
          <h1 className="text-5xl text-[#010f34] font-bold my-5">
          Simple Working Process
          </h1>
        </div>
          <p className="mt-8 mr-24 font-medium">
          Keeping the outdoor unit clean, and sealing any <br /> you leaks in your home can improve efficiency
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-10 mx-12">
            <div className='flex justify-items-center text-center items-center'>
                <div className='shadow-lg rounded-xl bg-white justify-items-center text-center items-center px-5'>
                <div className='bg-white border-2 border-gray-500 rounded-full relative bottom-6 left-24 w-16 h-16 p-3'>
                <img src="./service_icon_6.svg" alt="" className='' />
                </div>
                <h1 className='text-3xl font-bold'>Cool Wave System</h1>
                <p className='text-md font-medium mt-3'>Upgrade to the latest energy and <br /> efficient air conditioning Frost <br /> technology with Eco Cool</p>
                <div className='flex justify-center mt-3'>
                <button className='flex gap-2 mb-5 text-sm font-semibold items-center'>READ MORE <ArrowRight/></button>
                </div>
                </div>
            </div>
            <div className='flex justify-items-center text-center items-center'>
                <div className='shadow-lg rounded-xl bg-white justify-items-center text-center items-center px-5'>
                
                <h1 className='text-3xl font-bold mt-5'>Arctic Installations</h1>
                <p className='text-md font-medium mt-3'>The Arctic Blast Repair service <br /> addresses all your air Eco Cool <br /> conditioning repair needs</p>
                <div className='flex justify-center mt-3'>
                <button className='flex gap-2 text-sm font-semibold items-center'>READ MORE <ArrowRight/></button>
                </div>
                <div className='bg-white border-2 border-gray-500 rounded-full relative top-6 left-[6.5rem] w-16 h-16 p-3'>
                <img src="./service_icon_5.svg" alt="" className='' />
                </div>
                </div>
            </div>
            <div className='flex justify-items-center text-center items-center'>
                <div className='shadow-lg rounded-xl bg-white justify-items-center text-center items-center px-5'>
                <div className='bg-white border-2 border-gray-500 rounded-full relative bottom-6 left-24 w-16 h-16 p-3'>
                <img src="./service_icon_4.svg" alt="" className='' />
                </div>
                <h1 className='text-3xl font-bold'>Air Flow Solutions</h1>
                <p className='text-md font-medium mt-3'>Our Quick Cool Installation and <br /> service provides fast and <br /> cooling efficient installation</p>
                <div className='flex justify-center mt-3'>
                <button className='flex gap-2 text-sm font-semibold items-center mb-5'>READ MORE <ArrowRight/></button>
                </div>
                </div>
            </div>
            <div className='flex justify-items-center text-center items-center shadow-lg rounded-xl'>
                <div className='shadow-lg bg-white justify-items-center text-center items-center px-5 rounded-xl'>
                
                <h1 className='text-3xl font-bold mt-5'>Emergency Service</h1>
                <p className='text-md font-medium mt-3'>We handle everything from and <br /> assessing your cooling needs to <br /> positioning Arctic Blast</p>
                <div className='flex justify-center mt-3'>
                <button className='flex gap-2  text-sm font-semibold items-center'>READ MORE <ArrowRight/></button>
                </div>
                <div className='bg-white border-2 border-gray-500 rounded-full relative top-6 left-[6.5rem] w-16 h-16 p-3'>
                <img src="./service_icon_3.svg" alt="" className='' />
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Working