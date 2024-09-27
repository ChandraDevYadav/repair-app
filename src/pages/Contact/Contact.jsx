import React from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

const Contact = () => {
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
        <h1 className="text-center text-5xl font-bold">Contact</h1>
        <div className="flex justify-center items-center gap-1 font-bold text-sm my-5">
          <Link to="/" className="text-center">
            HOME
          </Link>
          <img src="./db.png" alt="" className="w-5 h-5" />
          <p>CONTACT</p>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-10 mx-40">
        <div className="col-span-3">
          <div className="px-12 mt-12">
            <p className="text-4xl font-bold">Contact Information</p>
            <p className="text-sm text-gray-500 pr-10 my-6">
              Our QuickCool Installation service provides fast and efficient
              installation of new air conditioning units. Our certified
              technicians will ensure your system is air an installed correctly
              and safely,
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex gap-4 border px-2 py-2 shadow-lg">
                <div className="bg-gray-200 flex justify-center items-center px-3 rounded-lg">
                  <img src="./location.png" alt="" className="w-14 h-12" />
                </div>
                <div>
                  <p className="text-lg font-semibold">Our Address</p>
                  <p className="text-gray-500 text-sm font-medium">6391 Elgin St. Celina,
                  Delaware 10299</p>
                </div>
              </div>
              <div className="flex gap-4 border px-2 py-2 shadow-lg">
                <div className="bg-gray-200 flex justify-center items-center px-3 rounded-lg">
                  <img src="./phone-call.png" alt="" className="w-14 h-12" />
                </div>
                <div>
                  <p className="text-lg font-semibold">Phone Number</p>
                  <p className="text-gray-500 text-sm font-medium">+(163)-5565-0697
                  (+578) 587 89168</p>
                </div>
              </div>
              <div className="flex gap-4 border px-2 py-2 shadow-lg">
                <div className="bg-gray-200 flex justify-center items-center px-3 rounded-lg">
                  <img src="./envelope.png" alt="" className="w-14 h-12" />
                </div>
                <div>
                  <p className="text-lg font-semibold">Email Address</p>
                  <p className="text-gray-500 text-sm font-medium">info@gmail.com
                  demo@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-4 border px-2 py-2 shadow-lg">
                <div className="bg-gray-200 flex justify-center items-center px-3 rounded-lg">
                  <img src="./clock1.png" alt="" className="w-14 h-12" />
                </div>
                <div>
                  <p className="text-lg font-semibold">Working Time</p>
                  <p className="text-gray-500 text-sm font-medium">Work Time: Sun - Fri
                  10AM - 6PM</p>
                </div>
              </div>
            </div>
            <div className="mt-14">
            <p className="text-2xl font-bold">Follow The Social Media:</p>
            <p className="text-gray-500 text-sm mt-2">Ensure your AC system is ready for the hottest days with our Comfort Check Tune-Up</p>
            <div className="flex gap-3 mt-5">
              <div className="bg-gray-300 p-2 rounded-lg hover:bg-orange-500 hover:text-white"><FacebookIcon className="w-5"/></div>
              <div className="bg-gray-300 p-2 rounded-lg hover:bg-orange-500 hover:text-white"><TwitterIcon className="w-5"/></div>
              <div className="bg-gray-300 p-2 rounded-lg hover:bg-orange-500 hover:text-white"><LinkedinIcon className="w-5"/></div>
              <div className="bg-gray-300 p-2 rounded-lg hover:bg-orange-500 hover:text-white"><InstagramIcon className="w-5"/></div>
            </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="shadow-lg mt-14 border rounded-md px-7 py-10 mb-10">
            <p className="text-center text-3xl font-bold mb-8">
              Book An Appointment
            </p>
            <div className="px-3">
              <Input
                type="text"
                placeholder="Your Name"
                className="bg-gray-200"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-gray-200 mt-4"
              />
              <Input
                type="text"
                placeholder="Select Subjects"
                className="mt-4 bg-gray-200"
              />
              <Textarea
                placeholder="Write Message..."
                className="bg-gray-200 mt-4 h-[10rem]"
              />
              <Button className="bg-orange-500 text-white w-full mt-4 font-bold text-sm">
                APPOINTMENT NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-96">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.145206956602!2d87.26644861510894!3d26.454508983318454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6a44ec5bdc9b%3A0x56a818ed7050708!2sBiratnagar%2C%20Nepal!5e0!3m2!1sen!2snp!4v1695823993728!5m2!1sen!2snp"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    title="Google Map of Biratnagar"
  ></iframe>
</div>
    </div>
  );
};

export default Contact;
