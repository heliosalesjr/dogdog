// BreedOptions.jsx
import { motion } from 'framer-motion';

export default function BreedOptions({ options, onClick, isRoundActive }) {
  return (
    <div className="flex flex-col gap-4">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onClick(option)}
          disabled={!isRoundActive} // Botão desativado se a rodada não estiver ativa
          className={`px-4 py-2 font-bold rounded 
            ${
              !isRoundActive
                ? 'bg-gray-300 cursor-not-allowed' // Estilo quando desativado
                : 'bg-blue-500 hover:bg-blue-600' // Estilo quando ativo
            }
          `}
        >
          {option}
        </button>
      ))}
    </div>
  );
}