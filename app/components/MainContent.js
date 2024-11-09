"use client" 

import { useEffect, useState } from 'react';
import { fetchDogImage } from "@/app/api/fetchDogImage";

function MainContent  () {
    const [imageUrl, setImageUrl] = useState('');
    const [breedName, setBreedName] = useState('');

  useEffect(() => {
    fetchDogImage(setImageUrl, setBreedName); // Busca a imagem inicial quando o componente é montado
  }, []);

  return (
    <>
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
            onClick={() => fetchDogImage(setImageUrl, setBreedName)}
            className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-300"
            >
            Novo Cachorro
            </button>
        </div>
        </div>
    </>
  )
}

export default MainContent

import React from 'react'

