"use client";

import { useEffect, useState } from 'react';
import { fetchDogImage } from '../api/fetchDogImage';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import Image from 'next/image';

export default function Game() {
  const [imageUrl, setImageUrl] = useState('');
  const [correctBreed, setCorrectBreed] = useState('');
  const [breedOptions, setBreedOptions] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

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

  const startNewRound = async () => {
    setShowNextButton(false);
    setShowConfetti(false);

    try {
      const result = await fetchDogImage();

      // Verifica se o resultado é válido antes de prosseguir
      if (!result) {
        console.error('Erro ao buscar a imagem de cachorro: resposta nula');
        return;
      }

      const { imageUrl, breed, randomBreeds } = result;
      setImageUrl(imageUrl);
      setCorrectBreed(breed);

      const options = [breed, ...randomBreeds];
      setBreedOptions(options.sort(() => Math.random() - 0.5));
    } catch (error) {
      console.error("Erro ao buscar a imagem de cachorro:", error);
    }
  };

  useEffect(() => {
    startNewRound();
  }, []);

  const handleBreedClick = (selectedBreed) => {
    if (selectedBreed === correctBreed) {
      setShowConfetti(true);
      setShowNextButton(true);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col justify-between items-center bg-black">
      <div className="relative w-full h-full max-w-4xl">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="Random image"
            fill
            className="object-contain pt-8"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>

      <div className="flex flex-col items-center py-8 bg-sky-800/70 m-8 rounded-3xl max-w-xl mx-auto">
        {showConfetti && <Confetti width={windowSize.width} height={windowSize.height} />}

        <h1 className="text-white text-4xl font-bold mb-4 text-center px-8">
          Can you guess the breed? 🐶
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {breedOptions.map((breedOption) => (
            <motion.button
              key={breedOption}
              onClick={() => handleBreedClick(breedOption)}
              className="px-4 py-2 bg-sky-500 text-white font-semibold rounded hover:bg-slate-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {breedOption}
            </motion.button>
          ))}
        </div>

        {showNextButton && (
          <button
            onClick={startNewRound}
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
