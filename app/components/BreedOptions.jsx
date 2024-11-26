import { motion } from 'framer-motion';

export default function BreedOptions({ options, onClick, disabled }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {options.map((option) => (
        <motion.button
          key={option}
          onClick={() => !disabled && onClick(option)} // Impede o clique se desabilitado
          disabled={disabled} // Desativa o botão visualmente
          className={`px-4 py-2 font-semibold rounded ${
            disabled
              ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
              : 'bg-sky-500 text-white hover:bg-slate-500'
          }`}
          whileHover={!disabled ? { scale: 1.1 } : {}} // Remove animação se desabilitado
          whileTap={!disabled ? { scale: 0.9 } : {}} // Remove animação se desabilitado
        >
          {option}
        </motion.button>
      ))}
    </div>
  );
}

