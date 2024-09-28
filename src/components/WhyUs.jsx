import React from "react";

const WhyUs = () => {
  return (
    <div
      className="grid grid-cols-10 gap-4 h-auto md:h-auto pb-10"
      style={{
        backgroundImage: `url('./why_chose_us_bg_1.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div className="col-start-2 col-span-8 md:col-start-4 md:col-span-4">
        <div className="ml-4 mt-20 md:ml-12 md:mt-28">
          <p className="text-xl font-medium text-orange-500 flex gap-3 items-center">
            <img src="./ac.png" className="w-6 h-6 animate-rotate" alt="Rotating Image" />
            WHY CHOOSE US
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mt-5 text-[#010f34]">
            Relax, we’ve got your air climate covered
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            <div className="flex flex-col items-center mt-4">
              <img src="./why_chose_us_1.svg" alt="" className="w-16 h-16" />
              <h1 className="text-xl md:text-2xl font-bold mt-5">24/7 Online Support</h1>
              <p className="mt-2 font-medium text-gray-400 text-center">
                Our Cool Care Emergency and Service is available 24/7
              </p>
            </div>
            <div className="flex flex-col items-center mt-4">
              <img src="./why_chose_us_2.svg" alt="" className="w-16 h-16" />
              <h1 className="text-xl md:text-2xl font-bold mt-5">Expert Cleaning Team</h1>
              <p className="mt-2 font-medium text-gray-400 text-center">
                Proper calibration of your AC system ensures even cooling
              </p>
            </div>
            <div className="flex flex-col items-center mt-4">
              <img src="./why_chose_us_3.svg" alt="" className="w-16 h-16" />
              <h1 className="text-xl md:text-2xl font-bold mt-5">Best Air Conditioning</h1>
              <p className="mt-2 font-medium text-gray-400 text-center">
                Air conditioning system is best for your home cooling
              </p>
            </div>
            <div className="flex flex-col items-center mt-4">
              <img src="./why_chose_us_4.svg" alt="" className="w-16 h-16" />
              <h1 className="text-xl md:text-2xl font-bold mt-5">Affordable Price</h1>
              <p className="mt-2 font-medium text-gray-400 text-center">
                Get the best prices without compromising quality
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
