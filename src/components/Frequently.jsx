import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Frequently = () => {
  return (
    <div className="grid grid-cols-5 mb-32">
      <div className="col-span-2">
        <div className="ml-44 relative">
          <img
            src="./faq_img_1.jpg"
            alt=""
            className="w-[23rem] h-[25rem] -z-30"
          />
          <div className="bg-orange-500 -z-20 w-[16rem] h-[17.5rem] absolute top-40 -left-11 rounded-tl-3xl"></div>
          <img src="./faq_img_2.jpg" alt="" className="absolute w-[16rem] h-[15rem] top-[15rem] left-[13rem] rounded-br-2xl rounded-tl-md border-4 border-white"/>
          <div className="bg-orange-500 p-6 absolute top-[6.5rem] left-[19rem]">
            <h1 className="text-4xl font-bold text-white">25+</h1>
            <p className="text-center text-white font-medium">Years<br />Experince</p>
          </div>
          
        </div>
      </div>
      <div className="col-span-3">
        <div className="mx-20">
          <p className="text-xl font-medium text-orange-500 flex gap-3 items-center">
            <img
              src="./ac.png"
              className="w-6 h-6 animate-rotate"
              alt="Rotating Image"
            />
            FAQ
          </p>
          <h1 className="text-5xl font-bold mt-5 text-[#010f34]">
          Frequently Asked Questions
          </h1>
          <p className="mt-8 mr-24">
            Air conditioning system is best for your home Our FrostFree
            Consultation air a service provides expert guidance tailored to your
            specific needs.
          </p>
        </div>
        <div className="mx-20 mt-8">
        <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
        What should I do in an electrical emergency?</AccordionTrigger>
        <AccordionContent>
        Signs that you may need to rewire your home include frequent electrical problems, such as blown fuses or tripped breakers, outdated wiring kinds discolored outlets, or a burning smell near outlets or switches.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What are the signs that I need to rewire my home?</AccordionTrigger>
        <AccordionContent>
        Signs that you may need to rewire your home include frequent electrical problems, such as blown fuses or tripped breakers, outdated wiring kinds discolored outlets, or a burning smell near outlets or switches.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What should I do in an electrical emergency?</AccordionTrigger>
        <AccordionContent>
        Signs that you may need to rewire your home include frequent electrical problems, such as blown fuses or tripped breakers, outdated wiring kinds discolored outlets, or a burning smell near outlets or switches.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Frequently;
