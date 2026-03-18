import React from 'react';
import { MapPin, Bed, Bath, Square, Phone, Search } from 'lucide-react';

interface ImoveisProps {
  onSelectImovel: (imovel: any) => void;
}

const imoveis = [
  {
    id: 1,
    title: 'Apartamento de Luxo no Centro',
    price: 'R$ 850.000',
    location: 'Centro, São Paulo - SP',
    beds: 3,
    baths: 2,
    area: '120m²',
    images: [
      'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 2,
    title: 'Casa em Condomínio Fechado',
    price: 'R$ 1.200.000',
    location: 'Alphaville, Barueri - SP',
    beds: 4,
    baths: 3,
    area: '250m²',
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/221027/pexels-photo-221027.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 3,
    title: 'Flat Moderno para Investimento',
    price: 'R$ 320.000',
    location: 'Vila Olímpia, São Paulo - SP',
    beds: 1,
    baths: 1,
    area: '45m²',
    images: [
      'https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  }
];

const Imoveis: React.FC<ImoveisProps> = ({ onSelectImovel }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Imóveis à Venda</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre o imóvel perfeito para você morar ou investir, com as melhores condições de negociação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imoveis.map((imovel) => (
            <div key={imovel.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative h-64 cursor-pointer" onClick={() => onSelectImovel(imovel)}>
                <img 
                  src={imovel.images[0]} 
                  alt={imovel.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white font-bold px-3 py-1 rounded-lg shadow-lg">
                  {imovel.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{imovel.title}</h3>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-1 text-blue-600" />
                  <span className="text-sm">{imovel.location}</span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 border-t border-b border-gray-100 py-4 mb-6">
                  <div className="flex flex-col items-center">
                    <Bed className="w-5 h-5 text-gray-400 mb-1" />
                    <span className="text-sm font-semibold text-gray-700">{imovel.beds} Quartos</span>
                  </div>
                  <div className="flex flex-col items-center border-l border-r border-gray-100">
                    <Bath className="w-5 h-5 text-gray-400 mb-1" />
                    <span className="text-sm font-semibold text-gray-700">{imovel.baths} Banheiros</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Square className="w-5 h-5 text-gray-400 mb-1" />
                    <span className="text-sm font-semibold text-gray-700">{imovel.area}</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => onSelectImovel(imovel)}
                    className="w-full flex items-center justify-center bg-blue-50 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors"
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Ver Detalhes
                  </button>

                  <a 
                    href={`https://wa.me/5511987654321?text=Olá! Tenho interesse no imóvel: ${imovel.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Tenho Interesse
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Imoveis;