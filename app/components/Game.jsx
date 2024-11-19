// Game.jsx
"use client";
import { useEffect, useState } from 'react';
import { fetchDogImage } from '../api/fetchDogImage';
import DogImage from './DogImage';
import BreedOptions from './BreedOptions';
import ConfettiEffect from './ConfettiEffect';
import NextButton from './NextButton';
import Score from './Score';

export default function Game() {
  const [imageUrl, setImageUrl] = useState('');
  const [correctBreed, setCorrectBreed] = useState('');
  const [breedOptions, setBreedOptions] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [points, setPoints] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

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

    try {
      const result = await fetchDogImage();

      if (result) {
        setImageUrl(result.imageUrl);
        setCorrectBreed(result.breed);
        setBreedOptions([result.breed, ...result.randomBreeds].sort(() => Math.random() - 0.5));
      }
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
      setPoints((prevPoints) => prevPoints + 1);
    } else {
      setShowAlert(true);
    }
  };

  return (
    <section className="bg-orange-200 py-16">
        <div className="h-screen w-full flex flex-col justify-between items-center relative">
        <Score points={points} />
        
        <div className="flex flex-1 flex-col justify-center items-center">
          <DogImage imageUrl={imageUrl} />
        </div>
        <div className="flex flex-col items-center py-8 bg-sky-800/70 m-8 rounded-3xl max-w-xl mx-auto">
            {showConfetti && <ConfettiEffect windowSize={windowSize} />}
            
            <h1 className="text-white text-4xl font-bold mb-4 text-center px-8">Can you guess the breed? 🐶</h1>
            
            <BreedOptions options={breedOptions} onClick={handleBreedClick} />
            
            {showNextButton && <NextButton onClick={startNewRound} />}

            {showAlert && (
            <div className="mt-4 bg-red-600 text-white p-4 rounded text-center">
                <p>The name of the breed is {correctBreed}.</p>
                <button
                onClick={startNewRound}
                className="mt-2 px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600"
                >
                Next
                </button>
            </div>
            )}
        </div>
        </div>
    </section>
  );
}
