import { ArrowRight } from "lucide-react";
import React from "react";

const ContactUs = () => {
  return (
    <div
      className="grid grid-cols-6 gap-6"
      style={{
        backgroundImage: `url('./cta_bg_1.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="col-span-4">
        <div className="flex gap-14 justify-center items-center">
        <div className="ml-44 my-20">
          <p className="text-xl font-medium text-white flex gap-3 items-center">
            <img
              src="./ac.png"
              className="w-6 h-6 animate-rotate"
              alt="Rotating Image"
            />
            WHY CHOOSE US
          </p>
          <h1 className="text-5xl font-bold mt-5 text-white">
          Get Premium Air Services <br />
          From With Us!
          </h1>
        </div>
        <button className="text-orange-500 px-6 py-3 rounded-lg flex gap-3 text-sm bg-white items-center font-bold">DESCRIBE MORE <ArrowRight/></button>
        </div>
      </div>
      <div className="col-span-2">
        <div>
          <img src="./cta_img_1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
