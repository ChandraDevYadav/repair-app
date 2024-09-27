import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PricePlan = () => {
  return (
    <div className="my-[16rem] md:my-12">
      <div className="mx-4 md:mx-20">
        <p className="text-xl font-medium text-orange-500 flex gap-3 items-center">
          <img
            src="./ac.png"
            className="w-6 h-6 animate-rotate"
            alt="Rotating Image"
          />
          OUR PRICE PLAN
        </p>
        <h1 className="text-3xl md:text-5xl font-bold my-5 text-[#010f34]">
          Where Comfort Meets Efficiency
        </h1>
      </div>
      <div className="flex justify-end">
        <Tabs defaultValue="monthly" className="w-full">
          <TabsList className="flex justify-start ml-0 md:ml-12 w-full">
            <TabsTrigger value="monthly" className="bg-orange-500 text-white px-4 md:px-8">Monthly</TabsTrigger>
            <TabsTrigger value="yearly" className="bg-orange-500 text-white px-4 md:px-10">Yearly</TabsTrigger>
          </TabsList>
          <TabsContent value="monthly" className='mt-10'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Basic Plan', 'Standard Plan', 'Premium Plan'].map((plan, index) => (
                <div key={index} className="flex justify-center shadow-lg border mx-4 md:mx-0 py-10">
                  <div className="relative">
                    <div className="flex items-center gap-3 my-4">
                      <img src={`./plan${index + 1}.png`} alt="" className="w-24 h-20"/>
                      <p className="text-xl font-bold underline">{plan}</p>
                    </div>
                    <img src="./price_shape.svg" alt="" className="absolute left-1/2 transform -translate-x-1/2 top-16" />
                    <ul className="leading-loose">
                      {['Refrigerant leak detection & repair', 'Thermostat replacement', 'Clean condenser coil', 'Air filter replacement', 'AC fan replacement'].map((item, idx) => (
                        <li key={idx} className="flex gap-3 items-center">
                          <img src="./tick.svg" alt="" className="w-4 h-4" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="yearly" className='mt-10'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Basic Plan', 'Standard Plan', 'Premium Plan'].map((plan, index) => (
                <div key={index} className="flex justify-center shadow-lg border mx-4 md:mx-0 py-10">
                  <div className="relative">
                    <div className="flex items-center gap-3 my-4">
                      <img src={`./plan${index + 1}1.png`} alt="" className="w-24 h-20"/>
                      <p className="text-xl font-bold underline">{plan}</p>
                    </div>
                    <img src="./price_shape.svg" alt="" className="absolute left-1/2 transform -translate-x-1/2 top-16" />
                    <ul className="leading-loose">
                      {['Refrigerant leak detection & repair', 'Thermostat replacement', 'Clean condenser coil', 'Air filter replacement', 'AC fan replacement'].map((item, idx) => (
                        <li key={idx} className="flex gap-3 items-center">
                          <img src="./tick.svg" alt="" className="w-4 h-4" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PricePlan;
