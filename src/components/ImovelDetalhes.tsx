import React, { useState } from 'react';
import { MapPin, Bed, Bath, Square, ArrowLeft, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

interface Imovel {
  id: number;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  area: string;
  images: string[];
}

interface ImovelDetalhesProps {
  imovel: Imovel;
  onBack: () => void;
}

const ImovelDetalhes: React.FC<ImovelDetalhesProps> = ({ imovel, onBack }) => {
  const [indexFoto, setIndexFoto] = useState(0);

  // Funções para passar as fotos
  const proximaFoto = () => {
    setIndexFoto((prev) => (prev === imovel.images.length - 1 ? 0 : prev + 1));
  };

  const fotoAnterior = () => {
    setIndexFoto((prev) => (prev === 0 ? imovel.images.length - 1 : prev - 1));
  };

  return (
    <section className="py-12 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <button 
          onClick={onBack}
          className="flex items-center text-blue-600 mb-8 hover:translate-x-[-4px] transition-transform font-bold"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Voltar para a vitrine
        </button>

        <div className="grid lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-8">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-gray-200 mb-4 h-[500px] group">
              <img 
                src={imovel.images[indexFoto]} 
                className="w-full h-full object-cover transition-all duration-500" 
                alt="Foto em destaque" 
              />
              
              <button 
                onClick={fotoAnterior}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>

              <button 
                onClick={proximaFoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>

              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {indexFoto + 1} / {imovel.images.length}
              </div>
            </div>
            
            <div className="grid grid-cols-5 gap-3">
              {imovel.images.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setIndexFoto(i)}
                  className={`h-24 rounded-xl overflow-hidden border-2 transition-all ${indexFoto === i ? 'border-blue-600 scale-95' : 'border-transparent opacity-60'}`}
                >
                  <img src={img} className="w-full h-full object-cover" alt={`Miniatura ${i}`} />
                </button>
              ))}
            </div>

            <div className="mt-12 bg-gray-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Sobre este imóvel</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Este impecável {imovel.title} em {imovel.location} oferece o que há de mais moderno em arquitetura e conforto.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white border border-gray-100 shadow-2xl p-8 rounded-3xl">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{imovel.title}</h1>
              <div className="text-4xl font-black text-blue-600 mb-8">{imovel.price}</div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="flex items-center text-gray-500"><Bed className="w-5 h-5 mr-2" /> Quartos</span>
                  <span className="font-bold">{imovel.beds}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="flex items-center text-gray-500"><Bath className="w-5 h-5 mr-2" /> Banheiros</span>
                  <span className="font-bold">{imovel.baths}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="flex items-center text-gray-500"><Square className="w-5 h-5 mr-2" /> Área</span>
                  <span className="font-bold">{imovel.area}</span>
                </div>
              </div>

              <a 
                href={`https://wa.me/5511987654321?text=Interesse no imóvel: ${imovel.title}`}
                target="_blank"
                className="block w-full text-center bg-green-600 text-white py-4 rounded-2xl font-bold text-xl hover:bg-green-700 transition-all shadow-lg"
              >
                Tenho Interesse
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImovelDetalhes;