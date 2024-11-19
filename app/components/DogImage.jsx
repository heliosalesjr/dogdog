// DogImage.jsx
export default function DogImage({ imageUrl }) {
  return (
    <div className="relative">
      {/* Sombra sólida */}
      <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 rounded-3xl"></div>
      {/* Imagem com borda e cantos arredondados */}
      <img
        src={imageUrl}
        alt="Dog"
        className="relative w-full h-auto max-w-lg border-4 border-black rounded-3xl"
      />
    </div>
  );
}

