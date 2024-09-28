import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../src/App.css";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
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
         slick-dot ${i === 0 ? "slick-active" : ""}`}
      >
        {i + 1}
      </div>
    ),
  };

  return (
    <div className="mx-2">
      <Slider {...settings}>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div
            className="grid grid-cols-1 md:grid-cols-2 h-full"
            style={{ backgroundImage: `url('./hero_bg_1.jpg')` }}
          >
            <div className="flex flex-col justify-center ml-4 md:ml-[7rem] p-4">
              <p className="text-2xl text-orange-500 mt-[5rem] font-medium">
                Repairing Services
              </p>
              <h1 className="text-2xl md:text-8xl font-bold text-white mt-6">
                Keeping You Cool All Year Round
              </h1>
              <p className="text-md md:text-xl text-white mt-4">
                Common signs include unusual noises, reduced airflow, uneven
                cooling, strange odors, and higher energy bills.
              </p>
              <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
                <Link to="/about" className="flex bg-orange-600 text-white font-semibold text-lg px-8 py-3 rounded-lg">
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
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex space-x-4">
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

                <p className="text-white text-lg md:text-xl font-semibold mt-4">
                  Watch Our Story
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="./hero_img_1.png" alt="" className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* Repeat similar structure for other slides */}
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div
            className="grid grid-cols-1 md:grid-cols-2 h-full"
            style={{ backgroundImage: `url('./hero_bg_2.jpg')` }}
          >
            <div className="flex flex-col justify-center ml-4 md:ml-[7rem] p-4">
              <p className="text-2xl text-orange-500 mt-[5rem] font-medium">
                Repairing Services
              </p>
              <h1 className="text-4xl md:text-8xl font-bold text-white mt-6">
                Fast & Reliable AC Fixes Hub
              </h1>
              <p className="text-lg md:text-xl text-white mt-4">
                Common signs of AC problems include unusual noises, reduced
                airflow, uneven cooling, strange odors, and unexpectedly higher
                energy bills.
              </p>
              <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
                <Button className="bg-orange-600 text-white font-semibold text-lg px-8 py-3">
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
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex space-x-4">
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

                <p className="text-white text-lg md:text-xl font-semibold mt-4">
                  Watch Our Story
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="./hero_img_2.png" alt="" className="w-full h-auto" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center">
          <div
            className="grid grid-cols-1 md:grid-cols-2 h-full"
            style={{ backgroundImage: `url('./hero_bg_3.jpg')` }}
          >
            <div className="flex flex-col justify-center ml-4 md:ml-[7rem] p-4">
              <p className="text-2xl text-orange-500 mt-[5rem] font-medium">
                Repairing Services
              </p>
              <h1 className="text-4xl md:text-8xl font-bold text-white mt-6">
                Expert Cooling Solutions
              </h1>
              <p className="text-lg md:text-xl text-white mt-4">
                Watch for unusual noises, reduced airflow, uneven cooling,
                strange odors, and high energy bills.
              </p>
              <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
                <Link to="/about" className="flex bg-orange-600 text-white font-semibold text-lg px-8 py-3 rounded-lg">
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
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex space-x-4">
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

                <p className="text-white text-lg md:text-xl font-semibold mt-4">
                  Watch Our Story
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="./hero_img_3.png" alt="" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default AppendDots;
