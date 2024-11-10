// GameContainer.jsx
"use client";
import { useEffect, useState } from 'react';
import { fetchDogImage } from './api/fetchDogImage';
import DogImage from './components/DogImage';
import BreedOptions from './components/BreedOptions';
import ConfettiEffect from './components/ConfettiEffect';
import NextButton from './components/NextButton';

export default function GameContainer() {
  const [imageUrl, setImageUrl] = useState('');
  const [correctBreed, setCorrectBreed] = useState('');
  const [breedOptions, setBreedOptions] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Função para obter as dimensões da janela
    const getWindowDimensions = () => ({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Função para tratar o resize da janela
    const handleResize = () => setWindowSize(getWindowDimensions());

    // Inicializa as dimensões da janela e define o listener para o resize
    setWindowSize(getWindowDimensions());
    window.addEventListener('resize', handleResize);

    // Limpa o listener ao desmontar o componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const startNewRound = async () => {
    setShowNextButton(false);
    setShowConfetti(false);

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
    }
  };

  return (
    <div className="h-screen w-full flex flex-col justify-between items-center bg-stripes">
      <DogImage imageUrl={imageUrl} />
      <div className="flex flex-col items-center py-8 bg-sky-800/70 m-8 rounded-3xl max-w-xl mx-auto">
        {showConfetti && <ConfettiEffect windowSize={windowSize} />}
        <h1 className="text-white text-4xl font-bold mb-4 text-center px-8">Can you guess the breed? 🐶</h1>
        <BreedOptions options={breedOptions} onClick={handleBreedClick} />
        {showNextButton && <NextButton onClick={startNewRound} />}
      </div>
    </div>
  );
}