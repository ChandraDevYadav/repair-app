import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const TeamDetail = () => {
  return (
    <div>
      <div
        className="py-40 text-white"
        style={{
          backgroundImage: `url('./page_heading_1.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-center text-5xl font-bold">Team Detail</h1>
        <div className="flex justify-center items-center gap-1 font-bold text-sm my-5">
          <Link to="/" className="text-center">
            HOME
          </Link>
          <img src="./db.png" alt="" className="w-5 h-5" />
          <p>TEAM DETAIL</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-6 md:mx-36 my-8 md:my-32">
        <div>
          <div className="p-5 rounded-xl border mx-0 md:mx-8">
            <img src="./team_member_details_1.jpg" alt="" />
          </div>
          <div className="mx-4 md:mx-8 my-8 md:my-16">
            <p className="text-2xl font-bold">About Me</p>
            <p className="text-gray-500 mt-6">
              Professional consultation services Site evaluation, load
              calculation, system recommendations, and detailed cost estimates
              Rapid response, on-site an diagnostics, immediate repairs, and
              follow-up check Fast and efficient is for installation of new air
              conditioning units
            </p>
            <p className="text-gray-500 mt-6">
              Comprehensive system scan, fault detection, detailed report, and
              conditionin recommended solutions Precision calibration services
              to ensure your air for conditioning system is operating at its
              optimal settings for maximum comfort and efficiency
            </p>
          </div>
        </div>
        <div>
          <div>
            <p className="text-4xl md:text-5xl font-semibold">Darlene Robertson</p>
            <p className="text-orange-500 mt-4">Ace Technician</p>
          </div>
          <div className="flex gap-2 mt-8">
            <FacebookIcon className="border w-10 h-10 p-2 bg-gray-200 rounded-lg hover:bg-orange-500 hover:text-white" />
            <InstagramIcon className="border w-10 h-10 p-2 bg-gray-200 rounded-lg hover:bg-orange-500 hover:text-white" />
            <LinkedinIcon className="border w-10 h-10 p-2 bg-gray-200 rounded-lg hover:bg-orange-500 hover:text-white" />
            <TwitterIcon className="border w-10 h-10 p-2 bg-gray-200 rounded-lg hover:bg-orange-500 hover:text-white" />
          </div>
          <p className="text-gray-500 mt-8">
            Professional consultation services to help you choose the right air
            and of conditioning system for your home or business needs. Site
            evaluation, as load calculation,
          </p>
          <div className="overflow-x-auto mt-6">
            <table className="min-w-full border-collapse">
              <tbody>
                <tr>
                  <td className="py-2 font-semibold">Phone Number:</td>
                  <td className="text-gray-500">+977-9805912060</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Email:</td>
                  <td className="text-gray-500">example@gmail.com</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Website:</td>
                  <td className="text-gray-500">http://www.zoomit.com</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Address:</td>
                  <td className="text-gray-500">
                    4140 Parker Rd. Allentown, New Mexico 31134
                  </td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Experience:</td>
                  <td className="text-gray-500">20 Years</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
          <div className="mt-14">
            <p className="text-2xl font-bold">Personal Skills</p>
            <p className="text-gray-500 mt-5">
              Thorough cleaning services to remove dirt, dust, and debris from
              your air conditioning system, improving air quality and system
              efficiency.
            </p>
          </div>
          <div className="mr-20">
          <div className="flex justify-between items-center mb-2 mt-6">
            <p>ChillMax Cleaning</p>
            <p>60%</p>
          </div>
          <div className="border pb-1 px-1">
          <div className="w-full bg-gray-200 rounded-full h-[0.3rem] dark:bg-gray-700 mt-1 border">
              <div
                className="bg-orange-500 h-[0.3rem] rounded-full "
                style={{width: '60%'}}
              ></div>
            </div> 
          </div>
          </div>
          <div className="mr-20">
          <div className="flex justify-between items-center mb-2 mt-6">
            <p>ArcticBlast Repai</p>
            <p>75%</p>
          </div>
          <div className="border pb-1 px-1">
          <div className="w-full bg-gray-200 rounded-full h-[0.3rem] dark:bg-gray-700 mt-1 border">
              <div
                className="bg-orange-500 h-[0.3rem] rounded-full "
                style={{width: '75%'}}
              ></div>
            </div> 
          </div>
          </div>
          <div className="mr-20">
          <div className="flex justify-between items-center mb-2 mt-6">
            <p>FreshFlow Maintenance</p>
            <p>92%</p>
          </div>
          <div className="border pb-1 px-1">
          <div className="w-full bg-gray-200 rounded-full h-[0.3rem] dark:bg-gray-700 mt-1 border">
              <div
                className="bg-orange-500 h-[0.3rem] rounded-full "
                style={{width: '92%'}}
              ></div>
            </div> 
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;
