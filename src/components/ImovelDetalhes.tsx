import React, { useState } from 'react';
import { MapPin, Bed, Bath, Square, ArrowLeft, Phone, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'; //

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
  const [fotoAtiva, setFotoAtiva] = useState(imovel.images[0]);

  // Função para navegar entre as imagens
  const navegarImagem = (direcao: 'proxima' | 'anterior') => {
    const indiceAtual = imovel.images.indexOf(fotoAtiva);
    let novoIndice;

    if (direcao === 'proxima') {
      novoIndice = (indiceAtual + 1) % imovel.images.length;
    } else {
      novoIndice = (indiceAtual - 1 + imovel.images.length) % imovel.images.length;
    }
    setFotoAtiva(imovel.images[novoIndice]);
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
            {/* Container da imagem principal com botões de navegação */}
            <div className="relative group rounded-3xl overflow-hidden shadow-xl bg-gray-200 mb-4 h-[500px]">
              <img src={fotoAtiva} className="w-full h-full object-cover transition-all duration-500" alt="Foto principal" />
              
              {/* Botão Anterior */}
              <button 
                onClick={() => navegarImagem('anterior')}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 text-blue-600"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Botão Próximo */}
              <button 
                onClick={() => navegarImagem('proxima')}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 text-blue-600"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            <div className="grid grid-cols-5 gap-3">
              {imovel.images.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setFotoAtiva(img)}
                  className={`h-24 rounded-xl overflow-hidden border-2 transition-all ${fotoAtiva === img ? 'border-blue-600 scale-95' : 'border-transparent opacity-60'}`}
                >
                  <img src={img} className="w-full h-full object-cover" alt={`Miniatura ${i}`} />
                </button>
              ))}
            </div>

            <div className="mt-12 bg-gray-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Sobre este imóvel</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Este impecável {imovel.title} em {imovel.location} oferece o que há de mais moderno em arquitetura e conforto. 
                Planejado para maximizar cada m², o imóvel conta com acabamentos premium e localização estratégica.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white border border-gray-100 shadow-2xl p-8 rounded-3xl">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Oportunidade Única</span>
              <h1 className="text-3xl font-bold text-gray-800 mt-2 mb-4">{imovel.title}</h1>
              
              <div className="text-4xl font-black text-blue-600 mb-8">
                {imovel.price}
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center text-gray-500"><Bed className="w-5 h-5 mr-2" /> Quartos</div>
                  <div className="font-bold text-gray-800">{imovel.beds}</div>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center text-gray-500"><Bath className="w-5 h-5 mr-2" /> Banheiros</div>
                  <div className="font-bold text-gray-800">{imovel.baths}</div>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center text-gray-500"><Square className="w-5 h-5 mr-2" /> Área</div>
                  <div className="font-bold text-gray-800">{imovel.area}</div>
                </div>
              </div>

              <a 
                href={`https://wa.me/5511987654321?text=Interesse no imóvel: ${imovel.title}`}
                target="_blank"
                className="block w-full text-center bg-green-600 text-white py-4 rounded-2xl font-bold text-xl hover:bg-green-700 transition-all shadow-lg shadow-green-100"
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