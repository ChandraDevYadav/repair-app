import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const Frequently = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 mb-32">
      <div className="col-span-1 md:col-span-2">
        <div className="relative ml-16 md:ml-24">
          <img
            src="./faq_img_1.jpg"
            alt=""
            className="w-[20rem] h-[20rem] md:w-[23rem] md:h-[25rem] -z-30"
          />
          <div className="bg-orange-500 -z-20 w-[14rem] h-[14rem] md:w-[16rem] md:h-[17.5rem] absolute top-40 -left-10 rounded-tl-3xl"></div>
          <img 
            src="./faq_img_2.jpg" 
            alt="" 
            className="absolute w-[14rem] h-[12rem] md:w-[16rem] md:h-[15rem] top-[15rem] left-[8rem] md:left-[13rem] rounded-br-2xl rounded-tl-md border-4 border-white" 
          />
          <div className="bg-orange-500 p-4 absolute top-[6.5rem] left-[14rem] md:left-[19rem]">
            <h1 className="text-3xl md:text-4xl font-bold text-white">25+</h1>
            <p className="text-center text-white font-medium">Years<br />Experience</p>
          </div>
        </div>
      </div>
      <div className="col-span-1 md:col-span-3">
        <div className="mt-[10rem] md:mt-0 mx-4 md:mx-20">
          <p className="text-xl font-medium text-orange-500 flex gap-3 items-center">
            <img
              src="./ac.png"
              className="w-6 h-6 animate-rotate"
              alt="Rotating Image"
            />
            FAQ
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mt-5 text-[#010f34]">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 md:mt-8 md:mr-24">
            Air conditioning system is best for your home. Our FrostFree
            Consultation provides expert guidance tailored to your
            specific needs.
          </p>
        </div>
        <div className="mx-4 md:mx-20 mt-4 md:mt-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What should I do in an electrical emergency?
              </AccordionTrigger>
              <AccordionContent>
                Signs that you may need to rewire your home include frequent electrical problems, such as blown fuses or tripped breakers, outdated wiring, discolored outlets, or a burning smell near outlets or switches.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What are the signs that I need to rewire my home?</AccordionTrigger>
              <AccordionContent>
                Signs that you may need to rewire your home include frequent electrical problems, such as blown fuses or tripped breakers, outdated wiring, discolored outlets, or a burning smell near outlets or switches.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What should I do in an electrical emergency?</AccordionTrigger>
              <AccordionContent>
                Signs that you may need to rewire your home include frequent electrical problems, such as blown fuses or tripped breakers, outdated wiring, discolored outlets, or a burning smell near outlets or switches.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Frequently;
