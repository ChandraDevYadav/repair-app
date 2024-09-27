import React from "react";
import { Link } from "react-router-dom";

const ProjectDetail = () => {
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
        <h1 className="text-center text-5xl font-bold">Project Detail</h1>
        <div className="flex justify-center items-center gap-1 font-bold text-sm my-5">
          <Link to="/" className="text-center">
            HOME
          </Link>
          <img src="./db.png" alt="" className="w-5 h-5" />
          <p>Project Detail</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 mx-40 mt-24">
        <div className="col-span-3">
          <p className="font-bold text-4xl">
            Professional conditioning Replacement
          </p>
          <p className="text-gray-500 my-6">
            High-efficiency units can significantly reduce energy consumption,
            lower utility bills, provide better cooling, and have a smaller
            environmental footprint Professional consultation,
          </p>
          <p className="text-gray-500">
            Comprehensive repair services for all types of air conditioning
            units. From minor fixes to major overhauls, our services technicians
            are equipped to handle any issue Diagnostic testing, component
            repair or replacement, system you all a rebalancing, and air for
            performance
          </p>
          <p className="text-gray-500 my-6">
            It is recommended to service your air conditioner at least once a
            year to ensure it runs efficiently and effectively and replacing
            filters, keeping the outdoor unit clean, and sealing any leaks in
            your home can improve efficiency A for an professional team your
            assessment is recommended
          </p>
        </div>
        <div>
          <div className="bg-[#ff550008] p-6 rounded-xl border mt-2 pb-6">
            <p className="text-2xl font-semibold">Categories</p>
            <div className="w-full bg-gray-200 rounded-full h-[0.3rem] dark:bg-gray-700 mt-4">
              <div
                className="bg-orange-500 h-[0.3rem] rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
            <div className="mt-4 border-b pb-4">
              <p className="text-gray-500 text-sm font-medium">Clients:</p>
              <p className="text-md font-medium mt-1">Marvin McKinney</p>
            </div>
            <div className="mt-3 border-b pb-4">
              <p className="text-gray-500 text-sm font-medium">Category:</p>
              <p className="text-md font-medium mt-1">
                Conditioning Replacement
              </p>
            </div>
            <div className="mt-3 border-b pb-4">
              <p className="text-gray-500 text-sm font-medium">Date:</p>
              <p className="text-md font-medium mt-1">12 May, 2024</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mx-40 mt-10">
        <div>
          <img src="./pro-1.jpg" alt="" />
        </div>
        <div>
          <img src="./pro-2.jpg" alt="" />
        </div>
      </div>
      <div className="mx-40 mt-10">
        <p className="text-3xl font-bold">Project Challenges</p>
        <p className="text-gray-500 mt-3 mr-7">
          Our expert technicians will assess your space and recommend the best
          air conditioning unit for your needs. We handle the entire
          installation process, ensuring your properplacement, wiring, and setup
          for optimal performance replacing
        </p>
        <div className="">
          <ol className="list-decimal pl-5 text-gray-500">
            <li className="mt-4 mr-7">
              Regular maintenance is essential for the longevity and efficiency
              of your air conditioner. Our maintenance service includes thorough
              inspection, cleaning of for all your lubrication, filter
              replacement, and performance testing to keep your system
            </li>
            <li className="mt-4 mr-7">
              Comprehensive repair services for malfunctioning air conditioning
              units, addressing issues such as refrigerant leaks, faulty
              compressors, and electrical problems an your in Professional air
              installation of new air conditioning systems
            </li>
          </ol>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 mx-40 mt-10">
        <div>
          <img src="./pro-3.jpg" alt="" className="h-[30rem]" />
        </div>
        <div>
          <img src="./pro-4.jpg" alt="" className="h-[30rem]" />
        </div>
        <div>
          <img src="./pro-5.jpg" alt="" className="h-[30rem]" />
        </div>
      </div>
      <div className="mx-40 mt-10 mb-24">
        <p className="text-3xl font-bold">Final Result</p>
        <p className="text-gray-500 mt-3 mr-7">
          Full system setup, ductwork connection thermostat integration and a
          thorough system test to ensure everything is working perfectly and
          ensure it operates at peak efficiency during the hottest months
          Regular maintenance
        </p>
        <p className="text-gray-500 mt-1 mr-7">
          Filter replacement, coil cleaning, lubrication of moving parts, system
          calibration, and a complete system inspection A thorough tune-up
          service designed to enhance the performance of your air conditioner
          and ensure it operates at peak efficiency during the hottest months
        </p>
      </div>
    </div>
  );
};

export default ProjectDetail;
