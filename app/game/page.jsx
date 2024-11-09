"use client";

import { useEffect, useState } from 'react';
import { fetchDogImage } from '../api/fetchDogImage';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';

export default function Game() {
  const [imageUrl, setImageUrl] = useState('');
  const [breedName, setBreedName] = useState('');
  const [showBreed, setShowBreed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Define o estado inicial de windowSize como um objeto vazio
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // useEffect que roda apenas no client-side para configurar as dimensões da janela
  useEffect(() => {
    const getWindowDimensions = () => ({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    setWindowSize(getWindowDimensions());

    const handleResize = () => setWindowSize(getWindowDimensions());
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    fetchDogImage(setImageUrl, setBreedName, () => setShowBreed(false));
  }, []);

  const handleRevealClick = () => {
    setShowBreed(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div
      className="h-screen w-full flex flex-col justify-between bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div />
      <div className="flex flex-col items-center py-8 bg-sky-800/70 m-8 rounded-3xl max-w-xl mx-auto">
        {showConfetti && <Confetti width={windowSize.width} height={windowSize.height} />}
        
        <motion.div
          onClick={handleRevealClick}
          className="text-white text-lg mb-2 px-4 py-1 rounded bg-sky-500/50 font-black cursor-pointer"
          animate={{
            scale: [1, 1.1, 1],
            backgroundColor: ["#38BDF8", "#4ADE80", "#38BDF8"]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {showBreed ? `${breedName}` : 'Tap to reveal'}
        </motion.div>

        <h1 className="text-white text-4xl font-bold mb-4 text-center px-8">
          Can you guess the breed? 🐶
        </h1>

        <button
          onClick={() => fetchDogImage(setImageUrl, setBreedName, () => setShowBreed(false))}
          className="px-4 py-2 bg-sky-500 text-white font-semibold rounded hover:bg-slate-500"
        >
          Next
        </button>
      </div>
    </div>
  );
}
