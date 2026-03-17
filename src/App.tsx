import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Simulator from './components/Simulator';
import Cartas from './components/Cartas'; 
import Footer from './components/Footer';
import Imoveis from './components/Imoveis';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }, [currentSection])

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Hero onSectionChange={setCurrentSection} />;
      case 'about':
        return <About />;
      case 'products':
        return <Products onSectionChange={setCurrentSection} />;
      case 'imoveis':
        return <Imoveis />;
      case 'simulator':
        return <Simulator onSectionChange={setCurrentSection} />;
      case 'cartas': // <-- CORRIGIDO: tem que ser tudo minúsculo igual aos botões!
        return <Cartas />;
      default:
        return <Hero onSectionChange={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentSection={currentSection} onSectionChange={setCurrentSection} />
      {renderSection()}
      <Footer onSectionChange={setCurrentSection} />
    </div>
  );
}

export default App;