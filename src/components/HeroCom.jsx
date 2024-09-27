import React from 'react'

const HeroCom = () => {
  return (
    <div className='grid grid-cols-2 h-[51rem]' style={{ backgroundImage: `url('./hero_bg_1.jpg')` }}>
      <div>
         <div className='ml-[7rem]'>
         <p className='text-2xl text-orange-500 mt-[11rem] font-medium'>Repairing Services</p>
        <h1 className='text-8xl font-bold text-white mt-6'>Keeping You Cool All Year Round</h1>
        <p className='text-xl text-white mt-8'>Common signs include unusual noises, reduced airflow, uneven cooling strang odors, and higher energy bills</p>
         </div>
      </div>
      <div>
        <img src="./hero_img_1.png" alt="" />
      </div>
    </div>
  )
}

export default HeroCom