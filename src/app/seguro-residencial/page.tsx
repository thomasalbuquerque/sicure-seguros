'use client';
import Navbar from '@/components/Navbar/Navbar';
import { IoHome, IoShieldCheckmark, IoFlame, IoWaterOutline } from 'react-icons/io5';
import { MdLocalHospital, MdGavel, MdSupportAgent, MdSecurity } from 'react-icons/md';
import { FaShieldHalved, FaUserShield, FaWrench, FaBolt } from 'react-icons/fa6';
import { RiMoneyDollarCircleFill, RiThunderstormsLine } from 'react-icons/ri';
import { GiHouse } from 'react-icons/gi';
import { BiSolidBuildingHouse } from 'react-icons/bi';

export default function SeguroResidencial() {
  return (
    <main className='flex min-h-screen flex-col px-6 py-8 md:px-24 md:py-10 items-center'>
      <Navbar />

      {/* Hero Section */}
      <section className='w-full max-w-7xl mt-12 mb-16'>
        <div className='text-center'>
          <div className='flex justify-center mb-6'>
            <IoHome className='w-16 h-16 text-primary' />
          </div>
          <h1 className='text-4xl md:text-5xl font-bold text-secondary mb-4 font-Title'>Seguro Residencial</h1>
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-Text mb-4'>
            Proteja seu lar e sua família com a melhor cobertura residencial do mercado brasileiro. Mais de 15 anos de experiência garantindo segurança e
            tranquilidade para sua casa.
          </p>
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-Text'>
            Oferecemos proteção completa contra incêndios, roubos, danos elétricos e muito mais, com atendimento 24 horas.
          </p>
        </div>
      </section>

      {/* What is Home Insurance */}
      <section className='w-full max-w-7xl mb-16'>
        <div className='bg-white rounded-lg shadow-lg p-8 md:p-12'>
          <h2 className='text-3xl font-bold text-secondary mb-6 font-Title'>Como funciona o Seguro Residencial?</h2>
          <div className='space-y-4 text-gray-700 font-Text'>
            <p className='text-lg leading-relaxed'>
              O seguro residencial é uma proteção essencial que garante indenização em caso de sinistros que afetem sua residência. No Brasil, este tipo de
              seguro tem ganhado cada vez mais importância devido ao aumento da criminalidade urbana e eventos climáticos extremos.
            </p>
            <p className='text-lg leading-relaxed'>
              Ao contratar um seguro residencial, você paga um prêmio mensal ou anual e, em contrapartida, a seguradora se compromete a indenizar ou reparar os
              danos cobertos pela apólice, protegendo seu patrimônio e proporcionando tranquilidade para você e sua família.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className='w-full max-w-7xl mb-16'>
        <h2 className='text-3xl font-bold text-secondary mb-8 text-center font-Title'>Passo a passo do funcionamento</h2>

        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          <div className='bg-blue-50 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-secondary mb-4 font-Title'>1. Contratação</h3>
            <p className='text-gray-700 font-Text'>
              Você escolhe as coberturas adequadas para sua residência e paga o prêmio. O valor é calculado considerando o tipo de imóvel, localização, valor
              dos bens e perfil de risco da região.
            </p>
          </div>

          <div className='bg-green-50 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-secondary mb-4 font-Title'>2. Sinistro</h3>
            <p className='text-gray-700 font-Text'>
              Em caso de incêndio, roubo, danos elétricos ou outros eventos cobertos, você aciona a seguradora através da central de atendimento 24h para
              comunicar o sinistro.
            </p>
          </div>

          <div className='bg-yellow-50 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-secondary mb-4 font-Title'>3. Vistoria</h3>
            <p className='text-gray-700 font-Text'>
              A seguradora envia um perito para avaliar os danos, verificar as circunstâncias do sinistro e determinar o valor da indenização conforme as
              coberturas contratadas.
            </p>
          </div>

          <div className='bg-purple-50 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-secondary mb-4 font-Title'>4. Indenização</h3>
            <p className='text-gray-700 font-Text'>
              Após aprovação, você recebe a indenização em dinheiro ou a seguradora providencia o reparo através de empresas credenciadas, conforme as condições
              da apólice.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className='w-full max-w-7xl mb-16'>
        <h2 className='text-3xl font-bold text-secondary mb-8 text-center font-Title'>Principais Coberturas</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <IoFlame className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Incêndio</h3>
            <p className='text-gray-600 font-Text'>Proteção contra incêndios, explosões e quedas de raios que danifiquem a estrutura.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <MdSecurity className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Roubo e Furto</h3>
            <p className='text-gray-600 font-Text'>Cobertura para roubo e furto de bens dentro da residência.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <FaBolt className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Danos Elétricos</h3>
            <p className='text-gray-600 font-Text'>Proteção contra danos causados por variações de tensão elétrica.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <IoWaterOutline className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Vazamentos</h3>
            <p className='text-gray-600 font-Text'>Cobertura para danos causados por vazamentos de água.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <RiThunderstormsLine className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Vendaval</h3>
            <p className='text-gray-600 font-Text'>Proteção contra danos causados por vendavais e tempestades.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <MdLocalHospital className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Responsabilidade Civil</h3>
            <p className='text-gray-600 font-Text'>Indenização por danos causados a terceiros dentro da propriedade.</p>
          </div>
        </div>
      </section>

      {/* Brazilian Market Specifics */}
      <section className='w-full max-w-7xl mb-16'>
        <div className='bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-8 md:p-12 text-white'>
          <h2 className='text-3xl font-bold mb-6 font-Title'>Características</h2>

          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-xl font-bold mb-4 font-Title'>Fatores que Influenciam o Preço</h3>
              <ul className='space-y-2 font-Text'>
                <li>• Localização da residência (CEP)</li>
                <li>• Tipo de construção (alvenaria, madeira, etc.)</li>
                <li>• Valor dos bens a serem segurados</li>
                <li>• Sistemas de segurança instalados</li>
                <li>• Histórico de sinistros da região</li>
                <li>• Idade e estado de conservação do imóvel</li>
              </ul>
            </div>

            <div>
              <h3 className='text-xl font-bold mb-4 font-Title'>Regulamentação Brasileira</h3>
              <ul className='space-y-2 font-Text'>
                <li>• Regulado pela SUSEP</li>
                <li>• Direito de arrependimento em 7 dias</li>
                <li>• Renovação automática opcional</li>
                <li>• Portabilidade entre seguradoras</li>
                <li>• Cobertura mínima obrigatória para financiamentos</li>
                <li>• Proteção contra eventos climáticos regionais</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Coverages */}
      <section className='w-full max-w-7xl mb-16'>
        <h2 className='text-3xl font-bold text-secondary mb-8 text-center font-Title'>Coberturas Adicionais</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <FaWrench className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Assistência 24h</h3>
            <p className='text-gray-600 font-Text'>Chaveiro, eletricista, encanador e vidraceiro.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <BiSolidBuildingHouse className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Hospedagem</h3>
            <p className='text-gray-600 font-Text'>Cobertura de hospedagem temporária durante reparos.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <RiMoneyDollarCircleFill className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Perda de Aluguel</h3>
            <p className='text-gray-600 font-Text'>Indenização por perda de renda de aluguel.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <GiHouse className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Conteúdo</h3>
            <p className='text-gray-600 font-Text'>Proteção para móveis, eletrodomésticos e objetos pessoais.</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className='w-full max-w-7xl mb-16'>
        <h2 className='text-3xl font-bold text-secondary mb-8 text-center font-Title'>Vantagens do Seguro Residencial</h2>

        <div className='grid md:grid-cols-3 gap-6'>
          <div className='text-center'>
            <div className='bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <IoShieldCheckmark className='w-8 h-8 text-green-600' />
            </div>
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Proteção Completa</h3>
            <p className='text-gray-600 font-Text'>Protege sua casa, seus bens e sua família contra diversos riscos.</p>
          </div>

          <div className='text-center'>
            <div className='bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <MdSupportAgent className='w-8 h-8 text-blue-600' />
            </div>
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Tranquilidade</h3>
            <p className='text-gray-600 font-Text'>Durma tranquilo sabendo que seu lar está protegido 24 horas por dia.</p>
          </div>

          <div className='text-center'>
            <div className='bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <MdGavel className='w-8 h-8 text-purple-600' />
            </div>
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Assistência Jurídica</h3>
            <p className='text-gray-600 font-Text'>Suporte jurídico em caso de questões relacionadas à propriedade.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='w-full max-w-4xl text-center'>
        <div className='bg-primary rounded-lg p-8 md:p-12 text-white'>
          <h2 className='text-3xl font-bold mb-4 font-Title'>Proteja Sua Casa Hoje Mesmo</h2>
          <p className='text-xl mb-6 font-Text'>Faça uma cotação personalizada e encontre o seguro residencial ideal para sua família.</p>
          <a
            href='https://api.whatsapp.com/send?phone=5512996713530&text=Olá! Gostaria de fazer uma cotação de seguro residencial.'
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
