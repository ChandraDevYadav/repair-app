import React from "react";

const WhyUs = () => {
  return (
    <div
      class="grid grid-cols-10 gap-4 h-[50rem]"
      style={{ backgroundImage: `url('./why_chose_us_bg_1.jpg')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}
    >
      <div class="col-start-4 col-span-4">
      <div className="ml-12 mt-28">
      <p className="text-xl font-medium text-orange-500 flex gap-3 items-center"><img src="./ac.png" className="w-6 h-6 animate-rotate" alt="Rotating Image" />
      WHY CHOOSE US</p>
      <h1 className="text-5xl font-bold mt-5 text-[#010f34]">Relax we ve got your air climate covered</h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="">
            <div className="mt-16">
            <img src="./why_chose_us_1.svg" alt="" />
            <h1 className="text-2xl font-bold mt-5">24/7 Online Support</h1>
            <p className="mt-4 font-medium text-gray-400">Our Cool Care Emergency and Service is available 24/7</p>
            </div>
        </div>
        <div>
        <div className="mt-16">
            <img src="./why_chose_us_2.svg" alt="" />
            <h1 className="text-2xl font-bold mt-5">Expert Cleaning Team</h1>
            <p className="mt-4 font-medium text-gray-400">Proper calibration of your AC system ensures even cooling</p>
            </div>
        </div>
        <div>
        <div className="mt-4">
            <img src="./why_chose_us_3.svg" alt="" />
            <h1 className="text-2xl font-bold mt-5">Expert Cleaning Team</h1>
            <p className="mt-4 font-medium text-gray-400">Air conditioning system is best for your home cooling</p>
            </div>
        </div>
        <div>
        <div className="mt-4">
            <img src="./why_chose_us_4.svg" alt="" />
            <h1 className="text-2xl font-bold mt-5">Affordable Price</h1>
            <p className="mt-4 font-medium text-gray-400">Proper calibration of your AC system ensures even cooling</p>
            </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default WhyUs;
