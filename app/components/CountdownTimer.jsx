import { useEffect, useState } from 'react';

export default function CountdownTimer({ initialTime, onComplete }) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearTimeout(timer); // Limpa o timer para evitar bugs
  }, [timeLeft, onComplete]);

  return (
    <span className="text-white font-bold text-lg">
      {timeLeft}s
    </span>
  );
}
