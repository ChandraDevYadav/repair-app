import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Plus,
  Twitter,
  Youtube,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gradient-to-r from-orange-500 to-white mx-2">
      <div className="flex justify-between items-center px-8 md:px-20 pt-2 bg-orange-500 py-3 rounded-br-[3.5rem] mr-12">
        <p className="hidden md:block text-md text-white ml-12">
          Welcome to Our Chan Dra Repairing Service
        </p>
        <div className="flex items-center gap-5">
          <h1 className="text-white text-sm md:text-md font-medium">Follow Us On :</h1>
          <Instagram className="text-white w-4" />
          <Facebook className="text-white w-4" />
          <Twitter className="text-white w-4" />
          <Youtube className="text-white w-4" />
        </div>
      </div>
      <div className="flex justify-around items-center px-10 py-5 rounded-tl-[4.5rem] bg-white ml-12">
        <div className="flex items-center">
          <Link to='/'><img src="./slack.png" alt="" className="w-8 md:w-12 h-8 md:h-12" /></Link>
          <div className="px-4">
            <h1 className="text-xl md:text-2xl font-bold">Chan Dra Dev</h1>
            <p className="text-md text-orange-500 font-semibold">
              Repairing Services
            </p>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="flex gap-12">
            <Link to="/" className="text-md font-semibold">Home</Link>
            <Link to="/about" className="text-md font-semibold">About</Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-md font-semibold flex gap-2 items-center focus:outline-none focus:ring-0">
                Service <Plus className="w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[14rem] ml-32 mt-6 border-t-2 border-t-orange-500">
                <DropdownMenuItem className="text-md font-semibold py-3"><Link to='/services'>Service</Link></DropdownMenuItem>
                <DropdownMenuItem className="text-md font-semibold py-3"><Link to='/servicedetail'>Service Details</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-md font-semibold flex gap-2 items-center focus:outline-none focus:ring-0">
                Page <Plus className="w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[14rem] ml-32 mt-6 border-t-2 border-t-orange-500">
                <DropdownMenuItem className="text-md font-semibold py-3"><Link to='/team'>Team</Link></DropdownMenuItem>
                <DropdownMenuItem className="text-md font-semibold py-3"><Link to='/teamdetail'>Team Details</Link></DropdownMenuItem>
                <DropdownMenuItem className="text-md font-semibold py-3"><Link to='/project'>Project</Link></DropdownMenuItem>
                <DropdownMenuItem className="text-md font-semibold py-3"><Link to='/projectdetail'>Project Details</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-md font-semibold flex gap-2 items-center focus:outline-none focus:ring-0">
                Blog <Plus className="w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[14rem] ml-32 mt-6 border-t-2 border-t-orange-500">
                <DropdownMenuItem className="text-md font-semibold py-3"><Link to='/blog'>Blog</Link></DropdownMenuItem>
                <DropdownMenuItem className="text-md font-semibold py-3"><Link to='/blogdetail'>Blog Details</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <p className="text-md font-semibold"><Link to='/contact'>Contact</Link></p>
          </div>
        </div>

        {/* Toggle button for mobile view */}
        <div className="md:hidden">
  <button onClick={toggleMenu} className="text-sm font-semibold">
    {isOpen ? (
      <img src="./close.png" alt="Close Menu" className="w-6 h-6" />
    ) : (
      <img src="./menu.png" alt="Open Menu" className="w-8 h-8" />
    )}
  </button>
</div>

        {/* Mobile menu items */}
        {isOpen && (
          <div className="absolute top-[8rem] z-10 left-0 w-full bg-gray-300 shadow-md md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link to="/" className="text-sm font-semibold">Home</Link>
              <Link to="/about" className="text-sm font-semibold">About</Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-sm font-semibold flex gap-2 items-center focus:outline-none focus:ring-0">
                  Service <Plus className="w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-[14rem] border-t-2 border-t-orange-500">
                  <DropdownMenuItem className="text-sm font-semibold py-3"><Link to='/services'>Service</Link></DropdownMenuItem>
                  <DropdownMenuItem className="text-sm font-semibold py-3"><Link to='/servicedetail'>Service Details</Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-sm font-semibold flex gap-2 items-center focus:outline-none focus:ring-0">
                  Page <Plus className="w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-[14rem] border-t-2 border-t-orange-500">
                  <DropdownMenuItem className="text-sm font-semibold py-3"><Link to='/team'>Team</Link></DropdownMenuItem>
                  <DropdownMenuItem className="text-sm font-semibold py-3"><Link to='/teamdetail'>Team Details</Link></DropdownMenuItem>
                  <DropdownMenuItem className="text-sm font-semibold py-3"><Link to='/project'>Project</Link></DropdownMenuItem>
                  <DropdownMenuItem className="text-sm font-semibold py-3"><Link to='/projectdetail'>Project Details</Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-sm font-semibold flex gap-2 items-center focus:outline-none focus:ring-0">
                  Blog <Plus className="w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-[14rem] border-t-2 border-t-orange-500">
                  <DropdownMenuItem className="text-sm font-semibold py-3"><Link to='/blog'>Blog</Link></DropdownMenuItem>
                  <DropdownMenuItem className="text-sm font-semibold py-3"><Link to='/blogdetail'>Blog Details</Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link to='/contact' className="text-sm font-semibold">Contact</Link>
            </div>
          </div>
        )}

        <div className="hidden md:block">
          <Link to='/login' className="text-md px-6 py-2 rounded-lg text-white bg-orange-500 flex gap-2">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
