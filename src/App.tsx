import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Simulator from './components/Simulator';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Hero onSectionChange={setCurrentSection} />;
      case 'about':
        return <About />;
      case 'products':
        return <Products onSectionChange={setCurrentSection} />;
      case 'simulator':
        return <Simulator />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
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