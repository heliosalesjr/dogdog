"use client";
import { useEffect, useState } from 'react';
import { fetchDogImage } from '../api/fetchDogImage';
import DogImage from './DogImage';
import BreedOptions from './BreedOptions';
import ConfettiEffect from './ConfettiEffect';
import NextButton from './NextButton';
import Score from './Score';
import CountdownTimer from './CountdownTimer';


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
  const [loading, setLoading] = useState(true); // Estado para o loading

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
    setLoading(true); // Ativa o loading enquanto carrega os dados
  
    try {
      const result = await fetchDogImage();
  
      if (result) {
        setImageUrl(result.imageUrl);
        setCorrectBreed(result.breed);
        setBreedOptions([result.breed, ...result.randomBreeds].sort(() => Math.random() - 0.5));
  
        // Aguarda 1 segundo (1000 ms) antes de desativar o loading
        setTimeout(() => {
          setLoading(false);
        }, 1000); // Ajuste o tempo conforme necessário
      }
    } catch (error) {
      console.error("Erro ao buscar a imagem de cachorro:", error);
      setLoading(false); // Garante que o loading será desativado mesmo em caso de erro
    }
  };
  

  useEffect(() => {
    startNewRound();
  }, []);

  const handleBreedClick = (selectedBreed) => {
    if (!isRoundActive) return;

    setIsRoundActive(false);

    if (selectedBreed === correctBreed) {
      setShowConfetti(true);
      setShowNextButton(true);
      setPoints((prevPoints) => prevPoints + 1);
      setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
    } else {
      setShowAlert(true);
    }
  };

  return (
    <section id="game" className="bg-orange-200 py-16">
      <div className="h-screen w-full flex flex-col justify-between items-center relative">
        <Score points={points} />

        {loading ? (
          // Exibe o loader enquanto carrega
          <div className="flex flex-1 flex-col justify-center items-center">
            <div className="spinner border-t-4 border-blue-500 border-solid rounded-full h-12 w-12 animate-spin"></div>
            <p className="text-lg text-gray-700 mt-4">Loading...</p>
          </div>
        ) : (
          // Exibe o conteúdo carregado
          <div className="flex flex-1 flex-col justify-center items-center">
            <DogImage imageUrl={imageUrl} />
            <div className="flex flex-col items-center py-8 bg-sky-800/70 m-8 rounded-3xl max-w-xl mx-auto">
              {showConfetti && <ConfettiEffect windowSize={windowSize} />}
              <h1 className="text-white text-4xl font-bold mb-4 text-center px-8">Can you guess the breed? 🐶</h1>
              <BreedOptions
                options={breedOptions}
                onClick={handleBreedClick}
                disabled={!isRoundActive}
              />
              {showNextButton && (
                <div className="flex items-center gap-4">
                  <NextButton onClick={startNewRound} />
                  <CountdownTimer
                    initialTime={5} // Define 5 segundos para o countdown
                    onComplete={startNewRound} // Inicia a próxima rodada automaticamente
                  />
                </div>
              )}
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
        )}
      </div>
    </section>
  );
}
