// page.jsx
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Game from './components/Game';
import Footer from './components/Footer';
import AboutTheProject from './components/AboutTheProject';
export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Game /> 
      
      <AboutTheProject />
      <AboutUs />
      <Footer />
    </div>
  );
}
