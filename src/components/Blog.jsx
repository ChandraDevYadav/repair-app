import { ArrowRight } from 'lucide-react'
import React from 'react'

const Blog = () => {
  return (
    <div className='mb-[12rem]'>
        <div className='relative'>
      <img src="./blog_section_img_1.svg" alt="" className='absolute top-[35rem]' />
      </div>
        <div className="justify-center text-center mt-24">
        <p className="text-xl font-medium justify-center text-orange-500 flex gap-3 items-center">
          <img
            src="./ac.png"
            className="w-6 h-6 animate-rotate"
            alt="Rotating Image"
          />
          OUR NEW UPDATES
        </p>
        <h1 className="text-5xl font-bold mt-5 mb-12 text-[#010f34]">
        Latest Articles & News from <br />
        The Blogs
        </h1>
      </div>
      <div className='grid grid-cols-8 mx-40 gap-6'>
        <div className='col-span-2 shadow-lg border rounded-lg p-5'>
            <div className='flex gap-10 items-center'>
                <div className='bg-orange-500 text-sm font-bold text-white px-3 text-center py-1 rounded-sm'>
                    <p>12</p>
                    <p>May</p>
                </div>
                <div>
                    <p className='font-medium text-gray-500'>03 Comments</p>
                </div>
            </div>
            <h1 className='text-[1.3rem] mt-4 font-bold'>Breathe Easy with Cool Air</h1>
            <div className='mt-3'>
                <img src="./post_1.jpg" alt="" className='rounded-lg' />
            </div>
            <button className='flex gap-2  text-sm font-bold items-center mt-3'>READ MORE <ArrowRight className='w-4 h-4'/></button>
        </div>
        <div className='col-span-4'>
        <div className="relative group">
  <div className="w-full overflow-hidden">
    <img
      src="./post_2.jpg"
      alt="Card image"
      className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform group-hover:scale-110"
    />
  </div>
  <div className="absolute inset-0 bg-gradient-to-t from-orange-500"></div>
  <div className="absolute inset-0 flex flex-col justify-center p-12 mt-40">
  <div className='flex gap-10 items-center '>
                <div className='bg-orange-500 text-white text-sm font-bold px-3 text-center py-1 rounded-sm'>
                    <p>10</p>
                    <p>May</p>
                </div>
                <div className='flex'>
                    <p className='border-r border-r-white pr-6 font-medium text-white'>By Admin</p>
                    <p className='font-medium text-white pl-6'>08 Comments</p>
                </div>
            </div>
    <p className="text-2xl mt-5 font-semibold text-white mb-2">
    Maintenance tasks can I do myself to keep my air conditioner
    </p>
    <button className='flex gap-2 text-white text-sm font-bold items-center mt-3'>READ MORE <ArrowRight className='w-4 h-4'/></button>
  </div>
</div>


        </div>
        <div className='col-span-2 shadow-lg border rounded-lg p-5'>
            <div className='flex gap-10 items-center'>
                <div className='bg-orange-500 text-sm font-bold text-white px-3 text-center py-1 rounded-sm'>
                    <p>12</p>
                    <p>May</p>
                </div>
                <div>
                    <p className='font-medium text-gray-500'>03 Comments</p>
                </div>
            </div>
            <h1 className='text-[1.3rem] mt-4 font-bold'>Breathe Easy with Cool Air</h1>
            <div className='mt-3'>
                <img src="./post_3.jpg" alt="" className='rounded-lg' />
            </div>
            <button className='flex gap-2  text-sm font-bold items-center mt-3'>READ MORE <ArrowRight className='w-4 h-4'/></button>
        </div>
      </div>
    </div>
  )
}

export default Blog