import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PricePlan = () => {
  return (
    <div className="my-12">
      <div className="mx-20">
        <p className="text-xl font-medium text-orange-500 flex gap-3 items-center">
          <img
            src="./ac.png"
            className="w-6 h-6 animate-rotate"
            alt="Rotating Image"
          />
          OUR PRICE PLAN
        </p>
        <h1 className="text-5xl font-bold my-5 text-[#010f34]">
          Where Comfort Meets Efficiency
        </h1>
      </div>
      <div className="flex justify-end">
        <Tabs defaultValue="monthly" className="w-full">
          <TabsList className="flex justify-start ml-12 w-[15.3rem]">
            <TabsTrigger value="monthly" className="bg-orange-500 text-white px-8">Monthly</TabsTrigger>
            <TabsTrigger value="yearly" className="bg-orange-500 text-white px-10">Yearly</TabsTrigger>
          </TabsList>
          <TabsContent value="monthly" className='mt-10'>
            <div className="grid grid-cols-3 gap-x-16">
              <div className="flex justify-center shadow-lg border mx-12 py-10" >
                <div>
                <div className="flex items-center gap-3 my-4">
                <img src="./plan11.png" alt="" className="w-24 h-20"/>
                <p className="text-xl font-bold underline">Basic Plan</p>
                </div>
                <img src="./price_shape.svg" alt="" className="absolute left-[300px]" />
                <ul className="leading-loose">
                  <li className="flex gap-3 items-center">Refrigerant leak detection & repair</li>
                  <li className="flex gap-3 items-center">Thermostat replacement</li>
                  <li className="flex gap-3 items-center">Clean condenser coil</li>
                  <li className="flex gap-3 items-center">Air filter replacement</li>
                  <li className="flex gap-3 items-center">Clean condenser coil</li>
                  <li className="flex gap-3 items-center">AC fan replacement</li>
                </ul>
                </div>
              </div>
              <div className="flex justify-center shadow-lg mx-12 py-10 border">
              <div>
              <div className="flex items-center gap-3 my-4">
                <img src="./plan22.png" alt="" className="w-24 h-20"/>
                <p className="text-xl font-bold underline">Standard Plan</p>
                </div>
              <img src="./price_shape.svg" alt="" className="absolute left-[870px]" />
                <ul className="leading-loose">
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />Refrigerant leak detection & repair</li>
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />Thermostat replacement</li>
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />Clean condenser coil</li>
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />Air filter replacement</li>
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />Clean condenser coil</li>
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />AC fan replacement</li>
                </ul>
              </div>
              </div>
              <div className="flex justify-center shadow-lg mx-12 py-10 border">
              <div>
              <div className="flex items-center gap-3 my-4">
                <img src="./plan33.png" alt="" className="w-24 h-20"/>
                <p className="text-xl font-bold underline">Premium Plan</p>
                </div>
              <img src="./price_shape.svg" alt="" className="absolute right-[50px]" />
                <ul className="leading-loose">
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />Refrigerant leak detection & repair</li>
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />Thermostat replacement</li>
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />Clean condenser coil</li>
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />Air filter replacement</li>
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />Clean condenser coil</li>
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />AC fan replacement</li>
                </ul>
              </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="yearly" className='mt-10'>
          <div className="grid grid-cols-3 gap-x-16">
              <div className="flex justify-center shadow-lg mx-12 py-10 border" >
                <div>
                <div className="flex items-center gap-3 my-4">
                <img src="./plan111.png" alt="" className="w-24 h-20"/>
                <p className="text-xl font-bold underline">Basic Plan</p>
                </div>
                <img src="./price_shape.svg" alt="" className="absolute left-[300px]" />
                <ul className="leading-loose">
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />Refrigerant leak detection & repair</li>
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />Thermostat replacement</li>
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />Clean condenser coil</li>
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />Air filter replacement</li>
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />Clean condenser coil</li>
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />AC fan replacement</li>
                </ul>
                </div>
              </div>
              <div className="flex justify-center shadow-lg mx-12 py-10 border">
              <div>
              <div className="flex items-center gap-3 my-4">
                <img src="./plan222.png" alt="" className="w-24 h-20"/>
                <p className="text-xl font-bold underline">Standard Plan</p>
                </div>
              <img src="./price_shape.svg" alt="" className="absolute left-[870px]" />
                <ul className="leading-loose">
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />Refrigerant leak detection & repair</li>
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />Thermostat replacement</li>
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />Clean condenser coil</li>
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />Air filter replacement</li>
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />Clean condenser coil</li>
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />AC fan replacement</li>
                </ul>
              </div>
              </div>
              <div className="flex justify-center shadow-lg mx-12 py-10 border">
              <div>
              <div className="flex items-center gap-3 my-4">
                <img src="./plan333.png" alt="" className="w-24 h-20"/>
                <p className="text-xl font-bold underline">Premium Plan</p>
                </div>
              <img src="./price_shape.svg" alt="" className="absolute right-[50px]" />
                <ul className="leading-loose">
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />Refrigerant leak detection & repair</li>
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />Thermostat replacement</li>
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />Clean condenser coil</li>
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />Air filter replacement</li>
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />Clean condenser coil</li>
                  <li className="flex gap-3 items-center"><img src="./tick.svg" alt="" className="w-4 h-4" />AC fan replacement</li>
                </ul>
              </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PricePlan;
