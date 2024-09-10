"use client";

// pages/teste.js
import { useEffect, useState } from 'react';
import { fetchDogImage } from '../api/fetchDogImage';
import Image from 'next/image';

export default function Home() {
  const [breedName, setBreedName] = useState('');
  const [imageUrl, setImageUrl] = useState(''); // Inicializa o estado como uma string vazia

  // Função para buscar uma nova imagem
  const handleNewImage = () => {
    fetchDogImage(setImageUrl, setBreedName); // Chama a função de API para buscar a nova imagem
  };

  useEffect(() => {
    fetchDogImage(setImageUrl, setBreedName); // Busca a imagem inicial quando o componente é montado
  }, []);

  return (
    <div className="h-screen w-full flex flex-col justify-between items-center bg-black">
      {/* Imagem do cachorro */}
      <div className="relative w-full h-full max-w-4xl">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="Random image"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      
      {/* Texto e botão no rodapé */}
      <div className="flex flex-col items-center py-8">
        <p className="text-white text-lg mb-2 px-4 py-1 rounded bg-blue-500/50">
          Raça: {breedName}
        </p>
        <button
          onClick={handleNewImage}
          className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-300"
        >
          Novo Cachorro
        </button>
      </div>
    </div>
  );
}
