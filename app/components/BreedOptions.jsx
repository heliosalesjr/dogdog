// BreedOptions.jsx
import { motion } from 'framer-motion';

export default function BreedOptions({ options, onClick }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {options.map((option) => (
        <motion.button
          key={option}
          onClick={() => onClick(option)}
          className="px-4 py-2 bg-sky-500 text-white font-semibold rounded hover:bg-slate-500"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {option}
        </motion.button>
      ))}
    </div>
  );
}
