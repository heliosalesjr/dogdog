// HeroSection.jsx
import React from 'react';

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#ADD8E6] via-[#FFB6C1] to-[#FFA500] h-screen p-8">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">
        Guess The Woof!
      </h1>
      <p className="mt-6 text-xl md:text-2xl text-white max-w-xl mx-auto">
        Test your skills and see if you can recognize dog breeds by their looks!
        A fun and interactive game for all dog lovers.
      </p>
      <div className="flex gap-4 mt-10">
        <button className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-lg shadow-md hover:bg-pink-100 transition duration-200">
          Learn more
        </button>
        <button className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-200">
          Play
        </button>
      </div>
    </section>
  );
}
