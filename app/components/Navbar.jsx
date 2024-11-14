// Navbar.jsx
export default function Navbar() {
    return (
      <nav className="bg-pink-400 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange-200">Game App</h1>
          <ul className="flex space-x-4">
            <li className="text-white hover:text-orange-200 cursor-pointer">Home</li>
            <li className="text-white hover:text-orange-200 cursor-pointer">About</li>
            <li className="text-white hover:text-orange-200 cursor-pointer">Games</li>
            <li className="text-white hover:text-orange-200 cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>
    );
  }
  