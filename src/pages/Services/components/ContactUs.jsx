import { ArrowRight } from "lucide-react";
import React from "react";

const ContactUs = () => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-6 gap-6"
      style={{
        backgroundImage: `url('./cta_bg_1.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="lg:col-span-4 col-span-1 flex flex-col items-center justify-center lg:justify-start lg:items-start">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 justify-center items-center px-4 lg:px-0">
          <div className="my-10 lg:my-20 text-center lg:text-left">
            <p className="text-lg lg:text-xl font-medium text-white flex gap-3 items-center justify-center lg:justify-start">
              <img
                src="./ac.png"
                className="w-6 h-6 animate-rotate"
                alt="Rotating Image"
              />
              WHY CHOOSE US
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold mt-5 text-white">
              Get Premium Air Services <br />
              From With Us!
            </h1>
          </div>
          <button className="text-orange-500 px-6 py-3 rounded-lg flex gap-3 text-sm bg-white items-center font-bold">
            DESCRIBE MORE <ArrowRight />
          </button>
        </div>
      </div>
      <div className="lg:col-span-2 col-span-1 flex justify-center lg:justify-end">
        <img src="./cta_img_1.png" alt="" className="w-full lg:w-auto px-4 lg:px-0" />
      </div>
    </div>
  );
};

export default ContactUs;
