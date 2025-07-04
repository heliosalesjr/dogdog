"use client";
import { useState } from 'react';
import { FaPaw, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    // Se existe uma seção com id "home", vai para ela
    const homeElement = document.getElementById('home');
    if (homeElement) {
      homeElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Se não existe seção "home", vai para o topo da página
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

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
    { text: 'Play', id: 'game' },
    { text: 'About', id: 'about' },
    { text: 'Contact', id: 'contact' }
  ];

  return (
    <nav className="bg-slate-800 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 
          className="text-2xl font-bold text-pink-300 flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-200"
          onClick={handleLogoClick}
        >
          <FaPaw className="mr-2 text-orange-200" /> 
          Guess<span className="text-white font-medium">The</span>Woof
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className="text-white hover:text-orange-200 transition-colors duration-200 cursor-pointer font-medium hover:font-semibold "
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
                className="block w-full text-center text-white hover:text-orange-200  hover:bg-slate-700 px-4 py-2 rounded transition-colors duration-200 cursor-pointer hover:font-semibold "
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