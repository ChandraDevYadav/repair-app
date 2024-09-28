import React from "react";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <div className="px-32 py-16" style={{ backgroundImage: `url('./service_bg_1.svg')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-20" >
      <div>
        <div className="flex justify-center items-center">
          <div className="relative w-[21rem] md:w-[25rem] h-[21rem] md:h-[25rem] bg-gray-200 clip-octagon flex flex-col items-center justify-center text-white p-4">
            <div className="relative w-[19rem] md:w-[23rem] h-[19rem] md:h-[23rem] bg-orange-500 clip-octagon flex flex-col items-center justify-center text-white p-4">
              <div className="absolute -top-4 w-[9.5rem] h-24 bg-gray-200 rounded-b-full flex items-center justify-center">
                <h1 className="text-3xl font-bold text-black">01</h1>
              </div>

              <h1 className="text-2xl text-center font-bold mt-6">
                ComfortCare Tune-Up
              </h1>
              <p className="text-lg text-center mt-4 font-medium">
                24/7 emergency repair services for sudden breakdowns
              </p>
              <button className="text-black mt-4 text-lg font-bold flex justify-center items-center gap-3">
                Read More <ArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-red-500 w-[340px] h-20 relative bottom-12 md:bottom-20 ml-[-6.25rem] md:ml-3 rounded-br-full rounded-bl-full flex justify-center items-center">
          <div className="bg-white p-4 rounded-full relative bottom-8">
            <img src="./service_icon_1.svg" alt="" className="w-8 h-8" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center">
          <div className="relative w-[21rem] md:w-[25rem] h-[21rem] md:h-[25rem] bg-gray-200 clip-octagon flex flex-col items-center justify-center text-white p-4">
            <div className="relative w-[19rem] md:w-[23rem] h-[19rem] md:h-[23rem] bg-orange-500 clip-octagon flex flex-col items-center justify-center text-white p-4">
              <div className="absolute -top-4 w-[9.5rem] h-24 bg-gray-200 rounded-b-full flex items-center justify-center">
                <h1 className="text-3xl font-bold text-black ">02</h1>
              </div>

              <h1 className="text-2xl text-center font-bold mt-6">
                Frosty Flow Systems
              </h1>
              <p className="text-lg text-center mt-4 font-medium">
                Common signs include reduced cooling efficiency strange
              </p>
              <button className="text-black mt-4 text-lg font-bold flex justify-center items-center gap-3">
                Read More <ArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-red-500 w-[340px] h-20 relative bottom-12 md:bottom-20 ml-[-6.25rem] md:ml-3 rounded-br-full rounded-bl-full flex justify-center items-center">
          <div className="bg-white p-4 rounded-full relative bottom-8">
            <img src="./service_icon_2.svg" alt="" className="w-8 h-8" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center">
          <div className="relative w-[21rem] md:w-[25rem] h-[21rem] md:h-[25rem] bg-gray-200 clip-octagon flex flex-col items-center justify-center text-white p-4">
            <div className="relative w-[19rem] md:w-[23rem] h-[19rem] md:h-[23rem] bg-orange-500 clip-octagon flex flex-col items-center justify-center text-white p-4">
              <div className="absolute -top-4 w-[9.5rem] h-24 bg-gray-200 rounded-b-full flex items-center justify-center">
                <h1 className="text-3xl font-bold text-black ">03</h1>
              </div>

              <h1 className="text-2xl text-center font-bold mt-6">
                Breeze Tech Cooling
              </h1>
              <p className="text-lg text-center mt-4 font-medium">
                It is recommended to service a your air conditioner signs
              </p>
              <button className="text-black mt-4 text-lg font-bold flex justify-center items-center gap-3">
                Read More <ArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-red-500 w-[340px] h-20 relative bottom-12 md:bottom-20 ml-[-6.25rem] md:ml-3 rounded-br-full rounded-bl-full flex justify-center items-center">
          <div className="bg-white p-4 rounded-full relative bottom-8">
            <img src="./service_icon_3.svg" alt="" className="w-8 h-8" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center">
          <div className="relative w-[21rem] md:w-[25rem] h-[21rem] md:h-[25rem] bg-gray-200 clip-octagon flex flex-col items-center justify-center text-white p-4">
            <div className="relative w-[19rem] md:w-[23rem] h-[19rem] md:h-[23rem] bg-orange-500 clip-octagon flex flex-col items-center justify-center text-white p-4">
              <div className="absolute -top-4 w-[9.5rem] h-24 bg-gray-200 rounded-b-full flex items-center justify-center">
                <h1 className="text-3xl font-bold text-black ">04</h1>
              </div>

              <h1 className="text-2xl text-center font-bold mt-6">
                Eco Cool Maintenance
              </h1>
              <p className="text-lg text-center mt-4 font-medium">
                Check the thermostat settings clean or replace the filter
              </p>
              <button className="text-black mt-4 text-xl font-bold flex justify-center items-center gap-3">
                Read More <ArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-red-500 w-[340px] h-20 relative bottom-12 md:bottom-20 ml-[-6.25rem] md:ml-3 rounded-br-full rounded-bl-full flex justify-center items-center">
          <div className="bg-white p-4 rounded-full relative bottom-8">
            <img src="./service_icon_4.svg" alt="" className="w-8 h-8" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center">
          <div className="relative w-[21rem] md:w-[25rem] h-[21rem] md:h-[25rem] bg-gray-200 clip-octagon flex flex-col items-center justify-center text-white p-4">
            <div className="relative w-[19rem] md:w-[23rem] h-[19rem] md:h-[23rem] bg-orange-500 clip-octagon flex flex-col items-center justify-center text-white p-4">
              <div className="absolute -top-4 w-[9.5rem] h-24 bg-gray-200 rounded-b-full flex items-center justify-center">
                <h1 className="text-3xl font-bold text-black ">05</h1>
              </div>

              <h1 className="text-2xl text-center font-bold mt-6">
                ArcticShield Repairs
              </h1>
              <p className="text-lg text-center mt-4 font-medium">
                Strange noises, unpleasant and odors, and increased
              </p>
              <button className="text-black mt-4 text-lg font-bold flex justify-center items-center gap-3">
                Read More <ArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-red-500 w-[340px] h-20 relative bottom-12 md:bottom-20 ml-[-6.25rem] md:ml-3 rounded-br-full rounded-bl-full flex justify-center items-center">
          <div className="bg-white p-4 rounded-full relative bottom-8">
            <img src="./service_icon_5.svg" alt="" className="w-8 h-8" />
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-center items-center">
          <div className="relative w-[21rem] md:w-[25rem] h-[21rem] md:h-[25rem] bg-gray-200 clip-octagon flex flex-col items-center justify-center text-white p-4">
            <div className="relative w-[19rem] md:w-[23rem] h-[19rem] md:h-[23rem] bg-orange-500 clip-octagon flex flex-col items-center justify-center text-white p-4">
              <div className="absolute -top-4 w-[9.5rem] h-24 bg-gray-200 rounded-b-full flex items-center justify-center">
                <h1 className="text-3xl font-bold text-black ">06</h1>
              </div>

              <h1 className="text-2xl text-center font-bold mt-6">
                Cool Breeze Solutions
              </h1>
              <p className="text-lg text-center mt-4 font-medium">
                Testing and analysis of indoor air quality with Air
              </p>
              <button className="text-black mt-4 text-lg font-bold flex justify-center items-center gap-3">
                Read More <ArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-red-500 w-[340px] h-20 relative bottom-12 md:bottom-20 ml-[-6.25rem] md:ml-3 rounded-br-full rounded-bl-full flex justify-center items-center">
          <div className="bg-white p-4 rounded-full relative bottom-8">
            <img src="./service_icon_6.svg" alt="" className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;
