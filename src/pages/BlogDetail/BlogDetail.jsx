import { ArrowRight, FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"

const BlogDetail = () => {
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
        <h1 className="text-center text-5xl font-bold">Blog</h1>
        <div className="flex justify-center items-center gap-1 font-bold text-sm my-5">
          <Link to="/" className="text-center">
            HOME
          </Link>
          <img src="./db.png" alt="" className="w-5 h-5" />
          <p>Blog</p>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-5 mx-40">
        <div className="col-span-4">
          <div className="mt-10 shadow-lg pb-6 mb-8">
            <img
              src="./pro-7.jpg"
              alt=""
              className="rounded-xl w-full h-[23rem] transform transition ease-in duration-500 hover:scale-95"
            />
            <div className="flex gap-4 items-center p-7">
              <div className="flex justify-center items-center gap-3 border-r pr-5">
                <img src="./people.png" alt="" className="w-4 h-4" />
                <p className="text-gray-500">Post Admin</p>
              </div>
              <div className="flex justify-center items-center gap-3 border-r pr-5">
                <img src="./calendar.png" alt="" className="w-4 h-4" />
                <p className="text-gray-500">12 May, 2024</p>
              </div>
              <div className="flex justify-center items-center gap-5">
                <img src="./message.png" alt="" className="w-6 h-6" />
                <p className="text-gray-500">03 Comments</p>
              </div>
            </div>
            <div className="ml-7 mb-6">
              <p className="text-3xl font-semibold">
                Keeping You Cool and Comfortable
              </p>
              <p className="text-gray-500 mt-5">
                Energy-efficient upgrades to your existing air conditioning
                system, including the installation of smart thermostats,
                high-efficiency filters, and advanced cooling technologies
                Cleaning of you condenser and evaporator coils, thermostat
                calibration
              </p>
              <Button className="border bg-transparent text-black mt-5">
                READ MORE
              </Button>
            </div>
            <div className="mx-7">
              <p className="text-3xl font-semibold">
                The Benefits of Professional Ace Servicing
              </p>
              <p className="text-gray-500 text-sm mt-3">
                Deep cleaning of coils, fins, and filters, as well as cleaning
                the blower motor and ducts if your an necessary Ductwork
                inspection, airflow measurement, adjustments to dampers and
                registers and a final system test
              </p>
              <div className="grid grid-cols-2 gap-4 mt-7">
                <img src="./pro-6.jpg" className="rounded-xl" alt="" />
                <img src="./pro-7.jpg" className="rounded-xl" alt="" />
              </div>
              <p className="text-gray-500 text-sm mt-7">
                Home or office assessment, energy efficiency analysis, system
                recommendations, and air your detailed cost estimate or an
                upgrade
              </p>
              <ul className="grid grid-cols-2 gap-4 text-xl mt-7 border-b pb-8 font-semibold text-gray-500">
              <li className="flex gap-4 items-center">
                <img src="./tm.png" alt="" className="w-5 h-5" />
                Precision Installations
              </li>
              <li className="flex gap-4 items-center">
                <img src="./tm.png" alt="" className="w-5 h-5" />
                FrostWave Duct Cleaning
              </li>
              <li className="flex gap-4 items-center">
                <img src="./tm.png" alt="" className="w-5 h-5" />
                CoolCare Maintenance
              </li>
              <li className="flex gap-4 items-center">
                <img src="./tm.png" alt="" className="w-5 h-5" />
                CoolFlow Inspection
              </li>
            </ul>
            </div>
            <div className="grid grid-cols-2 justify-between items-center mx-7 pb-4 mt-4">
            <div className="flex items-center gap-4">
                <p className="text-xl font-semibold">Tags:</p>
                <Button className='bg-[#ff550008] text-black hover:bg-orange-500 hover:text-white'>Application</Button>
                <Button className='bg-[#ff550008] text-black hover:bg-orange-500 hover:text-white'>Installations</Button>
            </div>
            <div className="flex justify-end items-center gap-4">
                <p className="text-lg font-semibold">Share:</p>
                <Link className="bg-gray-200 p-2 rounded-full hover:bg-orange-500 hover:text-white"><FacebookIcon className="w-5 h-5"/></Link>
                <Link className="bg-gray-200 p-2 rounded-full hover:bg-orange-500 hover:text-white"><TwitterIcon className="w-5 h-5"/></Link>
                <Link className="bg-gray-200 p-2 rounded-full hover:bg-orange-500 hover:text-white"><LinkedinIcon className="w-5 h-5"/></Link>
            </div>
          </div>
          </div>

          <div className="shadow-lg mt-12 border rounded-md px-8 py-10">
            <p className="flex gap-3 items-center text-2xl font-bold"><img src="./message.png" className="w-8 h-8" alt="" /> Comments (3)</p>
            <div className="grid grid-cols-6 justify-center gap-3 mt-7 bg-[#ff550008] px-6 py-6 rounded-lg shadow-lg">
                <div>
                    <img src="./pro-8.jpg" alt="" className="rounded-xl" />
                </div>
                <div className="col-span-4">
                    <p className="text-lg font-bold">Jenny Wilson</p>
                    <p className="text-sm text-gray-500">12 May, 2024 05:56pm</p>
                    <p className="mt-4 text-sm text-gray-500">This can indicate loose parts or a need for professional maintenance air as Regular maintenance, clean filters,</p>
                </div>
                <div>
                    <Link to='' className="text-orange-500 font-semibold text-sm">Reply</Link>
                </div>
            </div>
            <div className="grid grid-cols-6 justify-center gap-3 mt-7 bg-[#ff550008] px-6 py-6 rounded-lg shadow-lg">
                <div>
                    <img src="./pro-9.jpg" alt="" className="rounded-xl" />
                </div>
                <div className="col-span-4">
                    <p className="text-lg font-bold">Jenny Wilson</p>
                    <p className="text-sm text-gray-500">12 May, 2024 05:56pm</p>
                    <p className="mt-4 text-sm text-gray-500">This can indicate loose parts or a need for professional maintenance air as Regular maintenance, clean filters,</p>
                </div>
                <div>
                    <Link to='' className="text-orange-500 font-semibold text-sm">Reply</Link>
                </div>
            </div>
            <div className="grid grid-cols-6 justify-center gap-3 mt-7 bg-[#ff550008] px-6 py-6 rounded-lg shadow-lg">
                <div>
                    <img src="./pro-10.jpg" alt="" className="rounded-xl" />
                </div>
                <div className="col-span-4">
                    <p className="text-lg font-bold">Jenny Wilson</p>
                    <p className="text-sm text-gray-500">12 May, 2024 05:56pm</p>
                    <p className="mt-4 text-sm text-gray-500">This can indicate loose parts or a need for professional maintenance air as Regular maintenance, clean filters,</p>
                </div>
                <div>
                    <Link to='' className="text-orange-500 font-semibold text-sm">Reply</Link>
                </div>
            </div>
          </div>
          
          <div className="shadow-lg mt-10 border rounded-md px-7 py-10 mb-10">
            <p className="flex gap-3 items-center text-2xl font-bold">Leave a comment</p>
            <div>
                <div className="flex gap-5 mt-5">
                <Input type="text" placeholder="Your Name" className="bg-gray-200" />
                <Input type="email" placeholder="Your Email" className="bg-gray-200" />
                </div>
                <Input type="text" placeholder="Website" className="mt-4 bg-gray-200" />
                <Textarea placeholder='Enter Your Message Here!' className='bg-gray-200 mt-4 h-[10rem]'/>
                <Button className='bg-orange-500 text-white w-full mt-4 font-bold text-sm'>POST COMMENT</Button>
            </div>
            
          </div>
          
        </div>
        <div className="col-span-2">
          <div className="p-8 rounded-xl border my-4 mt-10 bg-[#ecf1f5]">
            <div className="relative flex items-center">
              <Input type="email" placeholder="Enter Keyword" className="" />
              <img
                src="./search.png"
                className="w-9 h-9 bg-orange-500 p-2 relative right-10 rounded-lg"
                alt=""
              />
            </div>
          </div>
          <div className="bg-[#ff550008] p-8 rounded-xl border mt-10 pb-10">
            <p className="text-2xl font-bold">Categories</p>
            <div className="w-full bg-gray-200 rounded-full h-[0.3rem] dark:bg-gray-700 mt-4">
              <div
                className="bg-orange-500 h-[0.3rem] rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
            <div className="flex justify-between items-center mt-8 border-b border-b-gray-200 pb-4">
              <div className="flex justify-center items-center gap-3">
                <img src="fo.png" alt="" className="w-4 h-4" />
                <p className="text-gray-500 font-medium text-sm">
                  BreezeCheck Maintenance
                </p>
              </div>
              <div>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-b border-b-gray-200 pb-4">
              <div className="flex justify-center items-center gap-3">
                <img src="fo.png" alt="" className="w-4 h-4" />
                <p className="text-gray-500 font-medium text-sm">
                  ChillMax Cleaning
                </p>
              </div>
              <div>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-b border-b-gray-200 pb-4">
              <div className="flex justify-center items-center gap-3">
                <img src="fo.png" alt="" className="w-4 h-4" />
                <p className="text-gray-500 font-medium text-sm">
                  CoolFlow Inspection
                </p>
              </div>
              <div>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-b border-b-gray-200 pb-4">
              <div className="flex justify-center items-center gap-3">
                <img src="fo.png" alt="" className="w-4 h-4" />
                <p className="text-gray-500 font-medium text-sm">
                  FrostWave Duct Cleaning
                </p>
              </div>
              <div>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-b border-b-gray-200 pb-4">
              <div className="flex justify-center items-center gap-3">
                <img src="fo.png" alt="" className="w-4 h-4" />
                <p className="text-gray-500 font-medium text-sm">
                  CoolPro Installation
                </p>
              </div>
              <div>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-b border-b-gray-200 pb-4">
              <div className="flex justify-center items-center gap-3">
                <img src="fo.png" alt="" className="w-4 h-4" />
                <p className="text-gray-500 font-medium text-sm">
                  RapidRepair Services
                </p>
              </div>
              <div>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
            <div className="flex justify-between items-center mt-6">
              <div className="flex justify-center items-center gap-3">
                <img src="fo.png" alt="" className="w-4 h-4" />
                <p className="text-gray-500 font-medium text-sm">
                  Emergency CoolFix
                </p>
              </div>
              <div>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="bg-[#ff550008] p-8 rounded-xl border mt-10 pb-10">
            <p className="text-2xl font-bold">Recent Posts</p>
            <div className="w-full bg-gray-200 rounded-full h-[0.3rem] dark:bg-gray-700 mt-4">
              <div
                className="bg-orange-500 h-[0.3rem] rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
            <div className="flex gap-4 mt-5">
              <div>
                <img
                  src="./pro-1.jpg"
                  className="w-[5rem] h-[5rem] rounded-lg"
                  alt=""
                />
              </div>
              <div>
                <p className="text-md font-bold">
                  Keeping You Cool and Comfortable
                </p>
                <div className="flex items-center gap-3">
                  <img src="./calendar.png" className="w-4 h-4" alt="" />
                  <p className="text-gray-500 text-sm">12 May, 2024</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-5">
              <div>
                <img
                  src="./pro-2.jpg"
                  className="w-[5rem] h-[5rem] rounded-lg"
                  alt=""
                />
              </div>
              <div>
                <p className="text-md font-bold">
                  Keeping You Cool and Comfortable
                </p>
                <div className="flex items-center gap-3">
                  <img src="./calendar.png" className="w-4 h-4" alt="" />
                  <p className="text-gray-500 text-sm">12 May, 2024</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-5">
              <div>
                <img
                  src="./pro-3.jpg"
                  className="w-[5rem] h-[5rem] rounded-lg"
                  alt=""
                />
              </div>
              <div>
                <p className="text-md font-bold">
                  Keeping You Cool and Comfortable
                </p>
                <div className="flex items-center gap-3">
                  <img src="./calendar.png" className="w-4 h-4" alt="" />
                  <p className="text-gray-500 text-sm">12 May, 2024</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#ff550008] p-8 rounded-xl border mt-10 pb-10">
            <p className="text-2xl font-bold">Popular Tags</p>
            <div className="w-full bg-gray-200 rounded-full h-[0.3rem] dark:bg-gray-700 mt-4">
              <div
                className="bg-orange-500 h-[0.3rem] rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-8">
              <Button className="bg-gray-200 text-sm text-gray-500">
                Application
              </Button>
              <Button className="bg-gray-200 text-sm text-gray-500">Art</Button>
              <Button className="bg-gray-200 text-sm text-gray-500">
                Marketing
              </Button>
              <Button className="bg-gray-200 text-sm text-gray-500">
                Repair
              </Button>
              <Button className="bg-gray-200 text-sm text-gray-500">
                Installations
              </Button>
              <Button className="bg-gray-200 text-sm text-gray-500">
                Testing
              </Button>
              <Button className="bg-gray-200 text-sm text-gray-500">
                Ventilation
              </Button>
              <Button className="bg-gray-200 text-sm text-gray-500">
                Residential
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
