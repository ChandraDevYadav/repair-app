import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../src/App.css";
import HeroCom from "./HeroCom";
import { ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const AppendDots = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div className="bg-gray-300 rounded-lg p-3">
        <ul className="m-0"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-8 h-8 px-3 text-white border border-white rounded-full
         slick-dot ${i === 0 ? "slick-active" : ""}`} // This will add 'slick-active' to the first dot for testing
      >
        {i + 1}
      </div>
    ),
  };

  return (
    <div className="mx-2">
      <Slider {...settings} >
        <div className="h-[51rem] flex items-center justify-center">
          <div
            className="grid grid-cols-2 h-[51rem]"
            style={{ backgroundImage: `url('./hero_bg_1.jpg')` }}
          >
            <div>
              <div className="ml-[7rem]">
                <p className="text-2xl text-orange-500 mt-[11rem] font-medium">
                  Repairing Services
                </p>
                <h1 className="text-8xl font-bold text-white mt-6">
                  Keeping You Cool All Year Round
                </h1>
                <p className="text-xl text-white mt-8">
                  Common signs include unusual noises, reduced airflow, uneven
                  cooling strang odors, and higher energy bills
                </p>
                <div className="flex items-center gap-6">
                  <Link to='/about' className="flex bg-orange-600 text-white font-semibold text-lg px-10 py-4 rounded-lg mt-6">
                    READ MORE <ArrowRight />
                  </Link>

                  <AlertDialog>
                    <AlertDialogTrigger>
                      <img
                        src="./play-button.png"
                        alt="Play Video"
                        className="w-16 h-16 mt-5 play-button"
                      />
                    </AlertDialogTrigger>
                    <AlertDialogContent className="w-screen max-w-full h-screen">
                      {/* Icons at the top */}
                      <div className="flex justify-between items-center mb-3">
                        {/* Left-side icons (Share and Watch Later) */}
                        <div className="flex space-x-7">
                          <button className="flex flex-col items-center">
                            <img
                              src="./clock.png"
                              alt="Watch Later"
                              className="w-8 h-8"
                            />
                            <p>Watch Later</p>
                          </button>
                          <button className="flex flex-col items-center">
                            <img
                              src="./share.png"
                              alt="Share"
                              className="w-7 h-7"
                            />
                            <p className="mt-1">Share</p>
                          </button>
                        </div>

                        {/* Close icon */}
                        <AlertDialogCancel>
                          <button>
                            <img
                              src="./close.png"
                              alt="Close"
                              className="w-6 h-6"
                            />
                          </button>
                        </AlertDialogCancel>
                      </div>

                      <div className="w-full aspect-w-16 aspect-h-9">
                        {/* YouTube video embed */}
                        <iframe
                          width="100%"
                          height="750"
                          src="https://www.youtube.com/shorts/ZI2UakMHqSM" 
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </AlertDialogContent>
                  </AlertDialog>

                  <p className="text-white text-xl font-semibold mt-4">
                    Watch Our Story
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src="./hero_img_1.png" alt="" />
            </div>
          </div>
        </div>
        <div className="h-64 flex items-center justify-center">
          <div
            className="grid grid-cols-2 h-[51rem]"
            style={{ backgroundImage: `url('./hero_bg_2.jpg')` }}
          >
            <div>
              <div className="ml-[7rem]">
                <p className="text-2xl text-orange-500 mt-[11rem] font-medium">
                  Repairing Services
                </p>
                <h1 className="text-8xl font-bold text-white mt-6">
                  Fast & Reliable AC Fixes Hub{" "}
                </h1>
                <p className="text-xl text-white mt-8">
                  Common signs of AC problems include unusual noises,reduced
                  airflow, uneven cooling, strang odors, and unexpectedly higher
                  energy bills.
                </p>
                <div className="flex items-center gap-6">
                  <Button className="bg-orange-600 text-white font-semibold text-lg px-10 py-8 mt-6">
                    READ MORE <ArrowRight />
                  </Button>

                  <AlertDialog>
                    <AlertDialogTrigger>
                      <img
                        src="./play-button.png"
                        alt="Play Video"
                        className="w-16 h-16 mt-5 play-button"
                      />
                    </AlertDialogTrigger>
                    <AlertDialogContent className="w-screen max-w-full h-screen">
                      {/* Icons at the top */}
                      <div className="flex justify-between items-center mb-3">
                        {/* Left-side icons (Share and Watch Later) */}
                        <div className="flex space-x-7">
                          <button className="flex flex-col items-center">
                            <img
                              src="./clock.png"
                              alt="Watch Later"
                              className="w-8 h-8"
                            />
                            <p>Watch Later</p>
                          </button>
                          <button className="flex flex-col items-center">
                            <img
                              src="./share.png"
                              alt="Share"
                              className="w-7 h-7"
                            />
                            <p className="mt-1">Share</p>
                          </button>
                        </div>

                        {/* Close icon */}
                        <AlertDialogCancel>
                          <button>
                            <img
                              src="./close.png"
                              alt="Close"
                              className="w-6 h-6"
                            />
                          </button>
                        </AlertDialogCancel>
                      </div>

                      <div className="w-full aspect-w-16 aspect-h-9">
                        {/* YouTube video embed */}
                        <iframe
                          width="100%"
                          height="750"
                          src="https://www.youtube.com/shorts/ZI2UakMHqSM" 
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </AlertDialogContent>
                  </AlertDialog>

                  <p className="text-white text-xl font-semibold mt-4">
                    Watch Our Story
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src="./hero_img_2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="h-64 flex items-center justify-center">
          <div
            className="grid grid-cols-2 h-[51rem]"
            style={{ backgroundImage: `url('./hero_bg_3.jpg')` }}
          >
            <div>
              <div className="ml-[7rem]">
                <p className="text-2xl text-orange-500 mt-[11rem] font-medium">
                  Repairing Services
                </p>
                <h1 className="text-8xl font-bold text-white mt-6">
                  Expert Cooling Solutions
                </h1>
                <p className="text-xl text-white mt-8">
                  Watch for unusual noises, reduced airflow, uneven cooling,
                  strang ordors, and higher energy bills as common signs of AC
                  issues.
                </p>
                <div className="flex items-center gap-6">
                  <Button className="bg-orange-600 text-white font-semibold text-lg px-10 py-8 mt-6">
                    READ MORE <ArrowRight />
                  </Button>

                  <AlertDialog>
                    <AlertDialogTrigger>
                      <img
                        src="./play-button.png"
                        alt="Play Video"
                        className="w-16 h-16 mt-5 play-button"
                      />
                    </AlertDialogTrigger>
                    <AlertDialogContent className="w-screen max-w-full h-screen">
                      {/* Icons at the top */}
                      <div className="flex justify-between items-center mb-3">
                        {/* Left-side icons (Share and Watch Later) */}
                        <div className="flex space-x-7">
                          <button className="flex flex-col items-center">
                            <img
                              src="./clock.png"
                              alt="Watch Later"
                              className="w-8 h-8"
                            />
                            <p>Watch Later</p>
                          </button>
                          <button className="flex flex-col items-center">
                            <img
                              src="./share.png"
                              alt="Share"
                              className="w-7 h-7"
                            />
                            <p className="mt-1">Share</p>
                          </button>
                        </div>

                        {/* Close icon */}
                        <AlertDialogCancel>
                          <button>
                            <img
                              src="./close.png"
                              alt="Close"
                              className="w-6 h-6"
                            />
                          </button>
                        </AlertDialogCancel>
                      </div>

                      <div className="w-full aspect-w-16 aspect-h-9">
                        {/* YouTube video embed */}
                        <iframe
                          width="100%"
                          height="750"
                          src="https://www.youtube.com/shorts/ZI2UakMHqSM" 
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </AlertDialogContent>
                  </AlertDialog>

                  <p className="text-white text-xl font-semibold mt-4">
                    Watch Our Story
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src="./hero_img_3.png" alt="" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default AppendDots;
