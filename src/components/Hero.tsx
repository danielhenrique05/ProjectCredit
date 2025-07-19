import React from 'react';
import { ArrowRight, TrendingUp, Users, Shield } from 'lucide-react';

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
              Crédito que <span className="text-yellow-400">transforma</span> vidas
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Oferecemos soluções financeiras acessíveis para empreendedores, famílias e negócios que querem crescer. 
              Juros baixos, processo simples e aprovação rápida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              
              <button
                onClick={() => onSectionChange('simulator')}
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Simular Empréstimo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onSectionChange('products')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors"
              >
                Conhecer Produtos
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <TrendingUp className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">R$ 50M+</h3>
              <p className="text-blue-100">Liberados em empréstimos</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Users className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">15.000+</h3>
              <p className="text-blue-100">Clientes atendidos</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Shield className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">98%</h3>
              <p className="text-blue-100">Taxa de satisfação</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-2">24h</h3>
              <p className="text-blue-100">Aprovação média</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;