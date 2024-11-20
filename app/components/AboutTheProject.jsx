import React from 'react';
import { FaPaw, FaBook, FaHeart } from 'react-icons/fa';

export default function FeatureSection() {
  return (
    <section id="about" className="flex flex-col items-center text-center bg-stone-100 py-16 px-8 font-space">
      {/* Título e Subtítulo */}
      <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">
        Discover More About Guess The Woof
      </h2>
      <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto mb-12">
        From technical inspirations to meaningful actions, explore the ideas and resources behind Guess The Woof.
      </p>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Card 1 */}
        <div className="relative">
          <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 rounded-3xl"></div>
          <div className="relative flex flex-col border-2 border-black rounded-3xl p-6 bg-white text-left transition-transform duration-200 hover:-translate-y-2">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-500 text-white mb-4">
              <FaPaw size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Powered by Dog API</h3>
            <p className=" text-slate-600 mt-2 my-4">
              The game utilizes the amazing <a href="https://dog.ceo/dog-api/" target="_blank" className="text-blue-600 underline hover:text-blue-800">Dog API</a>, a free and open-source resource for all things dog-related. It's a perfect fit for dog lovers and developers alike.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative">
          <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 rounded-3xl"></div>
          <div className="relative flex flex-col border-2 border-black rounded-3xl p-6 bg-white text-left transition-transform duration-200 hover:-translate-y-2">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-pink-500 text-white mb-4">
              <FaBook size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Built on Research</h3>
            <p className=" text-slate-600 mt-2 my-4">
              The Dog API is built on top of the <a href="http://vision.stanford.edu/aditya86/ImageNetDogs/" target="_blank" className="text-blue-600 underline hover:text-blue-800">Stanford Dogs Dataset</a>, combining advanced research with practical applications, featuring over 120 breeds and thousands of pictures.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative">
          <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 rounded-3xl"></div>
          <div className="relative flex flex-col border-2 border-black rounded-3xl p-6 bg-white text-left transition-transform duration-200 hover:-translate-y-2">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-500 text-white mb-4">
              <FaHeart size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Support Local Animals</h3>
            <p className=" text-slate-600 mt-2 my-4">
              Use this game as inspiration to help animals in your area. Volunteer, donate, or adopt to make a difference for local shelters and stray animals. They need you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
