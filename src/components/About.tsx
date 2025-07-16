import React from 'react';
import { Target, Users, Award, Heart } from 'lucide-react';
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
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">R$ 50M+</div>
                <div className="text-sm text-gray-600">Liberados</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
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

        <div>
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