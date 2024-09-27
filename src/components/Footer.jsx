import React from "react";

const Footer = () => {
  return (
    <div className="">
      <div className="grid grid-cols-3 gap-6 bg-[#00172d] py-7">
        <div className="flex justify-center items-center">
          <div className="flex gap-6">
            <img src="./facebook.png" alt="" className="w-8 h-8" />
            <img src="./instagram.png" alt="" className="w-8 h-8" />
            <img src="./linkedin.png" alt="" className="w-8 h-8" />
            <img src="./twitter.png" alt="" className="w-8 h-8" />
            <img src="./youtube.png" alt="" className="w-8 h-8" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="justify-center">
            <div className="flex justify-center">
              <img src="./slack.png" alt="" className="w-10 h-10" />
            </div>
            <div>
              <p className="text-xl font-bold text-white">Chan Dra Dev</p>
              <p className="text-center font-medium text-orange-500">
                Repair Service
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex gap-5 items-center">
            <img src="./calling.png" alt="" className="w-12 h-12" />
            <div>
              <p className="text-sm font-medium text-white">
                Need Any Cleaning Help
              </p>
              <p className="font-bold text-xl text-white">(+977)-9805912060</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 bg-[#010f34] px-20 py-16">
        <div className="flex justify-center items-center">
          <div>
            <h1 className="text-2xl text-white font-bold mb-4">Our Service</h1>
            <div className="flex gap-1">
              <div className="bg-orange-500 w-[80px] h-1"></div>
              <div className="bg-white w-[20px] h-1"></div>
              <div className="bg-white w-[5px] h-1 rounded-full"></div>
            </div>
            <li className="text-white font-medium mb-3 mt-5">
              Rapid Cool Installation
            </li>
            <li className="text-white font-medium mb-3">
              Air Flow Optimization
            </li>
            <li className="text-white font-medium mb-3">
              Rapid Drain Unclogging
            </li>
            <li className="text-white font-medium mb-3">
              Frost Guard Emergency
            </li>
            <li className="text-white font-medium mb-3">
              Breeze Balance Calibration
            </li>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <h1 className="text-2xl text-white font-bold mb-4">
              Working Hours:
            </h1>
            <div className="flex gap-1">
              <div className="bg-orange-500 w-[80px] h-1"></div>
              <div className="bg-white w-[20px] h-1"></div>
              <div className="bg-white w-[5px] h-1 rounded-full"></div>
            </div>
            <div className="flex">
              <div>
                <li className="text-white font-medium mb-3 mt-5 flex gap-10">
                  Thu -&nbsp; Fri &nbsp; &nbsp;{" "}
                  <p className="">09:00 AM - 7:00 PM</p>
                </li>
                <li className="text-white font-medium mb-3 flex gap-10">
                  Mon - Tues <p>08:00 AM - 10:00 PM</p>
                </li>
                <li className="text-white font-medium mb-3 flex gap-10">
                  Wed &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                  <p>10:00 AM - 11:00 PM</p>
                </li>
                <li className="text-white font-medium mb-3 flex gap-10">
                  Saturday &nbsp; &nbsp;<p>07:00 AM - 9:00 PM</p>
                </li>
                <li className="text-white font-medium mb-3 flex gap-10">
                  Sunday &nbsp; &nbsp; &nbsp;<p> Close</p>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <h1 className="text-2xl text-white font-bold mb-4">Quick links</h1>
            <div className="flex gap-1">
              <div className="bg-orange-500 w-[80px] h-1"></div>
              <div className="bg-white w-[20px] h-1"></div>
              <div className="bg-white w-[5px] h-1 rounded-full"></div>
            </div>
            <li className="text-white font-medium mb-3 mt-5">Home</li>
            <li className="text-white font-medium mb-3">About</li>
            <li className="text-white font-medium mb-3">Service</li>
            <li className="text-white font-medium mb-3">Blog</li>
            <li className="text-white font-medium mb-3">Contact</li>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="">
            <h1 className="text-2xl text-white font-bold mb-4">Recent Post</h1>
            <div className="flex gap-1">
              <div className="bg-orange-500 w-[80px] h-1"></div>
              <div className="bg-white w-[20px] h-1"></div>
              <div className="bg-white w-[5px] h-1 rounded-full"></div>
            </div>
            <div className="flex gap-5 mt-7">
              <img src="./recent_post_1.jpg" alt="" className="w-[5rem]" />
              <div>
                <p className="flex text-white">
                  <img src="./schedule.png" alt="" className="w-6 h-6" />
                  12 May, 2024
                </p>
                <p className="text-white font-medium">
                  Outdoor and <br /> Landscape Lighting
                </p>
              </div>
            </div>
            <div className="flex gap-5 mt-3">
              <img src="./recent_post_2.jpg" alt="" className="w-[5rem]" />
              <div>
                <p className="flex text-white">
                  <img src="./schedule.png" alt="" className="w-6 h-6" />
                  10 May, 2024
                </p>
                <p className="text-white font-medium">
                  Panel Upgrades and <br /> Maintenance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-between bg-orange-500 py-6">
        <div className="flex justify-center items-center text-white">
          <p>
            Copyright@ 2024 <span className="text-gray-900">ChanDraDev</span>.
            All Rights Reserved.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-white flex gap-5">
            Setting & Privacy
            <li>FAQ</li>
            <li>Support</li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
