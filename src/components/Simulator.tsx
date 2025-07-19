import React, { useState } from 'react';
import { Calculator, MessageCircle } from 'lucide-react';

interface SimulatorProps{
  onSectionChange: (section:string) => void
}


const Simulator: React.FC<SimulatorProps> = ({onSectionChange}) => {
  const [amount, setAmount] = useState<number>(10000);
  const [term, setTerm] = useState<number>(12);
  const [interestRate] = useState<number>(1.5);
  const [showApplication, setShowApplication] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    income: '',
    product: 'microcredito'
  });

  const calculateInstallment = () => {
    const monthlyRate = interestRate / 100;
    const installment = (amount * monthlyRate * Math.pow(1 + monthlyRate, term)) / 
                       (Math.pow(1 + monthlyRate, term) - 1);
    return installment;
  };

  const totalAmount = calculateInstallment() * term;
  const totalInterest = totalAmount - amount;


  return (
    <section className="bg-gray-50">
  <div className="text-center py-20 px-4">
    <h2 className="text-4xl font-bold text-gray-800 mb-4">Simulador de Crédito</h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto ">
      Descubra quanto você pode pagar mensalmente e faça sua solicitação
    </p>
  </div>

  <div className="flex items-center justify-center mb-16 bg-gray-50 1px-4">
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-[85rem]">
      <div className="flex items-center mb-6">
        <Calculator className="w-8 h-8 text-blue-600 mr-3" />
        <h3 className="text-2xl font-bold text-gray-800">Calcule sua Parcela</h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Valor do Empréstimo
          </label>
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>R$ 1.000</span>
            <span className="font-semibold text-blue-600">R$ {amount.toLocaleString()}</span>
            <span>R$ 100.000</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Prazo (meses)
          </label>
          <input
            type="range"
            min="6"
            max="60"
            step="6"
            value={term}
            onChange={(e) => setTerm(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>6 meses</span>
            <span className="font-semibold text-blue-600">{term} meses</span>
            <span>60 meses</span>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-4">Resumo da Simulação</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Valor solicitado:</span>
              <span className="font-semibold">R$ {amount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Taxa de juros:</span>
              <span className="font-semibold">{interestRate}% a.m.</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Prazo:</span>
              <span className="font-semibold">{term} meses</span>
            </div>
            <div className="border-t pt-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Valor da parcela:</span>
                <span className="font-bold text-2xl text-blue-600">
                  R$ {calculateInstallment().toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
                </span>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Total a pagar:</span>
              <span className="font-semibold">
                R$ {totalAmount.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Total de juros:</span>
              <span className="font-semibold">
                R$ {totalInterest.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={() => onSectionChange('contact')}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Fale Conosco</span>
        </button>
      </div>
    </div>
  </div>
</section>

  );
};

export default Simulator;