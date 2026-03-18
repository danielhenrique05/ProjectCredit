import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Simulator from './components/Simulator';
import Cartas from './components/Cartas'; 
import Footer from './components/Footer';
import Imoveis from './components/Imoveis';
import ImovelDetalhes from './components/ImovelDetalhes'; 

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [imovelSelecionado, setImovelSelecionado] = useState<any | null>(null);

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }, [currentSection, imovelSelecionado])

  const handleSectionChange = (section: string) => {
    setImovelSelecionado(null);
    setCurrentSection(section);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Hero onSectionChange={handleSectionChange} />;
      case 'about':
        return <About />;
      case 'products':
        return <Products onSectionChange={handleSectionChange} />;
      case 'imoveis':
        if (imovelSelecionado) {
          return (
            <ImovelDetalhes 
              imovel={imovelSelecionado} 
              onBack={() => setImovelSelecionado(null)} 
            />
          );
        }
        return <Imoveis onSelectImovel={(imovel) => setImovelSelecionado(imovel)} />;
      case 'simulator':
        return <Simulator onSectionChange={handleSectionChange} />;
      case 'cartas':
        return <Cartas />;
      default:
        return <Hero onSectionChange={handleSectionChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentSection={currentSection} onSectionChange={handleSectionChange} />
      {renderSection()}
      <Footer onSectionChange={handleSectionChange} />
    </div>
  );
}

export default App;