"use client";

// pages/game.js
import { useEffect, useState } from 'react';
import { fetchDogImage } from '../api/fetchDogImage'; // Caminho relativo correto para importar a função

export default function Game() {
  const [imageUrl, setImageUrl] = useState('');
  const [breedName, setBreedName] = useState('');
  const [showBreed, setShowBreed] = useState(false); // Estado para controlar a visibilidade do nome da raça

  useEffect(() => {
    // Chama a função de buscar imagem da API
    fetchDogImage(setImageUrl, setBreedName, () => setShowBreed(false)); // Esconder o nome da raça quando uma nova imagem for buscada
  }, []);

  return (
    <div
      className="h-screen w-full flex flex-col justify-between bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div /> {/* Espaço vazio para manter o conteúdo no rodapé */}
      <div className="flex flex-col items-center py-8">
        {/* Etiqueta para descobrir a raça */}
        <div
          onClick={() => setShowBreed(true)} // Mostra o nome da raça quando clicado
          className="text-white text-lg mb-2 px-4 py-1 rounded bg-blue-500/50 cursor-pointer"
        >
          {showBreed ? `Raça: ${breedName}` : 'Toque para descobrir a raça'}
        </div>
        <h1 className="text-white text-4xl font-bold mb-4 text-center px-8">
          Cachorros são os melhores amigos!
        </h1>
        <button
          onClick={() => fetchDogImage(setImageUrl, setBreedName, () => setShowBreed(false))}
          className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-300"
        >
          Trocar Imagem
        </button>
      </div>
    </div>
  );
}