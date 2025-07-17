import React from 'react';
import Logo from '../imgs/d&blogo.png'
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onSectionChange: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onSectionChange }) => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-white p-2 rounded-lg">
                <img className="h-16 w-16" src={Logo} alt="" />
              </div>
              <div>
                <h3 className="text-xl font-bold">d&b Credi</h3>
                <p className="text-sm text-gray-400">Crédito que transforma vidas</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Há mais de 10 anos oferecendo soluções financeiras acessíveis e transformando vidas através do crédito responsável.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onSectionChange('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSectionChange('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSectionChange('products')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSectionChange('simulator')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Simulador
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSectionChange('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Produtos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Microcrédito
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  CrediSocial
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Juro Zero
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Capital de Giro
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">(11) 3333-4444</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">contato@credifinance.com.br</span>
              </div>
              <div className="mt-4">
                <p className="text-gray-400 text-sm">
                  Av. Paulista, 1000 - Bela Vista<br />
                  São Paulo - SP, 01310-100
                </p>
              </div>
            </div>
            <div className="mt-4">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 CrediFinance. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Ouvidoria
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;