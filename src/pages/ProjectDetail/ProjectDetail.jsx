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
        <h1 className="text-center text-4xl sm:text-5xl font-bold">Project Detail</h1>
        <div className="flex justify-center items-center gap-1 font-bold text-sm my-5">
          <Link to="/" className="text-center">
            HOME
          </Link>
          <img src="./db.png" alt="" className="w-5 h-5" />
          <p>Project Detail</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-4 md:mx-40 mt-24">
        <div className="col-span-1 md:col-span-3">
          <p className="font-bold text-3xl sm:text-4xl">
            Professional Conditioning Replacement
          </p>
          <p className="text-gray-500 my-6">
            High-efficiency units can significantly reduce energy consumption,
            lower utility bills, provide better cooling, and have a smaller
            environmental footprint. Professional consultation,
          </p>
          <p className="text-gray-500">
            Comprehensive repair services for all types of air conditioning
            units. From minor fixes to major overhauls, our service technicians
            are equipped to handle any issue: diagnostic testing, component
            repair or replacement, system rebalancing, and performance checks.
          </p>
          <p className="text-gray-500 my-6">
            It is recommended to service your air conditioner at least once a
            year to ensure it runs efficiently and effectively. Replacing
            filters, keeping the outdoor unit clean, and sealing any leaks in
            your home can improve efficiency. A professional team assessment
            is recommended.
          </p>
        </div>

        <div className="col-span-1">
          <div className="bg-[#ff550008] p-6 rounded-xl border mt-2 pb-6">
            <p className="text-xl sm:text-2xl font-semibold">Categories</p>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 md:mx-40 mt-10">
        <div>
          <img src="./pro-1.jpg" alt="" className="w-full h-auto object-cover" />
        </div>
        <div>
          <img src="./pro-2.jpg" alt="" className="w-full h-auto object-cover" />
        </div>
      </div>

      <div className="mx-4 md:mx-40 mt-10">
        <p className="text-3xl font-bold">Project Challenges</p>
        <p className="text-gray-500 mt-3">
          Our expert technicians will assess your space and recommend the best
          air conditioning unit for your needs. We handle the entire
          installation process, ensuring proper placement, wiring, and setup
          for optimal performance.
        </p>
        <div>
          <ol className="list-decimal pl-5 text-gray-500">
            <li className="mt-4">
              Regular maintenance is essential for the longevity and efficiency
              of your air conditioner. Our maintenance service includes thorough
              inspection, cleaning, lubrication, filter replacement, and performance
              testing to keep your system running smoothly.
            </li>
            <li className="mt-4">
              Comprehensive repair services for malfunctioning air conditioning
              units, addressing issues such as refrigerant leaks, faulty
              compressors, and electrical problems, along with professional air
              installation of new air conditioning systems.
            </li>
          </ol>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-4 md:mx-40 mt-10">
        <div>
          <img src="./pro-3.jpg" alt="" className="h-auto object-cover" />
        </div>
        <div>
          <img src="./pro-4.jpg" alt="" className="h-auto object-cover" />
        </div>
        <div>
          <img src="./pro-5.jpg" alt="" className="h-auto object-cover" />
        </div>
      </div>

      <div className="mx-4 md:mx-40 mt-10 mb-24">
        <p className="text-3xl font-bold">Final Result</p>
        <p className="text-gray-500 mt-3">
          Full system setup, ductwork connection, thermostat integration, and a
          thorough system test to ensure everything is working perfectly.
        </p>
        <p className="text-gray-500 mt-1">
          Regular maintenance includes filter replacement, coil cleaning,
          lubrication of moving parts, system calibration, and a complete system
          inspection. A thorough tune-up service designed to enhance the
          performance of your air conditioner and ensure it operates at peak
          efficiency during the hottest months.
        </p>
      </div>
    </div>
  );
};

export default ProjectDetail;
