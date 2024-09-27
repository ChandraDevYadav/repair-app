import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    title: "Project Manager",
    image: "./team_member_1.png",
    contact: "(+977) 9805912060"
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "UI/UX Designer",
    image: "./team_member_2.png",
    contact: "(+977) 9805912060"
  },
  {
    id: 3,
    name: "Mike Johnson",
    title: "Full-Stack Developer",
    image: "./team_member_3.png",
    contact: "(+977) 9805912060"
  },
  {
    id: 4,
    name: "Sarah Brown",
    title: "Backend Engineer",
    image: "./team_member_4.png",
    contact: "(+977) 9805912060"
  },
  {
    id: 5,
    name: "Emily Wilson",
    title: "Marketing Specialist",
    image: "./team_member_5.jpg",
    contact: "(+977) 9805912060"
  },
];

const TeamSlider = () => {
  const sliderRef = useRef(null);
  const [hoveredMember, setHoveredMember] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative max-w-[110rem] mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <p className="flex gap-4 ml-6 text-xl text-orange-500 font-medium"><img src="./ac.png" className="w-6 h-6 animate-rotate" alt="Rotating Image" />Expert Team</p>
      <h2 className="text-5xl font-bold mb-8 ml-6 text-[#010f34]">Meet Our Team of Expert</h2>

      {/* Control Buttons */}
      <div className="absolute top-9 right-12 flex space-x-2 mt-2">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          <ArrowLeft/>
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          <ArrowRight/>
        </button>
      </div>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {teamMembers.map((member) => (
          <div key={member.id} className="p-4 relative">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
              <div
                className="relative inline-block"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto mb-4 rounded-full w-44 h-44 object-cover relative"
                />
                {/* Share Icon */}
                <img
                  src="./share1.png"
                  alt="share"
                  className="w-8 h-8 absolute top-40 right-[4.5rem] cursor-pointer"
                />

                {/* Social Media Icons */}
                {hoveredMember === member.id && (
                  <div className="absolute inset-0 flex justify-center items-center">
                    <div className="relative w-full h-full">
                      {/* Social icons in a circular layout */}
                      <a
                        href="#"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full z-10"
                        style={{ top: "13%", left: "84%" }}
                      >
                        <Facebook className="text-lg" />
                      </a>
                      <a
                        href="#"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-pink-600 text-white p-2 rounded-full z-10"
                        style={{ top: "0%", left: "55%" }}
                      >
                        <Instagram className="text-lg" />
                      </a>
                      <a
                        href="#"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-blue-400 text-white p-2 rounded-full z-10"
                        style={{ top: "70%", left: "90%" }}
                      >
                        <Twitter className="text-lg" />
                      </a>
                      <a
                        href="#"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-2 rounded-full z-10"
                        style={{ top: "40%", left: "100%" }}
                      >
                        <Linkedin className="text-lg" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <h3 className="text-2xl font-bold">{member.name}</h3>
              <p className="text-gray-600 text-md mb-4">{member.title}</p>
              <hr/> <hr />
              <h1 className="text-xl font-semibold mt-4">{member.contact}</h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSlider;
