// Navbar.jsx
export default function Navbar() {
    return (
      <nav className="bg-slate-800 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-300">Guess<span className="text-white font-medium">The</span>Woof</h1>
          <ul className="flex space-x-4">
            <li className="text-white hover:text-orange-200 cursor-pointer">Home</li>
            <li className="text-white hover:text-orange-200 cursor-pointer">About</li>
            <li className="text-white hover:text-orange-200 cursor-pointer">Play!</li>
            <li className="text-white hover:text-orange-200 cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>
    );
  }
  