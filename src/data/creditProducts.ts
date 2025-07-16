import { CreditProduct } from '../types';

export const creditProducts: CreditProduct[] = [
  {
    id: 'microcredito',
    name: 'Microcrédito',
    description: 'Crédito rápido e acessível para pequenos empreendedores',
    minAmount: 1000,
    maxAmount: 50000,
    minTerm: 6,
    maxTerm: 24,
    gracePeriod: '30 dias',
    interestRate: '1,5% a.m.',
    requirements: [
      'CPF e RG',
      'Comprovante de renda',
      'Comprovante de residência',
      'Documento da empresa (MEI/CNPJ)'
    ],
    icon: 'CreditCard'
  },
  {
    id: 'credisocial',
    name: 'CrediSocial',
    description: 'Crédito social para famílias de baixa renda',
    minAmount: 500,
    maxAmount: 20000,
    minTerm: 12,
    maxTerm: 36,
    gracePeriod: '60 dias',
    interestRate: '0,8% a.m.',
    requirements: [
      'CPF e RG',
      'Comprovante de renda familiar',
      'Cadastro Único (CadÚnico)',
      'Comprovante de residência'
    ],
    icon: 'Users'
  },
  {
    id: 'juro-zero',
    name: 'Juro Zero',
    description: 'Crédito sem juros para negócios inovadores',
    minAmount: 5000,
    maxAmount: 100000,
    minTerm: 12,
    maxTerm: 48,
    gracePeriod: '90 dias',
    interestRate: '0% a.m.',
    requirements: [
      'Plano de negócios',
      'CNPJ ativo',
      'Comprovante de faturamento',
      'Projeto de inovação aprovado'
    ],
    icon: 'TrendingUp'
  },
  {
    id: 'capital-giro',
    name: 'Capital de Giro',
    description: 'Crédito para manter seu negócio funcionando',
    minAmount: 10000,
    maxAmount: 500000,
    minTerm: 6,
    maxTerm: 60,
    gracePeriod: '30 dias',
    interestRate: '1,2% a.m.',
    requirements: [
      'CNPJ ativo há mais de 1 ano',
      'Faturamento mínimo de R$ 20.000',
      'Balanço patrimonial',
      'Demonstrativo de resultado'
    ],
    icon: 'Building'
  }
];