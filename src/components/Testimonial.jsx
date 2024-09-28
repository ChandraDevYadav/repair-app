import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

// Sample client feedback array
const feedbacks = [
  {
    name: 'Chan Dra Dev',
    feedback: 'Great experience, but there’s room for improvement.',
    stars: 5,
    image: './team_member_3.png',
    title: "Sale Manager"
  },
  {
    name: 'Indra Dev',
    feedback: 'Great experience, but there’s nothing for improvement.',
    stars: 4,
    image: './team_member_4.png',
    title: "Sale Manager"
  },
  {
    name: 'Brahma Dev',
    feedback: 'Great experience, Highly recommended!.',
    stars: 3,
    image: './team_member_5.jpg',
    title: "Sale Manager"
  },
  {
    name: 'Dharma Dev',
    feedback: 'Love to use this greate experience!.',
    stars: 4,
    image: './team_member_6.jpg',
    title: "Sale Manager"
  },
  {
    name: 'Phanch Dev',
    feedback: 'It is so useful than i have expected!.',
    stars: 3,
    image: './team_member_7.jpg',
    title: "Sale Manager"
  },
  {
    name: 'John Doe',
    feedback: 'This product exceeded my expectations. Highly recommended!',
    stars: 5,
    image: './avatar_1.png',
    title: "Sale Manager"
  },
  {
    name: 'Jane Smith',
    feedback: 'The service was excellent, and the team was very helpful!',
    stars: 4,
    image: './team_member_1.png',
    title: "Sale Manager"
  },
  {
    name: 'Mike Johnson',
    feedback: 'Great experience, but there’s room for improvement.',
    stars: 3,
    image: './team_member_2.png',
    title: "Sale Manager"
  },
];

// Star rating component
const StarRating = ({ stars }) => {
  const fullStar = '⭐'; // You can replace this with an image if needed
  return (
    <div className="flex">
      {Array(stars).fill().map((_, index) => (
        <span key={index}>{fullStar}</span>
      ))}
    </div>
  );
};

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % feedbacks.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 mb-28 relative' style={{ backgroundImage: `url('./testimonial_bg.svg')` }}>
      {/* Feedback section */}
      <div className='col-span-3 md:col-span-2'>
        <div className="mx-4 md:mx-20 mt-32">
          <p className="text-xl font-medium text-orange-500 flex gap-3 items-center">
            <img
              src="./ac.png"
              className="w-6 h-6 animate-rotate"
              alt="Rotating Image"
            />
            Testimonials
          </p>
          <h1 className="text-3xl md:text-5xl font-bold my-5 text-white">Our Clients Feedback</h1>
          <div className='absolute right-[19.25rem] md:right-[27.3rem] top-[38.3rem] md:top-[12.3rem] border-2 border-orange-500 p-2 rounded-full'>
            <div className='bg-orange-500 p-3 md:p-7 rounded-full'>
              <img src="./quotation.png" alt="" className='w-8 h-8 md:w-10 md:h-10' />
            </div>
          </div>

          {/* Feedback carousel */}
          <div className="mt-10">
            <StarRating stars={feedbacks[currentSlide].stars} />
            <p className="text-base md:text-lg my-3 text-white">{feedbacks[currentSlide].feedback}</p>
            <div className='flex gap-4 items-center'>
              <img src={feedbacks[currentSlide].image} alt="Client" className="w-12 h-12 md:w-16 md:h-16 rounded-full" />
              <div>
                <h2 className="text-lg md:text-2xl font-semibold text-white">{feedbacks[currentSlide].name}</h2>
                <p className='text-white'>{feedbacks[currentSlide].title}</p>
              </div>
            </div>
            <div className='flex justify-end items-end gap-5 mt-5'>
              <button onClick={prevSlide} className='text-white bg-orange-600 rounded-full p-2 md:p-3'><ArrowLeft /></button>
              <button onClick={nextSlide} className='text-white bg-orange-600 rounded-full p-2 md:p-3'><ArrowRight /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Client Image */}
      <div className="flex justify-end items-center mt-10 md:mt-0">
        <img src="./testimonial_img.png" alt="Client" className="ml-2 md:ml-0 h-[300px] md:h-[492px] w-[350px] md:w-auto" />
      </div>
    </div>
  );
};

export default Testimonial;
