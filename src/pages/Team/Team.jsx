import React, { useState } from 'react'
import { ArrowLeft, ArrowRight, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from 'react-router-dom';


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
    {
      id: 5,
      name: "Bra Ham Dev",
      title: "Marketing Specialist",
      image: "./team_member_6.jpg",
      contact: "(+977) 9805912060"
    },
    {
      id: 5,
      name: "Chan Dra Dev",
      title: "Marketing Specialist",
      image: "./team_member_7.jpg",
      contact: "(+977) 9805912060"
    },
    {
      id: 5,
      name: "In Dra Dev",
      title: "Marketing Specialist",
      image: "./team_member_8.jpg",
      contact: "(+977) 9805912060"
    },
  ];

const Team = () => {
    // const sliderRef = useRef(null);
  const [hoveredMember, setHoveredMember] = useState(null);
  return (
    <div>
        <div className='py-40 text-white' style={{ backgroundImage: `url('./page_heading_1.jpg')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <h1 className='text-center text-5xl font-bold'>Team</h1>
      <div className='flex justify-center items-center gap-1 font-bold text-sm my-5'>
      <Link to='/' className='text-center'>HOME</Link>
      <img src="./db.png" alt="" className='w-5 h-5' />
      <p>TEAM</p>
      </div>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-4  gap-5 mx-6 md:mx-24 my-24">
        {teamMembers.map((member) => (
          <div key={member.id} className="p-4 relative ">
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-center relative border">
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
        </div>
    </div>
  )
}

export default Team