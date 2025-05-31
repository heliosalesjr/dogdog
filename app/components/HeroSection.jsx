"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaDog } from "react-icons/fa";
import { TbDogBowl } from "react-icons/tb";
import { PiDogFill } from "react-icons/pi";
import { GiJumpingDog } from "react-icons/gi";

export default function HeroSection() {
  // Variantes para as animações
  const textVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut", delay: 0.8 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="home"
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center text-center bg-stone-200 min-h-screen p-4 sm:p-6 md:p-8 font-space pt-20 md:pt-8"
    >
      {/* Texto principal */}
      <motion.h1
        variants={textVariant}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-slate-800 drop-shadow-lg px-2"
      >
        Guess The Woof!
      </motion.h1>

      <motion.p
        variants={textVariant}
        transition={{ delay: 0.4 }}
        className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-slate-800 max-w-xs sm:max-w-md md:max-w-xl mx-auto px-4"
      >
        Test your skills and see if you can recognize dog breeds by their looks!
        A fun and interactive game for all dog lovers.
      </motion.p>

      {/* Botões */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10 w-full max-w-xs sm:max-w-none justify-center">
        <motion.div variants={buttonVariant}>
          <div className="relative">
            <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 rounded-full"></div>
            <button
              onClick={() => {
                document.getElementById("game").scrollIntoView({ behavior: "smooth" });
              }}
              className="relative w-full sm:w-auto px-6 sm:px-8 py-3 bg-sky-500 text-white font-bold rounded-full border-2 border-black transition-transform duration-200 hover:-translate-y-1"
            >
              Play
            </button>
          </div>
        </motion.div>
        <motion.div variants={buttonVariant} transition={{ delay: 0.2 }}>
          <div className="relative">
            <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 rounded-full"></div>
            <button
              onClick={() => {
                document.getElementById("about").scrollIntoView({ behavior: "smooth" });
              }}
              className="relative w-full sm:w-auto px-6 sm:px-8 py-3 bg-white text-pink-600 font-bold rounded-full border-2 border-black transition-transform duration-200 hover:-translate-y-1"
            >
              Learn more
            </button>
          </div>
        </motion.div>
      </div>

      {/* Cartões - Ocultos em mobile */}
      <motion.div
        className="hidden md:grid md:grid-cols-2 gap-4 lg:gap-6 mt-8 lg:mt-12 w-full max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {[{
          icon: <FaDog size={32} />,
          bgColor: "bg-pink-500",
          title: "Explore Breeds",
          text: "Discover unique dog breeds as you play."
        }, {
          icon: <TbDogBowl size={32} />,
          bgColor: "bg-green-500",
          title: "Challenge Yourself",
          text: "Can you identify every dog breed?"
        }, {
          icon: <PiDogFill size={32} />,
          bgColor: "bg-yellow-400",
          title: "Play Anywhere",
          text: "Designed to work across all devices!"
        }, {
          icon: <GiJumpingDog size={32} />,
          bgColor: "bg-sky-500",
          title: "Fun for All",
          text: "Everyone, young or old, can enjoy this game!"
        }].map((card, index) => (
          <motion.div key={index} className="flex items-center border-2 border-black rounded-full p-4 bg-stone-100 shadow-lg hover:shadow-xl transition duration-200 text-left" variants={cardVariant}>
            <div className={`w-12 lg:w-16 h-12 lg:h-16 flex items-center justify-center rounded-full ${card.bgColor} text-white`}>
              {card.icon}
            </div>
            <div className="ml-4">
              <h3 className="text-base lg:text-lg font-bold text-slate-800">{card.title}</h3>
              <p className="text-sm text-slate-600">{card.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}