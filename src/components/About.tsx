import React from 'react';
import { Target, Users, Award, Heart, MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { teamMembers } from '../data/teamMembers';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre a CrediFinance</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Há mais de 10 anos transformando vidas através do acesso ao crédito responsável e sustentável
          </p>
        </div>

        {/* Seção de Contato e Localização movida para o TOPO */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Contato e Localização</h3>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Informações de Contato */}
            <div className="flex flex-col items-center text-center">
              <div className="space-y-8 mb-8 w-full">
                
                <div className="flex flex-col items-center space-y-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Telefone</h4>
                    <p className="text-gray-600">(11) 3333-4444</p>
                    <p className="text-gray-600">(11) 9 9999-9999</p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">contato@credifinance.com.br</p>
                    <p className="text-gray-600">atendimento@credifinance.com.br</p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-3">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-gray-600">Sábado: 8h às 12h</p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">WhatsApp</h4>
                    <p className="text-gray-600">(11) 9 8765-4321</p>
                    <a 
                      href="https://wa.me/5511987654321" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block mt-2 px-4 py-2 rounded-lg bg-green-50 text-sm font-medium text-green-600 hover:bg-green-100 transition-colors"
                    >
                      Iniciar conversa
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Unidades */}
            <div className="flex flex-col items-center text-center">
              <h4 className="text-xl font-bold text-gray-800 mb-8">Nossas Unidades</h4>
              <div className="space-y-6 w-full max-w-sm">
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
                  <MapPin className="w-8 h-8 text-blue-600 mb-4" />
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Matriz - São Paulo</h5>
                    <p className="text-gray-600">Av. Paulista, 1000 - Bela Vista</p>
                    <p className="text-gray-600">São Paulo - SP, 01310-100</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
                  <MapPin className="w-8 h-8 text-blue-600 mb-4" />
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Filial - Santos</h5>
                    <p className="text-gray-600">Rua do Comércio, 150 - Centro</p>
                    <p className="text-gray-600">Santos - SP, 11010-140</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
                  <MapPin className="w-8 h-8 text-blue-600 mb-4" />
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Filial - Campinas</h5>
                    <p className="text-gray-600">Av. Francisco Glicério, 500 - Centro</p>
                    <p className="text-gray-600">Campinas - SP, 13012-100</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Restante do conteúdo (História, Valores, Equipe) */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Equipe CrediFinance"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Nossa História</h3>
            <p className="text-lg text-gray-600 mb-6">
              Fundada em 2014, a CrediFinance nasceu com o propósito de democratizar o acesso ao crédito no Brasil. 
              Começamos como uma pequena instituição focada em microcrédito e hoje somos referência nacional em 
              soluções financeiras inclusivas.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Nossa missão é empoderar pessoas e empresas através de produtos financeiros acessíveis, 
              promovendo o desenvolvimento socioeconômico sustentável.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">R$ 50M+</div>
                <div className="text-sm text-gray-600">Liberados</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">15.000+</div>
                <div className="text-sm text-gray-600">Clientes</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-800 mb-2">Missão</h4>
            <p className="text-gray-600">
              Democratizar o acesso ao crédito, promovendo inclusão financeira e desenvolvimento sustentável.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-800 mb-2">Visão</h4>
            <p className="text-gray-600">
              Ser a principal referência em microcrédito e soluções financeiras inclusivas no Brasil.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Award className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-800 mb-2">Excelência</h4>
            <p className="text-gray-600">
              Compromisso com a qualidade, inovação e melhoria contínua dos nossos serviços.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-800 mb-2">Valores</h4>
            <p className="text-gray-600">
              Transparência, ética, responsabilidade social e respeito aos nossos clientes.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Nossa Equipe</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;