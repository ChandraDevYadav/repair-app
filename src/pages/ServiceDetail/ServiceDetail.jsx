import React from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react";
import { Textarea } from "@/components/ui/textarea"

const ServiceDetail = () => {
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
        <h1 className="text-center text-5xl font-bold">Service Detail</h1>
        <div className="flex justify-center items-center gap-1 font-bold text-sm my-5">
          <Link to="/" className="text-center">
            HOME
          </Link>
          <img src="./db.png" alt="" className="w-5 h-5" />
          <p>SERVICE DETAILS</p>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-6 mx-44 mt-24">
        <div className="col-span-4">
          <div className="p-8 rounded-xl border my-4">
            <img src="./service_details_1.jpg" alt="" />
            <p className="text-4xl font-bold my-5">Cooling You Can Count On</p>
            <p className="text-sm text-gray-400 font-medium pr-5">
              Fast and efficient installation of new air conditioning units. Our
              certified technicians ensure your system is properly installed for
              optimal performance Site assessment, equipment delivery air an
              complete installation.
            </p>
            <p className="text-sm text-gray-400 font-medium mt-5 pr-5">
              Regular maintenance services to keep your air conditioning system
              running smoothly and for as efficiently, preventing an breakdowns
              and extending its lifespan Filter replacement, coil cleaning,
              refrigerant check, thermostat calibration, and system inspection
              air conditioning Upgrading your existing air conditioning system.
            </p>
            <p className="text-3xl font-bold my-5">Your Comfort, Our Mission</p>
            <p className="text-sm text-gray-400 font-medium mt-5 pr-5">
              Upgrading your existing air conditioning system to more
              energy-efficient models, helping you save on energy bills and
              reduce your carbon footprint Lubrication of moving parts,
              electrical connection inspection,
            </p>
            <div className="flex gap-3 mt-6">
              <div>
                <img
                  src="./service_details_2.jpg"
                  alt=""
                  className="rounded-xl"
                />
              </div>
              <div>
                <img
                  src="./service_details_3.jpg"
                  alt=""
                  className="rounded-xl"
                />
              </div>
            </div>
            <p className="text-sm text-gray-400 font-medium mt-5 pr-5">
              Energy assessment, old unit removal, new unit installation, and
              energy efficiency optimization a Advanced diagnostic services
              using the latest technology to detect and address issues in your
              air conditioning system before they become major problems
            </p>
            <p className="text-3xl font-bold my-5">
              Air Conditioning & Heating Services
            </p>
            <p className="text-sm text-gray-400 font-medium mt-5 pr-5">
              Comprehensive system scan, fault detection, detailed report, and
              recommended solutions. Tha Precision calibration services to
              ensure your air conditioning system is operating at its optimal
              settings for maximum comfort and efficiency
            </p>
            <ul className="grid grid-cols-2 gap-4 text-xl mt-5 font-semibold text-gray-500">
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
              <li className="flex gap-4 items-center">
                <img src="./tm.png" alt="" className="w-5 h-5" />
                TempGuard Emergency
              </li>
              <li className="flex gap-4 items-center">
                <img src="./tm.png" alt="" className="w-5 h-5" />
                FrostGuard Inspection
              </li>
            </ul>
            <p className="text-3xl font-bold my-5">
              We help you with the dedication & affection
            </p>
            <p className="text-sm text-gray-400 font-medium mt-5 pr-5">
              Thorough cleaning services to remove dirt, dust, and debris from
              your air conditioning system, improving air quality and system
              efficiency
            </p>
            <div className="mt-5">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    What should I do in an electrical emergency?
                  </AccordionTrigger>
                  <AccordionContent className="mr-10 font-medium text-gray-500">
                    Signs that you may need to rewire your home include frequent
                    electrical problems, such as blown fuses or tripped
                    breakers, outdated wiring kinds discolored outlets, or a
                    burning smell near outlets or switches.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    What are the signs that I need to rewire my home?
                  </AccordionTrigger>
                  <AccordionContent className="mr-10 font-medium text-gray-500">
                    YSigns that you may need to rewire your home include
                    frequent electrical problems, such as blown fuses or tripped
                    breakers, outdated wiring kinds discolored outlets, or a
                    burning smell near outlets or switches.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    What should I do in an electrical emergency?
                  </AccordionTrigger>
                  <AccordionContent className="mr-10 font-medium text-gray-500">
                    Signs that you may need to rewire your home include frequent
                    electrical problems, such as blown fuses or tripped
                    breakers, outdated wiring kinds discolored outlets, or a
                    burning smell near outlets or switches.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="p-8 rounded-xl border my-4 bg-[#ecf1f5]">
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
                style={{width: '45%'}}
              ></div>
            </div>
            <div className="flex justify-between items-center mt-8 border-b border-b-gray-200 pb-4">
                <div className="flex justify-center items-center gap-3">
                    <img src="fo.png" alt="" className="w-4 h-4" />
                    <p className="text-gray-500 font-medium text-sm">BreezeCheck Maintenance</p>
                </div>
                <div>
                    <ArrowRight className="w-5 h-5"/>
                </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-b border-b-gray-200 pb-4">
                <div className="flex justify-center items-center gap-3">
                    <img src="fo.png" alt="" className="w-4 h-4" />
                    <p className="text-gray-500 font-medium text-sm">ChillMax Cleaning</p>
                </div>
                <div>
                    <ArrowRight className="w-5 h-5"/>
                </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-b border-b-gray-200 pb-4">
                <div className="flex justify-center items-center gap-3">
                    <img src="fo.png" alt="" className="w-4 h-4" />
                    <p className="text-gray-500 font-medium text-sm">CoolFlow Inspection</p>
                </div>
                <div>
                    <ArrowRight className="w-5 h-5"/>
                </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-b border-b-gray-200 pb-4">
                <div className="flex justify-center items-center gap-3">
                    <img src="fo.png" alt="" className="w-4 h-4" />
                    <p className="text-gray-500 font-medium text-sm">FrostWave Duct Cleaning</p>
                </div>
                <div>
                    <ArrowRight className="w-5 h-5"/>
                </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-b border-b-gray-200 pb-4">
                <div className="flex justify-center items-center gap-3">
                    <img src="fo.png" alt="" className="w-4 h-4" />
                    <p className="text-gray-500 font-medium text-sm">CoolPro Installation</p>
                </div>
                <div>
                    <ArrowRight className="w-5 h-5"/>
                </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-b border-b-gray-200 pb-4">
                <div className="flex justify-center items-center gap-3">
                    <img src="fo.png" alt="" className="w-4 h-4" />
                    <p className="text-gray-500 font-medium text-sm">RapidRepair Services</p>
                </div>
                <div>
                    <ArrowRight className="w-5 h-5"/>
                </div>
            </div>
            <div className="flex justify-between items-center mt-6">
                <div className="flex justify-center items-center gap-3">
                    <img src="fo.png" alt="" className="w-4 h-4" />
                    <p className="text-gray-500 font-medium text-sm">Emergency CoolFix</p>
                </div>
                <div>
                    <ArrowRight className="w-5 h-5"/>
                </div>
            </div>
          </div>
          <div className="bg-[#ff550008] p-8 rounded-xl border mt-8 pb-10">
          <p className="text-2xl font-bold">Download</p>
            <div className="w-full bg-gray-200 rounded-full h-[0.3rem] dark:bg-gray-700 mt-4 mb-6">
              <div
                className="bg-orange-500 h-[0.3rem] rounded-full"
                style={{width: '25%'}}
              ></div>
            </div>
            <Button className='bg-orange-500 text-white py-3 w-full '>DOWNLOAD PDF</Button>
            <Button className='bg-[#010f34] text-white py-3 w-full mt-4 '>DOWNLOAD DOC</Button>
          </div>
          <div className="bg-[#ff550008] p-8 rounded-xl border mt-8 pb-10">
          <p className="text-2xl font-bold">Ask Question</p>
            <div className="w-full bg-gray-200 rounded-full h-[0.3rem] dark:bg-gray-700 mt-4 mb-6">
              <div
                className="bg-orange-500 h-[0.3rem] rounded-full"
                style={{width: '25%'}}
              ></div>
            </div>
            <Input type="email" placeholder="Your Name" className="border-0 bg-[#ecf1f5] active:border-0" />
            <Input type="email" placeholder="Email Address" className="border-0 bg-[#ecf1f5] active:border-0 my-4" />
            <Input type="email" placeholder="Phone Number" className="border-0 bg-[#ecf1f5] active:border-0" />
            <Textarea placeholder="Type your message here." className='border-0 bg-[#ecf1f5] active:border-0 my-4'/>
            <Button className='bg-orange-500 text-white py-3 w-full text-sm'>ASK QUESTION NOW</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
