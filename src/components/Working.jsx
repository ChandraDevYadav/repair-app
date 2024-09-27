import { ArrowRight } from 'lucide-react';
import React from 'react';

const Working = () => {
  return (
    <div
      className='py-20'
      style={{
        backgroundImage: `url('./how_to_work_bg.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className='flex flex-col md:flex-row justify-between items-end mx-4 md:mx-20'>
        <div className='mb-8 md:mb-0'>
          <p className='text-xl font-medium text-orange-500 flex mt-10 gap-3 items-center'>
            <img
              src='./ac.png'
              className='w-6 h-6 animate-rotate'
              alt='Rotating Image'
            />
            WHO TO WORK
          </p>
          <h1 className='text-3xl md:text-5xl text-[#010f34] font-bold my-5'>
            Simple Working Process
          </h1>
        </div>
        <p className='mt-8 mr-0 md:mr-24 font-medium text-center md:text-right'>
          Keeping the outdoor unit clean, and sealing any <br /> leaks in your home can improve efficiency.
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mx-4 md:mx-12'>
        {[
          {
            title: 'Cool Wave System',
            description:
              'Upgrade to the latest energy and efficient air conditioning Frost technology with Eco Cool',
            icon: './service_icon_6.svg',
          },
          {
            title: 'Arctic Installations',
            description:
              'The Arctic Blast Repair service addresses all your air Eco Cool conditioning repair needs',
            icon: './service_icon_5.svg',
          },
          {
            title: 'Air Flow Solutions',
            description:
              'Our Quick Cool Installation and service provides fast and cooling efficient installation',
            icon: './service_icon_4.svg',
          },
          {
            title: 'Emergency Service',
            description:
              'We handle everything from assessing your cooling needs to positioning Arctic Blast',
            icon: './service_icon_3.svg',
          },
        ].map((service, index) => (
          <div
            key={index}
            className='flex justify-center text-center items-center'
          >
            <div className='shadow-lg rounded-xl bg-white justify-items-center text-center items-center px-5'>
              <div className='bg-white border-2 border-gray-500 rounded-full relative w-16 h-16 p-3 mx-auto'>
                <img src={service.icon} alt={service.title} />
              </div>
              <h1 className='text-3xl font-bold mt-5'>{service.title}</h1>
              <p className='text-md font-medium mt-3'>{service.description}</p>
              <div className='flex justify-center mt-3'>
                <button className='flex gap-2 text-sm font-semibold items-center'>
                  READ MORE <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Working;
