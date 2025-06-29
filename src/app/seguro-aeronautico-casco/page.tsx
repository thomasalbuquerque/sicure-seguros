'use client';
import Navbar from '@/components/Navbar/Navbar';
import { BsAirplaneFill, BsGear, BsShieldCheck, BsTools } from 'react-icons/bs';
import { MdSecurity, MdSupportAgent, MdEngineering, MdFlightTakeoff } from 'react-icons/md';
import { IoAirplane, IoShieldCheckmark, IoFlame, IoThunderstorm } from 'react-icons/io5';
import { FaShieldHalved, FaWrench, FaUsers, FaPlane, FaToolbox, FaMoneyBillWave } from 'react-icons/fa6';
import { RiMoneyDollarCircleFill, RiFlightTakeoffFill, RiSettings3Line, RiShieldStarLine } from 'react-icons/ri';
import { GiCommercialAirplane, GiAirplaneDeparture, GiAirplaneArrival } from 'react-icons/gi';
import { HiOutlineSparkles, HiOutlineCog } from 'react-icons/hi2';
import { TbPlane, TbEngine, TbShield } from 'react-icons/tb';

export default function SeguroAeronauticoCasco() {
  return (
    <main className='flex min-h-screen flex-col px-6 py-8 md:px-24 md:py-10 items-center'>
      <Navbar />

      {/* Hero Section */}
      <section className='w-full max-w-7xl mt-12 mb-16'>
        <div className='text-center'>
          <div className='flex justify-center mb-6'>
            <BsAirplaneFill className='w-16 h-16 text-primary' />
          </div>
          <h1 className='text-4xl md:text-5xl font-bold text-secondary mb-4 font-Title'>Seguro Aeronáutico do Tipo Casco</h1>
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-Text mb-4'>
            Proteção completa para aeronaves contra danos físicos. Essencial para proprietários e operadores de aeronaves comerciais, particulares ou
            corporativas, cobrindo prejuízos relacionados à estrutura física da aeronave.
          </p>
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-Text'>
            Cobertura abrangente contra acidentes, colisões, incêndios, furtos e outros riscos que podem afetar sua aeronave.
          </p>
        </div>
      </section>

      {/* What is Aviation Hull Insurance */}
      <section className='w-full max-w-7xl mb-16'>
        <div className='bg-white rounded-lg shadow-lg p-8 md:p-12'>
          <h2 className='text-3xl font-bold text-secondary mb-6 font-Title'>O que é o Seguro Aeronáutico do Tipo Casco?</h2>
          <div className='space-y-4 text-gray-700 font-Text'>
            <p className='text-lg leading-relaxed'>
              O seguro de casco aeronáutico é uma apólice que cobre danos materiais à aeronave segurada. Ele protege contra uma ampla gama de riscos que podem
              afetar a estrutura física da aeronave, como acidentes, colisões, incêndios, furtos, entre outros.
            </p>
            <p className='text-lg leading-relaxed'>
              O termo "casco" refere-se à fuselagem, asas, motores e outros componentes físicos da aeronave, garantindo proteção financeira contra prejuízos
              significativos que possam comprometer o investimento e as operações.
            </p>
          </div>
        </div>
      </section>

      {/* How to Contract */}
      <section className='w-full max-w-7xl mb-16'>
        <h2 className='text-3xl font-bold text-secondary mb-8 text-center font-Title'>Como Contratar o Seguro de Casco Aeronáutico</h2>

        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          <div className='bg-blue-50 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-secondary mb-4 font-Title'>1. Avaliação da Aeronave</h3>
            <p className='text-gray-700 font-Text'>
              A seguradora realiza uma análise detalhada da aeronave, incluindo seu valor, idade, uso e histórico de manutenção.
            </p>
          </div>

          <div className='bg-green-50 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-secondary mb-4 font-Title'>2. Definição das Coberturas</h3>
            <p className='text-gray-700 font-Text'>
              O proprietário ou operador escolhe as coberturas básicas e adicionais de acordo com suas necessidades específicas.
            </p>
          </div>

          <div className='bg-yellow-50 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-secondary mb-4 font-Title'>3. Cotação Personalizada</h3>
            <p className='text-gray-700 font-Text'>
              A seguradora apresenta uma proposta com o valor do prêmio e as condições da apólice baseadas na avaliação.
            </p>
          </div>

          <div className='bg-purple-50 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-secondary mb-4 font-Title'>4. Contratação</h3>
            <p className='text-gray-700 font-Text'>Após a aprovação da proposta, o seguro é formalizado e a aeronave passa a estar completamente protegida.</p>
          </div>
        </div>
      </section>

      {/* Basic Coverages */}
      <section className='w-full max-w-7xl mb-16'>
        <h2 className='text-3xl font-bold text-secondary mb-8 text-center font-Title'>Coberturas Básicas</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <GiCommercialAirplane className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Danos à Aeronave em Acidente</h3>
            <p className='text-gray-600 font-Text'>Cobre danos causados por colisões, quedas ou outros acidentes durante voo, pouso ou decolagem.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <TbPlane className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Danos em Solo</h3>
            <p className='text-gray-600 font-Text'>Proteção contra danos que ocorram enquanto a aeronave está estacionada ou em manutenção.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <IoFlame className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Incêndio e Explosão</h3>
            <p className='text-gray-600 font-Text'>Cobre prejuízos causados por incêndios ou explosões, seja no solo ou em voo.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <MdSecurity className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Roubo ou Furto Qualificado</h3>
            <p className='text-gray-600 font-Text'>Indenização em caso de roubo ou furto da aeronave ou de partes dela.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <IoThunderstorm className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Danos por Desastres Naturais</h3>
            <p className='text-gray-600 font-Text'>Proteção contra tempestades, granizo, vendavais e outros fenômenos climáticos.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <BsShieldCheck className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Cobertura Abrangente</h3>
            <p className='text-gray-600 font-Text'>Proteção completa da estrutura física da aeronave contra diversos riscos operacionais.</p>
          </div>
        </div>
      </section>

      {/* Additional Coverages */}
      <section className='w-full max-w-7xl mb-16'>
        <h2 className='text-3xl font-bold text-secondary mb-8 text-center font-Title'>Coberturas Adicionais (Opcional)</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <TbEngine className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Danos aos Motores</h3>
            <p className='text-gray-600 font-Text'>Cobertura específica para danos causados aos motores da aeronave.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <HiOutlineCog className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Equipamentos e Avionics</h3>
            <p className='text-gray-600 font-Text'>Proteção para equipamentos eletrônicos e sistemas de navegação.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <RiSettings3Line className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Transporte e Recolocação</h3>
            <p className='text-gray-600 font-Text'>Cobre custos de transporte da aeronave para reparos após sinistro.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <TbShield className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Guerra e Terrorismo</h3>
            <p className='text-gray-600 font-Text'>Proteção contra danos por conflitos armados, terrorismo ou sabotagem.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <MdEngineering className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Danos por Erro de Operação</h3>
            <p className='text-gray-600 font-Text'>Indenização por danos causados por erro humano durante operação.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <MdFlightTakeoff className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Treinamento e Testes</h3>
            <p className='text-gray-600 font-Text'>Proteção para aeronaves utilizadas em treinamentos ou voos de teste.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <FaToolbox className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Manutenção Especializada</h3>
            <p className='text-gray-600 font-Text'>Cobertura para danos durante procedimentos de manutenção especializada.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <HiOutlineSparkles className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Cobertura Personalizada</h3>
            <p className='text-gray-600 font-Text'>Proteções específicas conforme necessidades operacionais da aeronave.</p>
          </div>
        </div>
      </section>

      {/* How Compensation Works */}
      <section className='w-full max-w-7xl mb-16'>
        <div className='bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-8 md:p-12 text-white'>
          <h2 className='text-3xl font-bold mb-6 font-Title'>Como Funciona a Indenização</h2>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-white bg-opacity-20 rounded-lg p-6'>
              <h3 className='text-xl font-bold mb-4 font-Title'>Perda Total</h3>
              <p className='font-Text'>
                Se os danos à aeronave forem tão graves que o custo de reparo ultrapasse o valor segurado, a seguradora paga o valor total da apólice ao
                segurado.
              </p>
            </div>

            <div className='bg-white bg-opacity-20 rounded-lg p-6'>
              <h3 className='text-xl font-bold mb-4 font-Title'>Perda Parcial</h3>
              <p className='font-Text'>
                Se os danos forem reparáveis, a seguradora cobre os custos de reparo, respeitando os limites e condições estabelecidos na apólice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aircraft Types */}
      <section className='w-full max-w-7xl mb-16'>
        <h2 className='text-3xl font-bold text-secondary mb-8 text-center font-Title'>Tipos de Aeronaves Atendidas</h2>

        <div className='grid md:grid-cols-3 gap-6'>
          <div className='bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white text-center'>
            <GiAirplaneDeparture className='w-12 h-12 mx-auto mb-4' />
            <h3 className='text-xl font-bold mb-2 font-Title'>Aeronaves Comerciais</h3>
            <p className='font-Text'>Aviões utilizados para transporte de passageiros e cargas em operações comerciais regulares.</p>
          </div>

          <div className='bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white text-center'>
            <IoAirplane className='w-12 h-12 mx-auto mb-4' />
            <h3 className='text-xl font-bold mb-2 font-Title'>Aeronaves Particulares</h3>
            <p className='font-Text'>Aviões privados para uso pessoal, familiar ou executivo de pequeno e médio porte.</p>
          </div>

          <div className='bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white text-center'>
            <GiAirplaneArrival className='w-12 h-12 mx-auto mb-4' />
            <h3 className='text-xl font-bold mb-2 font-Title'>Aeronaves Corporativas</h3>
            <p className='font-Text'>Aviões empresariais utilizados para transporte executivo e operações corporativas.</p>
          </div>
        </div>
      </section>

      {/* Cost Factors */}
      <section className='w-full max-w-7xl mb-16'>
        <div className='bg-gradient-to-r from-orange-500 to-red-600 rounded-lg p-8 md:p-12 text-white'>
          <h2 className='text-3xl font-bold mb-6 font-Title'>Fatores que Influenciam o Custo</h2>

          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-xl font-bold mb-4 font-Title'>Características da Aeronave</h3>
              <ul className='space-y-2 font-Text'>
                <li>• Tipo e modelo da aeronave</li>
                <li>• Idade e estado de conservação</li>
                <li>• Valor de mercado da aeronave</li>
                <li>• Histórico de manutenção</li>
                <li>• Equipamentos e avionics instalados</li>
                <li>• Capacidade e uso pretendido</li>
              </ul>
            </div>

            <div>
              <h3 className='text-xl font-bold mb-4 font-Title'>Operação e Riscos</h3>
              <ul className='space-y-2 font-Text'>
                <li>• Finalidade de uso (comercial, particular, corporativo)</li>
                <li>• Histórico de sinistros do operador</li>
                <li>• Localização e condições de operação</li>
                <li>• Coberturas adicionais contratadas</li>
                <li>• Rotas e aeroportos utilizados</li>
                <li>• Experiência e qualificação dos pilotos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className='w-full max-w-7xl mb-16'>
        <h2 className='text-3xl font-bold text-secondary mb-8 text-center font-Title'>Vantagens do Seguro Aeronáutico de Casco</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='text-center'>
            <div className='bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <IoShieldCheckmark className='w-8 h-8 text-blue-600' />
            </div>
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Proteção Financeira</h3>
            <p className='text-gray-600 font-Text'>Garante que não haverá prejuízos financeiros significativos em caso de danos.</p>
          </div>

          <div className='text-center'>
            <div className='bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <FaShieldHalved className='w-8 h-8 text-green-600' />
            </div>
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Continuidade Operacional</h3>
            <p className='text-gray-600 font-Text'>Permite reparo ou substituição rápida, minimizando interrupções nas operações.</p>
          </div>

          <div className='text-center'>
            <div className='bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <RiShieldStarLine className='w-8 h-8 text-purple-600' />
            </div>
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Cobertura Abrangente</h3>
            <p className='text-gray-600 font-Text'>Protege contra ampla gama de riscos, desde acidentes até desastres naturais.</p>
          </div>

          <div className='text-center'>
            <div className='bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <MdSupportAgent className='w-8 h-8 text-yellow-600' />
            </div>
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Flexibilidade</h3>
            <p className='text-gray-600 font-Text'>Pode ser personalizado conforme necessidades específicas do proprietário.</p>
          </div>
        </div>
      </section>

      {/* Why Contract */}
      <section className='w-full max-w-7xl mb-16'>
        <div className='bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-8 md:p-12 text-white'>
          <h2 className='text-3xl font-bold mb-6 text-center font-Title'>Por Que Contratar o Seguro de Casco Aeronáutico?</h2>

          <div className='grid md:grid-cols-3 gap-6'>
            <div className='text-center'>
              <RiMoneyDollarCircleFill className='w-12 h-12 mx-auto mb-4' />
              <h3 className='text-xl font-bold mb-2 font-Title'>Segurança Patrimonial</h3>
              <p className='font-Text'>Protege o alto investimento feito na aquisição da aeronave.</p>
            </div>

            <div className='text-center'>
              <BsGear className='w-12 h-12 mx-auto mb-4' />
              <h3 className='text-xl font-bold mb-2 font-Title'>Obrigatoriedade</h3>
              <p className='font-Text'>Em muitos casos, é exigido por regulamentações ou contratos de financiamento.</p>
            </div>

            <div className='text-center'>
              <FaPlane className='w-12 h-12 mx-auto mb-4' />
              <h3 className='text-xl font-bold mb-2 font-Title'>Tranquilidade</h3>
              <p className='font-Text'>Garante que não haverá custos elevados de reparo ou substituição em imprevistos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='w-full max-w-4xl text-center'>
        <div className='bg-primary rounded-lg p-8 md:p-12 text-white'>
          <h2 className='text-3xl font-bold mb-4 font-Title'>Proteja Sua Aeronave Hoje Mesmo</h2>
          <p className='text-xl mb-6 font-Text'>
            Faça uma cotação personalizada e encontre o seguro aeronáutico de casco ideal para sua aeronave, com coberturas sob medida.
          </p>
          <a
            href='https://api.whatsapp.com/send?phone=5512996713530&text=Olá! Gostaria de fazer uma cotação de seguro aeronáutico (casco).'
            target='_blank'
            className='inline-block bg-white text-primary px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors font-Title'
          >
            Fazer Cotação Agora
          </a>
        </div>
      </section>
    </main>
  );
}
