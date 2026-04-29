import React, { useMemo, useState } from 'react';
import { ArrowLeft, Bath, Bed, ChevronLeft, ChevronRight, Square } from 'lucide-react';

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

  const imagens = useMemo(() => imovel.images ?? [], [imovel.images]);
  const fotoAtual = imagens[indexFoto] ?? imagens[0] ?? '';

  const proximaFoto = () => {
    if (imagens.length <= 1) return;
    setIndexFoto((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
  };

  const fotoAnterior = () => {
    if (imagens.length <= 1) return;
    setIndexFoto((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  };

  return (
    <section className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <button
          onClick={onBack}
          className="mb-8 flex items-center font-bold text-blue-600 transition-transform hover:-translate-x-1"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Voltar para a vitrine
        </button>

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="group relative mb-4 h-[500px] overflow-hidden rounded-3xl bg-gray-200 shadow-xl">
              {fotoAtual ? (
                <img
                  src={fotoAtual}
                  className="h-full w-full object-cover transition-all duration-500"
                  alt={`Foto de ${imovel.title}`}
                />
              ) : (
                <div className="flex h-full items-center justify-center text-gray-500">
                  Nenhuma imagem disponivel
                </div>
              )}

              {imagens.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={fotoAnterior}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition-all group-hover:opacity-100 md:opacity-0"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-800" />
                  </button>

                  <button
                    type="button"
                    onClick={proximaFoto}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition-all group-hover:opacity-100 md:opacity-0"
                  >
                    <ChevronRight className="h-6 w-6 text-gray-800" />
                  </button>

                  <div className="absolute bottom-4 right-4 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
                    {indexFoto + 1} / {imagens.length}
                  </div>
                </>
              )}
            </div>

            {imagens.length > 0 && (
              <div className="grid grid-cols-5 gap-3">
                {imagens.map((img, i) => (
                  <button
                    key={`${imovel.id}-${i}`}
                    type="button"
                    onClick={() => setIndexFoto(i)}
                    className={`h-24 overflow-hidden rounded-xl border-2 transition-all ${
                      indexFoto === i
                        ? 'scale-95 border-blue-600'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} className="h-full w-full object-cover" alt={`Miniatura ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}

            <div className="mt-12 rounded-3xl bg-gray-50 p-8">
              <h3 className="mb-6 text-2xl font-bold">Sobre este imovel</h3>
              <p className="text-lg leading-relaxed text-gray-600">
                Este impecavel {imovel.title} em {imovel.location} oferece o que ha de mais
                moderno em arquitetura e conforto.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-28 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl">
              <h1 className="mb-4 text-3xl font-bold text-gray-800">{imovel.title}</h1>
              <div className="mb-8 text-4xl font-black text-blue-600">{imovel.price}</div>

              <div className="mb-8 space-y-4">
                <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">
                  <span className="flex items-center text-gray-500">
                    <Bed className="mr-2 h-5 w-5" />
                    Quartos
                  </span>
                  <span className="font-bold">{imovel.beds}</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">
                  <span className="flex items-center text-gray-500">
                    <Bath className="mr-2 h-5 w-5" />
                    Banheiros
                  </span>
                  <span className="font-bold">{imovel.baths}</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">
                  <span className="flex items-center text-gray-500">
                    <Square className="mr-2 h-5 w-5" />
                    Area
                  </span>
                  <span className="font-bold">{imovel.area}</span>
                </div>
              </div>

              <a
                href={`https://wa.me/5511987654321?text=Interesse no imovel: ${imovel.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-2xl bg-green-600 py-4 text-center text-xl font-bold text-white shadow-lg transition-all hover:bg-green-700"
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

