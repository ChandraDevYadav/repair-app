import React from "react";
import { ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="grid grid-cols-2 px-24 py-8">
      <div>
        <img src="./about_img_1.png" alt="" className="w-full h-3/4 mt-12" />
      </div>
      <div>
        <div className="mx-10 mt-20">
        <p className="text-xl font-medium text-orange-500 flex gap-3 items-center"><img src="./ac.png" className="w-6 h-6 animate-rotate" alt="Rotating Image" />
        ABOUT US</p>
        <h1 className="text-5xl font-bold my-4 leading-normal text-[#010f34]">Where every breath feels<br /> fresh and cool</h1>
        <p className="text-xl my-8">
          Prompt diagnosis and repair of any issues with your air conditioning
          unit your <br /> ensure optimal performance inspection of ductwork for leaks
          or damage air <br /> followed by sealing to improve energy efficiency
        </p>
        <ul className="grid grid-cols-2 gap-4 text-xl mt-5 font-semibold text-gray-500">
          <li className="flex gap-4"><img src="./check.png" alt="" className="w-8 h-8" />AirFlow Optimization</li>
          <li className="flex gap-4"><img src="./check.png" alt="" className="w-8 h-8" />FreezeGuard Installation</li>
          <li className="flex gap-4"><img src="./check.png" alt="" className="w-8 h-8" />ClimateControl Checkup</li>
          <li className="flex gap-4"><img src="./check.png" alt="" className="w-8 h-8" />PureAir Quality Testing</li>
          <li className="flex gap-4"><img src="./check.png" alt="" className="w-8 h-8" />CoolCare Maintenance</li>
          <li className="flex gap-4"><img src="./check.png" alt="" className="w-8 h-8" />ChillOut Emergency Services</li>
        </ul>
        </div>
        <div className="grid grid-cols-2 mx-10 mt-14 items-center">
            <div>
                <Button className='text-lg px-12 py-8 gap-4 bg-orange-500 hover:bg-red-500'>READ MORE <ArrowRight/></Button>
            </div>
            <div className="flex gap-5 items-center">
                <img src="./phone-call.png" alt="" className="w-14 h-14 mt-3" />
                <div>
                    <p className="text-sm text-gray-500 font-medium">Call any time for Freseir services</p>
                    <p className="text-xl font-bold">(+977) 9805912060</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
