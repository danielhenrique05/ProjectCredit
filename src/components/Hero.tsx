import React from 'react';
import { ArrowRight, TrendingUp, Users, Shield, Home } from 'lucide-react';

interface HeroProps {
  onSectionChange: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSectionChange }) => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              A chave para a sua <span className="text-yellow-400">nova conquista</span>
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Oferecemos as melhores oportunidades em Consignado INSS, Consórcios, Cartas Contempladas e o Imóvel dos seus sonhos. 
              Segurança, agilidade e condições que cabem no seu bolso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              
              <button
                onClick={() => onSectionChange('cartas')}
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Ver Cartas Contempladas</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onSectionChange('imoveis')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors"
              >
                Conhecer Imóveis
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <TrendingUp className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">R$ 50M+</h3>
              <p className="text-blue-100">Em negócios realizados</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Users className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">15.000+</h3>
              <p className="text-blue-100">Clientes realizados</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Shield className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">98%</h3>
              <p className="text-blue-100">Taxa de satisfação</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Home className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Imóveis</h3>
              <p className="text-blue-100">As melhores opções da região</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;