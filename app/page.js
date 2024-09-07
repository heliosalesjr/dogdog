"use client";

// pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
  const [imageUrl, setImageUrl] = useState('');
  const [breedName, setBreedName] = useState('');

  // Função para buscar a imagem de cachorro da API
  const fetchDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      const imageUrl = data.message;
      
      setImageUrl(imageUrl);

      // Extrair o nome da raça da URL
      const breed = imageUrl.split('/')[4]; // Pega o quarto elemento da URL, que é o nome da raça
      setBreedName(breed);
    } catch (error) {
      console.error('Erro ao buscar a imagem de cachorro:', error);
    }
  };

  useEffect(() => {
    fetchDogImage(); // Busca a imagem inicial quando o componente é montado
  }, []);

  return (
    <div
      className="h-screen w-full flex flex-col justify-between bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div /> {/* Espaço vazio para manter o conteúdo no rodapé */}
      <div className="flex flex-col items-center py-8">
        <p className="text-white text-lg mb-2 px-4 py-1 rounded bg-blue-500/50">
          Raça: {breedName}
        </p>
        <h1 className="text-white text-4xl font-bold mb-4 text-center px-8">
          Cachorros são os melhores amigos!
        </h1>
        <button
          onClick={fetchDogImage}
          className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-300"
        >
          Trocar Imagem
        </button>
      </div>
    </div>
  );
}
