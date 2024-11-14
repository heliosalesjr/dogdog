// components/Score.jsx
export default function Score({ points }) {
    return (
      <div className="absolute top-4 right-4 text-white text-xl font-bold bg-slate-600/50 rounded-lg m-4 p-4">
        Points: {points}
      </div>
    );
  }
  