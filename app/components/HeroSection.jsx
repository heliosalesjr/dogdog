"use client";
import React from 'react';
import { FaDog } from 'react-icons/fa';
import { TbDogBowl } from "react-icons/tb";
import { PiDogFill } from "react-icons/pi";
import { GiJumpingDog } from "react-icons/gi";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center bg-stone-200 h-screen p-8 font-space">
      <h1 className="text-5xl md:text-7xl font-black text-slate-800 drop-shadow-lg">
        Guess The Woof!
      </h1>
      <p className="mt-6 text-xl md:text-2xl text-slate-800 max-w-xl mx-auto">
        Test your skills and see if you can recognize dog breeds by their looks!  
        A fun and interactive game for all dog lovers.
      </p>
    
  <div className="flex gap-4 mt-10">
    <div className="relative">
      <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 rounded-full"></div>
        <button onClick={() => {
      document.getElementById("game").scrollIntoView({ behavior: "smooth" });
    }}className="relative px-8 py-3 bg-sky-500 text-white font-bold rounded-full border-2 border-black transition-transform duration-200 hover:-translate-y-2">
          Play
        </button>
      </div>
      <div className="relative">
  <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 rounded-full"></div>
  <button
    onClick={() => {
      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    }}
    className="relative px-8 py-3 bg-white text-pink-600 font-bold rounded-full border-2 border-black transition-transform duration-200 hover:-translate-y-2"
  >
    Learn more
  </button>
</div>
  </div>




      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full max-w-4xl">
        {/* Card 1 */}
        <div className="flex items-center border-2 border-black rounded-full p-4 bg-stone-100 shadow-lg hover:shadow-xl transition duration-200 text-left">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-pink-500 text-white">
            <FaDog size={32} />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold text-slate-800">Explore Breeds</h3>
            <p className="text-sm text-slate-600">Discover unique dog breeds as you play.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center border-2 border-black rounded-full p-4 bg-stone-100 shadow-lg hover:shadow-xl transition duration-200 text-left">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-500 text-white">
            <TbDogBowl size={32} />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold text-slate-800">Challenge Yourself</h3>
            <p className="text-sm text-slate-600">Can you identify every dog breed?</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center border-2 border-black rounded-full p-4 bg-stone-100 shadow-lg hover:shadow-xl transition duration-200 text-left">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-400 text-white">
            <PiDogFill size={32} />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold text-slate-800">Play Anywhere</h3>
            <p className="text-sm text-slate-600">Designed to work across all devices!</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex items-center border-2 border-black rounded-full p-4 bg-stone-100 shadow-lg hover:shadow-xl transition duration-200 text-left">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-sky-500 text-white">
            <GiJumpingDog size={32} />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold text-slate-800">Fun for All</h3>
            <p className="text-sm text-slate-600">Everyone, young or old, can enjoy this game!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
