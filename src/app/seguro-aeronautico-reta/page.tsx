'use client';
import Navbar from '@/components/Navbar/Navbar';
import { BsShield, BsShieldCheck, BsPeople, BsGear } from 'react-icons/bs';
import { MdSecurity, MdSupportAgent, MdPeople, MdLocalAirport } from 'react-icons/md';
import { IoShieldCheckmark, IoDocumentText, IoPeople, IoShield } from 'react-icons/io5';
import { FaShieldHalved, FaUsers, FaPlane, FaGavel, FaMoneyBillWave, FaHandshake } from 'react-icons/fa6';
import { RiMoneyDollarCircleFill, RiShieldStarLine, RiShieldCheckLine } from 'react-icons/ri';
import { GiCommercialAirplane, GiAirplaneDeparture, GiAirplaneArrival } from 'react-icons/gi';
import { HiOutlineSparkles, HiOutlineScale } from 'react-icons/hi2';
import { TbPlane, TbShield, TbScale } from 'react-icons/tb';

export default function SeguroAeronauticoReta() {
  return (
    <main className='flex min-h-screen flex-col px-6 py-8 md:px-24 md:py-10 items-center'>
      <Navbar />

      {/* Hero Section */}
      <section className='w-full max-w-7xl mt-12 mb-16'>
        <div className='text-center'>
          <div className='flex justify-center mb-6'>
            <BsShield className='w-16 h-16 text-primary' />
          </div>
          <h1 className='text-4xl md:text-5xl font-bold text-secondary mb-4 font-Title'>Seguro Aeronáutico (R.E.T.A.)</h1>
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-Text mb-4'>
            Responsabilidade do Explorador ou Transportador Aéreo - modalidade obrigatória no Brasil que protege operadores contra responsabilidades civis
            decorrentes de danos a terceiros, passageiros, bagagens e cargas.
          </p>
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-Text'>
            Exigido pelo Código Brasileiro de Aeronáutica para todas as aeronaves registradas no país, garantindo proteção completa em operações aéreas.
          </p>
        </div>
      </section>

      {/* What is R.E.T.A. Insurance */}
      <section className='w-full max-w-7xl mb-16'>
        <div className='bg-white rounded-lg shadow-lg p-8 md:p-12'>
          <h2 className='text-3xl font-bold text-secondary mb-6 font-Title'>O que é o Seguro Aeronáutico do Tipo R.E.T.A.?</h2>
          <div className='space-y-4 text-gray-700 font-Text'>
            <p className='text-lg leading-relaxed'>
              O seguro R.E.T.A. (Responsabilidade do Explorador ou Transportador Aéreo) é uma modalidade obrigatória no Brasil, conforme previsto no Código
              Brasileiro de Aeronáutica (Lei nº 7.565/1986). Ele protege o operador contra responsabilidades civis decorrentes de danos causados a terceiros,
              passageiros, bagagens e cargas.
            </p>
            <p className='text-lg leading-relaxed'>
              É obrigatório para todas as aeronaves registradas no Brasil, independentemente de serem de uso comercial, particular ou agrícola, garantindo
              proteção financeira contra indenizações por acidentes aeronáuticos.
            </p>
          </div>
        </div>
      </section>

      {/* How to Contract */}
      <section className='w-full max-w-7xl mb-16'>
        <h2 className='text-3xl font-bold text-secondary mb-8 text-center font-Title'>Como Contratar o Seguro R.E.T.A.</h2>

        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          <div className='bg-blue-50 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-secondary mb-4 font-Title'>1. Avaliação da Aeronave</h3>
            <p className='text-gray-700 font-Text'>
              A seguradora analisa o tipo de aeronave, sua capacidade, uso previsto e histórico de operação do proprietário.
            </p>
          </div>

          <div className='bg-green-50 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-secondary mb-4 font-Title'>2. Definição das Coberturas</h3>
            <p className='text-gray-700 font-Text'>
              O operador escolhe as coberturas básicas obrigatórias e adicionais conforme as necessidades específicas da operação.
            </p>
          </div>

          <div className='bg-yellow-50 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-secondary mb-4 font-Title'>3. Cotação Personalizada</h3>
            <p className='text-gray-700 font-Text'>
              A seguradora apresenta uma proposta com o valor do prêmio e os limites de indenização baseados na avaliação.
            </p>
          </div>

          <div className='bg-purple-50 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-secondary mb-4 font-Title'>4. Contratação</h3>
            <p className='text-gray-700 font-Text'>
              Após aprovação da proposta, o seguro é formalizado e a aeronave passa a estar em conformidade com a legislação.
            </p>
          </div>
        </div>
      </section>

      {/* Basic Coverages */}
      <section className='w-full max-w-7xl mb-16'>
        <h2 className='text-3xl font-bold text-secondary mb-8 text-center font-Title'>Coberturas Básicas Obrigatórias</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-6'>
          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <BsPeople className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Danos a Passageiros</h3>
            <p className='text-gray-600 font-Text'>
              Indenizações por morte ou invalidez permanente de passageiros, incluindo despesas médicas e hospitalares decorrentes de acidentes.
            </p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <IoDocumentText className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Danos a Bagagens e Cargas</h3>
            <p className='text-gray-600 font-Text'>
              Proteção contra perdas ou danos às bagagens e cargas transportadas, incluindo extravio, destruição ou avarias.
            </p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <MdLocalAirport className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Danos a Terceiros no Solo</h3>
            <p className='text-gray-600 font-Text'>
              Cobre danos materiais e pessoais causados a pessoas ou bens no solo em decorrência de acidentes envolvendo a aeronave.
            </p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <IoPeople className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Danos a Tripulantes</h3>
            <p className='text-gray-600 font-Text'>
              Proteção opcional para membros da tripulação em caso de morte, invalidez ou despesas médicas decorrentes de acidentes.
            </p>
          </div>
        </div>
      </section>

      {/* How Compensation Works */}
      <section className='w-full max-w-7xl mb-16'>
        <div className='bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-8 md:p-12 text-white'>
          <h2 className='text-3xl font-bold mb-6 font-Title'>Como Funciona a Indenização</h2>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-white bg-opacity-20 rounded-lg p-6'>
              <h3 className='text-xl font-bold mb-4 font-Title'>Pagamento Direto</h3>
              <p className='font-Text'>
                A indenização é paga diretamente às vítimas ou aos seus beneficiários, de acordo com os limites estabelecidos na apólice, baseados no tipo de
                aeronave e sua capacidade.
              </p>
            </div>

            <div className='bg-white bg-opacity-20 rounded-lg p-6'>
              <h3 className='text-xl font-bold mb-4 font-Title'>Exemplo Prático</h3>
              <p className='font-Text'>
                Se um passageiro sofrer invalidez permanente durante o voo, o seguro cobre custos médicos e paga indenização. Se a aeronave causar danos a
                imóveis no solo, o seguro cobre os reparos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Factors */}
      <section className='w-full max-w-7xl mb-16'>
        <div className='bg-gradient-to-r from-orange-500 to-red-600 rounded-lg p-8 md:p-12 text-white'>
          <h2 className='text-3xl font-bold mb-6 font-Title'>Fatores que Influenciam o Custo</h2>

          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-xl font-bold mb-4 font-Title'>Características da Operação</h3>
              <ul className='space-y-2 font-Text'>
                <li>• Tipo e modelo da aeronave</li>
                <li>• Capacidade de passageiros</li>
                <li>• Uso da aeronave (comercial, particular, agrícola)</li>
                <li>• Histórico de sinistros do operador</li>
                <li>• Rotas e aeroportos utilizados</li>
                <li>• Experiência da tripulação</li>
              </ul>
            </div>

            <div>
              <h3 className='text-xl font-bold mb-4 font-Title'>Coberturas e Limites</h3>
              <ul className='space-y-2 font-Text'>
                <li>• Limites de indenização escolhidos</li>
                <li>• Coberturas adicionais contratadas</li>
                <li>• Valor segurado para cada categoria</li>
                <li>• Franquias aplicáveis</li>
                <li>• Área geográfica de operação</li>
                <li>• Frequência de voos realizados</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className='w-full max-w-7xl mb-16'>
        <h2 className='text-3xl font-bold text-secondary mb-8 text-center font-Title'>Vantagens do Seguro R.E.T.A.</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='text-center'>
            <div className='bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <FaGavel className='w-8 h-8 text-blue-600' />
            </div>
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Cumprimento Legal</h3>
            <p className='text-gray-600 font-Text'>Obrigatório por lei, garantindo conformidade com a legislação aeronáutica brasileira.</p>
          </div>

          <div className='text-center'>
            <div className='bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <FaShieldHalved className='w-8 h-8 text-green-600' />
            </div>
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Proteção Financeira</h3>
            <p className='text-gray-600 font-Text'>Evita custos elevados de indenizações em caso de acidentes aeronáuticos.</p>
          </div>

          <div className='text-center'>
            <div className='bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <RiShieldStarLine className='w-8 h-8 text-purple-600' />
            </div>
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Cobertura Abrangente</h3>
            <p className='text-gray-600 font-Text'>Protege contra ampla gama de responsabilidades civis em operações aéreas.</p>
          </div>

          <div className='text-center'>
            <div className='bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <FaHandshake className='w-8 h-8 text-yellow-600' />
            </div>
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Tranquilidade</h3>
            <p className='text-gray-600 font-Text'>Garante indenização rápida e justa às vítimas de acidentes aeronáuticos.</p>
          </div>
        </div>
      </section>

      {/* Common Exclusions */}
      <section className='w-full max-w-7xl mb-16'>
        <h2 className='text-3xl font-bold text-secondary mb-8 text-center font-Title'>Exclusões Comuns</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='bg-red-50 rounded-lg p-6 text-center'>
            <HiOutlineScale className='w-12 h-12 text-red-500 mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Atos Intencionais</h3>
            <p className='text-gray-600 font-Text'>Danos causados intencionalmente pelo operador ou tripulação não são cobertos.</p>
          </div>

          <div className='bg-red-50 rounded-lg p-6 text-center'>
            <BsGear className='w-12 h-12 text-red-500 mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Operação Irregular</h3>
            <p className='text-gray-600 font-Text'>Uso da aeronave fora das condições previstas na apólice ou sem autorizações.</p>
          </div>

          <div className='bg-red-50 rounded-lg p-6 text-center'>
            <TbShield className='w-12 h-12 text-red-500 mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Guerra e Terrorismo</h3>
            <p className='text-gray-600 font-Text'>Excluídos, a menos que cobertura adicional específica seja contratada.</p>
          </div>

          <div className='bg-red-50 rounded-lg p-6 text-center'>
            <MdSecurity className='w-12 h-12 text-red-500 mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Desgaste Natural</h3>
            <p className='text-gray-600 font-Text'>Danos causados pelo uso normal da aeronave ou desgaste de peças.</p>
          </div>

          <div className='bg-red-50 rounded-lg p-6 text-center'>
            <IoShield className='w-12 h-12 text-red-500 mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Carga Perigosa</h3>
            <p className='text-gray-600 font-Text'>Danos por transporte de materiais perigosos, exceto se especificado na apólice.</p>
          </div>

          <div className='bg-red-50 rounded-lg p-6 text-center'>
            <TbScale className='w-12 h-12 text-red-500 mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Multas e Penalidades</h3>
            <p className='text-gray-600 font-Text'>Sanções aplicadas por órgãos reguladores não são cobertas pelo seguro.</p>
          </div>
        </div>
      </section>

      {/* Aircraft Types */}
      <section className='w-full max-w-7xl mb-16'>
        <h2 className='text-3xl font-bold text-secondary mb-8 text-center font-Title'>Tipos de Operação Atendidas</h2>

        <div className='grid md:grid-cols-3 gap-6'>
          <div className='bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white text-center'>
            <GiAirplaneDeparture className='w-12 h-12 mx-auto mb-4' />
            <h3 className='text-xl font-bold mb-2 font-Title'>Transporte Comercial</h3>
            <p className='font-Text'>Aeronaves utilizadas para transporte regular ou não regular de passageiros e cargas.</p>
          </div>

          <div className='bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white text-center'>
            <TbPlane className='w-12 h-12 mx-auto mb-4' />
            <h3 className='text-xl font-bold mb-2 font-Title'>Aviação Particular</h3>
            <p className='font-Text'>Aeronaves privadas para uso pessoal, familiar ou executivo de pessoas físicas.</p>
          </div>

          <div className='bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white text-center'>
            <GiAirplaneArrival className='w-12 h-12 mx-auto mb-4' />
            <h3 className='text-xl font-bold mb-2 font-Title'>Aviação Agrícola</h3>
            <p className='font-Text'>Aeronaves utilizadas em atividades agrícolas como pulverização e semeadura aérea.</p>
          </div>
        </div>
      </section>

      {/* Why Contract */}
      <section className='w-full max-w-7xl mb-16'>
        <div className='bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-8 md:p-12 text-white'>
          <h2 className='text-3xl font-bold mb-6 text-center font-Title'>Por Que Contratar o Seguro R.E.T.A.?</h2>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='text-center'>
              <FaGavel className='w-12 h-12 mx-auto mb-4' />
              <h3 className='text-xl font-bold mb-2 font-Title'>Obrigatoriedade Legal</h3>
              <p className='font-Text'>Exigido por lei para todas as aeronaves registradas no Brasil.</p>
            </div>

            <div className='text-center'>
              <RiShieldCheckLine className='w-12 h-12 mx-auto mb-4' />
              <h3 className='text-xl font-bold mb-2 font-Title'>Proteção Contra Riscos</h3>
              <p className='font-Text'>Garante proteção contra responsabilidades civis em acidentes.</p>
            </div>

            <div className='text-center'>
              <FaUsers className='w-12 h-12 mx-auto mb-4' />
              <h3 className='text-xl font-bold mb-2 font-Title'>Segurança para Terceiros</h3>
              <p className='font-Text'>Demonstra compromisso com segurança de passageiros e terceiros.</p>
            </div>

            <div className='text-center'>
              <MdSupportAgent className='w-12 h-12 mx-auto mb-4' />
              <h3 className='text-xl font-bold mb-2 font-Title'>Tranquilidade Operacional</h3>
              <p className='font-Text'>Permite foco nas operações com proteção contra imprevistos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='w-full max-w-4xl text-center'>
        <div className='bg-primary rounded-lg p-8 md:p-12 text-white'>
          <h2 className='text-3xl font-bold mb-4 font-Title'>Garanta Sua Conformidade Legal Hoje</h2>
          <p className='text-xl mb-6 font-Text'>
            Faça uma cotação do seguro R.E.T.A. e mantenha sua operação aeronáutica em conformidade com a legislação brasileira, com cobertura completa e
            personalizada.
          </p>
          <a
            href='https://api.whatsapp.com/send?phone=5512996713530&text=Olá! Gostaria de fazer uma cotação de seguro aeronáutico R.E.T.A.'
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
