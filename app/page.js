// page.jsx
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Game from './components/Game';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Game />  {/* Componente do jogo movido para Game.jsx */}
      <Footer />
    </div>
  );
}
