// DogImage.jsx
import Image from 'next/image';

export default function DogImage({ imageUrl }) {
  return (
    <div className="relative w-full h-full max-w-4xl">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Random image"
          fill
          className="object-contain pt-8 rounded"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
    </div>
  );
}
