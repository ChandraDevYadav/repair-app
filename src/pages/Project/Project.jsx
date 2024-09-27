import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react";

const projectData = [
  {
    name: "Air Duct Cleaning",
    description: "Thorough cleaning of air ducts to remove dust, debris, and allergens for better air quality.",
    image: "./pro-1.jpg" // replace with actual image URL
  },
  {
    name: "Carpet Cleaning",
    description: "Professional carpet cleaning to remove stains, dirt, and allergens, restoring freshness.",
    image: "./pro-2.jpg" // replace with actual image URL
  },
  {
    name: "Window Washing",
    description: "Expert window washing services for crystal clear windows, inside and out.",
    image: "./pro-3.jpg" // replace with actual image URL
  },
  {
    name: "Office Cleaning",
    description: "Comprehensive office cleaning services to ensure a clean and productive workspace.",
    image: "./pro-4.jpg" // replace with actual image URL
  },
  {
    name: "Gutter Cleaning",
    description: "Efficient gutter cleaning to prevent blockages and water damage to your home.",
    image: "./pro-5.jpg" // replace with actual image URL
  },
  {
    name: "Tile & Grout Cleaning",
    description: "Deep cleaning of tile and grout to restore surfaces and eliminate stubborn stains.",
    image: "./pro-6.jpg" // replace with actual image URL
  },
  {
    name: "Pressure Washing",
    description: "High-pressure washing to remove dirt, grime, and mildew from outdoor surfaces.",
    image: "./pro-7.jpg" // replace with actual image URL
  },
  {
    name: "House Cleaning",
    description: "Full-service house cleaning tailored to your specific needs for a spotless home.",
    image: "./pro-8.jpg" // replace with actual image URL
  },
  {
    name: "Post-Construction Cleaning",
    description: "Thorough cleaning after construction to remove dust, debris, and make the space ready for use.",
    image: "./pro-9.jpg" // replace with actual image URL
  },
  {
    name: "Move-In/Out Cleaning",
    description: "Detailed cleaning services when moving in or out to ensure your space is spotless.",
    image: "./pro-10.jpg" // replace with actual image URL
  },
  {
    name: "Roof Repair",
    description: "Professional roof repair services to fix leaks, damaged shingles, and extend roof life.",
    image: "pro-11.jpg" // replace with actual image URL
  },
  {
    name: "Flooring Installation",
    description: "Expert installation of hardwood, laminate, tile, and carpet flooring for your home.",
    image: "pro-12.jpg" // replace with actual image URL
  },
];

const Project = () => {

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
        <h1 className="text-center text-5xl font-bold">Project</h1>
        <div className="flex justify-center items-center gap-1 font-bold text-sm my-5">
          <Link to="/" className="text-center">
            HOME
          </Link>
          <img src="./db.png" alt="" className="w-5 h-5" />
          <p>Project</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center my-12 mx-24">
      {projectData.map((project, index) => (
        <div className="flex justify-center items-center">
          <div key={index} className="relative w-72 h-96 border rounded-lg overflow-hidden shadow-lg">
          {/* Image */}
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          {/* Overlay with project details */}
          <div className="absolute inset-0 bg-orange-600 rounded-lg bg-opacity-80 opacity-0 hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity duration-300 mx-4 my-4 p-3">
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p className="text-center text-sm">{project.description}</p>
            <div className="flex justify-center items-center mt-4">
              <Button className='bg-white text-black hover:bg-black hover:text-white rounded-tr-full rounded-br-full'><Link to='/projectdetail'><ArrowRight/></Link></Button>
            </div>
          </div>
        </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Project;
