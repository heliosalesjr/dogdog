"use client";
import { useEffect, useState } from 'react';
import { fetchDogImage } from '../api/fetchDogImage';
import DogImage from './DogImage';
import BreedOptions from './BreedOptions';
import ConfettiEffect from './ConfettiEffect';
import NextButton from './NextButton';
import Score from './Score';
import CountdownTimer from './CountdownTimer';
import { motion, AnimatePresence } from 'framer-motion';

export default function Game() {
  const [imageUrl, setImageUrl] = useState('');
  const [correctBreed, setCorrectBreed] = useState('');
  const [breedOptions, setBreedOptions] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [points, setPoints] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isRoundActive, setIsRoundActive] = useState(true);
  const [loading, setLoading] = useState(true);
  const [showCountdown, setShowCountdown] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [showOptions, setShowOptions] = useState(true);

  useEffect(() => {
    const getWindowDimensions = () => ({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => setWindowSize(getWindowDimensions());

    setWindowSize(getWindowDimensions());
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const startNewRound = async () => {
    setShowNextButton(false);
    setShowConfetti(false);
    setShowAlert(false);
    setIsRoundActive(true);
    setShowCountdown(false);
    setFeedbackMessage('');
    setShowOptions(true);
    setLoading(true);

    try {
      const result = await fetchDogImage();

      if (result) {
        setImageUrl(result.imageUrl);
        setCorrectBreed(result.breed);
        setBreedOptions([result.breed, ...result.randomBreeds].sort(() => Math.random() - 0.5));

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    } catch (error) {
      console.error("Erro ao buscar a imagem de cachorro:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    startNewRound();
  }, []);

  const handleBreedClick = (selectedBreed) => {
    if (!isRoundActive) return;

    setIsRoundActive(false);
    setShowOptions(false);

    if (selectedBreed === correctBreed) {
      setShowConfetti(true);
      setShowNextButton(true);
      setPoints((prevPoints) => prevPoints + 1);
      setFeedbackMessage("Woof woof! 🎉 You got it right!");

      setTimeout(() => {
        setShowConfetti(false);
      }, 6000);
    } else {
      setShowAlert(true);
      setFeedbackMessage(`Oops! The correct breed is ${correctBreed}.`);
    }

    setShowCountdown(true);
  };

  return (
    <section id="game" className="bg-pink-200 py-16 relative h-screen w-full flex flex-col items-center justify-between">
      <Score points={points} />

      {loading ? (
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="spinner border-t-4 border-pink-500 border-solid rounded-full h-12 w-12 animate-spin"></div>
          <p className="text-lg text-gray-700 mt-4">Loading...</p>
        </div>
      ) : (
        <div className="relative w-full h-full flex flex-col items-center">
          {showConfetti && <ConfettiEffect windowSize={windowSize} className="absolute top-0" />}

          <div className="flex-1 flex justify-center items-center max-h-[70%] overflow-hidden">
            <DogImage imageUrl={imageUrl} />
          </div>

          <AnimatePresence>
            {feedbackMessage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-4 bg-sky-800/70 py-4 px-6 rounded-3xl text-white text-xl font-bold text-center shadow-lg"
              >
                {feedbackMessage}
              </motion.div>
            )}
          </AnimatePresence>

          {showOptions && (
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-sky-800/70 py-6 px-4 w-[90%] max-w-md rounded-3xl flex flex-col items-center shadow-lg">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-white text-4xl font-bold mb-4 text-center"
              >
                Guess the breed! 🐶
              </motion.h1>
              <BreedOptions options={breedOptions} onClick={handleBreedClick} disabled={!isRoundActive} />
            </div>
          )}

          {showCountdown && (
            <div className="flex items-center gap-4 mt-4">
              {showNextButton && <NextButton onClick={startNewRound} />}
              <CountdownTimer initialTime={5} onComplete={startNewRound} />
            </div>
          )}
        </div>
      )}
    </section>
  );
}