// ConfettiEffect.jsx
import Confetti from 'react-confetti';

export default function ConfettiEffect({ windowSize }) {
  return <Confetti width={windowSize.width} height={windowSize.height} />;
}
