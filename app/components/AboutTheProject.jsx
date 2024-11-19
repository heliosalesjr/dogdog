import React from 'react';
import { FaPaw, FaBone, FaSmile } from 'react-icons/fa';

export default function FeatureSection() {
  return (
    <section className="flex flex-col items-center text-center bg-stone-100 py-16 px-8 font-space">
      {/* Título e Subtítulo */}
      <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">
        Why You'll Love Guess The Woof
      </h2>
      <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto mb-12">
        Guess The Woof isn't just a game; it's an experience crafted with love for dog enthusiasts of all ages. 
        Whether you're a canine expert or a casual player, there's something here for you!
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Card 1 */}
        <div className="flex items-center border-2 border-black rounded-full p-4 bg-white shadow-lg hover:shadow-xl transition duration-200 text-left">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-500 text-white">
            <FaPaw size={32} />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold text-slate-800">Connect with Dogs</h3>
            <p className="text-sm text-slate-600">Every click brings you closer to our furry friends.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center border-2 border-black rounded-full p-4 bg-white shadow-lg hover:shadow-xl transition duration-200 text-left">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-pink-500 text-white">
            <FaBone size={32} />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold text-slate-800">Learn and Have Fun</h3>
            <p className="text-sm text-slate-600">Enjoy a mix of education and entertainment!</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center border-2 border-black rounded-full p-4 bg-white shadow-lg hover:shadow-xl transition duration-200 text-left">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-500 text-white">
            <FaSmile size={32} />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold text-slate-800">Share the Joy</h3>
            <p className="text-sm text-slate-600">Challenge friends and family for endless laughs!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
