import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Blog = () => {
  return (
    <div>
      {/* Page Heading */}
      <div
        className="py-20 md:py-40 text-white"
        style={{
          backgroundImage: `url('./page_heading_1.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-center text-3xl md:text-5xl font-bold">Blog</h1>
        <div className="flex justify-center items-center gap-1 font-bold text-xs md:text-sm my-3 md:my-5">
          <Link to="/" className="text-center">
            HOME
          </Link>
          <img src="./db.png" alt="" className="w-3 md:w-5 h-3 md:h-5" />
          <p>Blog</p>
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-5 mx-5 md:mx-40">
        <div className="col-span-4">
          {/* Blog Post 1 */}
          <div className="mt-10 shadow-lg pb-6 mb-5">
            <img
              src="./pro-7.jpg"
              alt=""
              className="rounded-xl w-full h-[15rem] md:h-[23rem] transform transition ease-in duration-500 hover:scale-95"
            />
            <div className="flex gap-4 items-center p-5 md:p-7">
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
            <div className="ml-5 md:ml-7 mb-6">
              <p className="text-xl md:text-3xl font-semibold">
                Keeping You Cool and Comfortable
              </p>
              <p className="text-gray-500 mt-3 md:mt-5">
                Energy-efficient upgrades to your existing air conditioning
                system, including the installation of smart thermostats,
                high-efficiency filters, and advanced cooling technologies.
              </p>
              <Button className="border bg-transparent text-black mt-5">
                READ MORE
              </Button>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="mt-10 shadow-lg pb-6 mb-5">
            <img
              src="./pro-8.jpg"
              alt=""
              className="rounded-xl w-full h-[15rem] md:h-[23rem] transform transition ease-in duration-500 hover:scale-95"
            />
            <div className="flex gap-4 items-center p-5 md:p-7">
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
            <div className="ml-5 md:ml-7 mb-6">
              <p className="text-xl md:text-3xl font-semibold">
                Keeping You Cool and Comfortable
              </p>
              <p className="text-gray-500 mt-3 md:mt-5">
                Energy-efficient upgrades to your existing air conditioning
                system, including the installation of smart thermostats,
                high-efficiency filters, and advanced cooling technologies.
              </p>
              <Button className="border bg-transparent text-black mt-5">
                READ MORE
              </Button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-span-2">
          <div className="p-4 md:p-8 rounded-xl border my-4 mt-10 bg-[#ecf1f5]">
            <div className="relative flex items-center">
              <Input
                type="email"
                placeholder="Enter Keyword"
                className="w-full"
              />
              <img
                src="./search.png"
                className="w-9 h-9 bg-orange-500 p-2 absolute right-2 rounded-lg"
                alt="Search"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="bg-[#ff550008] p-4 md:p-8 rounded-xl border mt-10 pb-10">
            <p className="text-xl md:text-2xl font-bold">Categories</p>
            <div className="w-full bg-gray-200 rounded-full h-[0.3rem] dark:bg-gray-700 mt-4">
              <div
                className="bg-orange-500 h-[0.3rem] rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
            {/* Category items */}
            <div className="mt-6 space-y-6">
              {["BreezeCheck Maintenance", "ChillMax Cleaning", "CoolFlow Inspection", "FrostWave Duct Cleaning", "CoolPro Installation", "RapidRepair Services", "Emergency CoolFix"].map(
                (category, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b pb-4"
                  >
                    <div className="flex justify-center items-center gap-3">
                      <img src="fo.png" alt="" className="w-4 h-4" />
                      <p className="text-gray-500 font-medium text-sm">
                        {category}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
