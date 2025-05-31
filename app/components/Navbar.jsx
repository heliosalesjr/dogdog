"use client";
import { useState } from 'react';
import { FaPaw, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    // Fecha o menu mobile quando clica em um item
    setIsMenuOpen(false);
    
    // Navega suavemente para a seção
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navItems = [
    { text: 'Home', id: 'home' },
    { text: 'Play', id: 'play' },
    { text: 'About', id: 'about' },
    { text: 'Contact', id: 'contact' }
  ];

  return (
    <nav className="bg-slate-800 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-pink-300 flex items-center">
          <FaPaw className="mr-2 text-orange-200" /> 
          Guess<span className="text-white font-medium">The</span>Woof
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className="text-white hover:text-orange-200 transition-colors duration-200 cursor-pointer font-medium"
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-orange-200 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <ul className="pt-4 pb-2 space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left text-white hover:text-orange-200 hover:bg-slate-700 px-4 py-2 rounded transition-colors duration-200 cursor-pointer font-medium"
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}