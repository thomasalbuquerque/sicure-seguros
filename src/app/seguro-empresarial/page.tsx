'use client';
import Navbar from '@/components/Navbar/Navbar';
import { MdBusinessCenter, MdSecurity, MdGavel, MdSupportAgent, MdFactory } from 'react-icons/md';
import { IoFlame, IoShieldCheckmark, IoWaterOutline } from 'react-icons/io5';
import { FaShieldHalved, FaBolt, FaWrench, FaTruck, FaUsers, FaChartLine } from 'react-icons/fa6';
import { RiMoneyDollarCircleFill, RiThunderstormsLine, RiComputerLine } from 'react-icons/ri';
import { GiHeavyRain, GiBoxUnpacking } from 'react-icons/gi';
import { HiOutlineSparkles } from 'react-icons/hi2';
import { BsBuildings, BsGear } from 'react-icons/bs';

export default function SeguroEmpresarial() {
  return (
    <main className='flex min-h-screen flex-col px-6 py-8 md:px-24 md:py-10 items-center'>
      <Navbar />

      {/* Hero Section */}
      <section className='w-full max-w-7xl mt-12 mb-16'>
        <div className='text-center'>
          <div className='flex justify-center mb-6'>
            <MdBusinessCenter className='w-16 h-16 text-primary' />
          </div>
          <h1 className='text-4xl md:text-5xl font-bold text-secondary mb-4 font-Title'>Seguro Empresarial</h1>
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-Text mb-4'>
            Proteja seu negócio com soluções personalizadas para empresas de todos os portes. Mais de 15 anos de experiência oferecendo segurança e continuidade
            operacional para empresas brasileiras.
          </p>
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-Text'>
            Coberturas ajustáveis conforme seu setor de atuação, garantindo proteção completa contra riscos específicos do seu negócio.
          </p>
        </div>
      </section>

      {/* What is Business Insurance */}
      <section className='w-full max-w-7xl mb-16'>
        <div className='bg-white rounded-lg shadow-lg p-8 md:p-12'>
          <h2 className='text-3xl font-bold text-secondary mb-6 font-Title'>O que é o Seguro Empresarial?</h2>
          <div className='space-y-4 text-gray-700 font-Text'>
            <p className='text-lg leading-relaxed'>
              O seguro empresarial é um contrato que oferece proteção financeira para empresas em caso de eventos inesperados, como incêndios, roubos, desastres
              naturais, danos a equipamentos, entre outros. Ele é projetado para minimizar prejuízos e garantir a continuidade das operações.
            </p>
            <p className='text-lg leading-relaxed'>
              No mercado brasileiro, este seguro é altamente personalizável, permitindo que as coberturas sejam ajustadas de acordo com o porte, o setor de
              atuação e as necessidades específicas da empresa, proporcionando proteção sob medida para cada negócio.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className='w-full max-w-7xl mb-16'>
        <h2 className='text-3xl font-bold text-secondary mb-8 text-center font-Title'>Como Contratar um Seguro Empresarial</h2>

        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          <div className='bg-blue-50 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-secondary mb-4 font-Title'>1. Avaliação de Riscos</h3>
            <p className='text-gray-700 font-Text'>
              Um corretor ou seguradora fará uma análise detalhada dos riscos envolvidos no negócio, considerando o setor de atuação, localização e porte da
              empresa.
            </p>
          </div>

          <div className='bg-green-50 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-secondary mb-4 font-Title'>2. Escolha das Coberturas</h3>
            <p className='text-gray-700 font-Text'>
              Defina as coberturas básicas e adicionais de acordo com as necessidades específicas da empresa, personalizando a proteção conforme o perfil de
              risco.
            </p>
          </div>

          <div className='bg-yellow-50 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-secondary mb-4 font-Title'>3. Cotação</h3>
            <p className='text-gray-700 font-Text'>
              Solicite cotações de diferentes seguradoras para comparar preços, condições e coberturas, garantindo a melhor relação custo-benefício para seu
              negócio.
            </p>
          </div>

          <div className='bg-purple-50 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-secondary mb-4 font-Title'>4. Contratação</h3>
            <p className='text-gray-700 font-Text'>
              Após escolher a melhor opção, revise cuidadosamente o contrato, esclareça dúvidas e formalize a contratação com documentação completa.
            </p>
          </div>
        </div>
      </section>

      {/* Basic Coverages */}
      <section className='w-full max-w-7xl mb-16'>
        <h2 className='text-3xl font-bold text-secondary mb-8 text-center font-Title'>Coberturas Básicas</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <IoFlame className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Incêndio e Explosão</h3>
            <p className='text-gray-600 font-Text'>Proteção contra danos causados por incêndios, explosões acidentais e fumaça.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <FaBolt className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Danos Elétricos</h3>
            <p className='text-gray-600 font-Text'>Cobre prejuízos por curtos-circuitos, sobretensões ou quedas de energia.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <MdSecurity className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Roubo e Furto</h3>
            <p className='text-gray-600 font-Text'>Indenização por roubo ou furto de bens, mercadorias e equipamentos.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <MdGavel className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Responsabilidade Civil</h3>
            <p className='text-gray-600 font-Text'>Proteção contra danos causados a terceiros nas dependências da empresa.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <RiThunderstormsLine className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Desastres Naturais</h3>
            <p className='text-gray-600 font-Text'>Cobertura para vendavais, tempestades, granizo e alagamentos.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <IoWaterOutline className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Vazamentos</h3>
            <p className='text-gray-600 font-Text'>Proteção contra danos causados por vazamentos de água e tubulações.</p>
          </div>
        </div>
      </section>

      {/* Additional Coverages */}
      <section className='w-full max-w-7xl mb-16'>
        <h2 className='text-3xl font-bold text-secondary mb-8 text-center font-Title'>Coberturas Adicionais (Personalizáveis)</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <FaChartLine className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Lucros Cessantes</h3>
            <p className='text-gray-600 font-Text'>Indenização pela interrupção das atividades devido a sinistro.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <RiComputerLine className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Equipamentos Eletrônicos</h3>
            <p className='text-gray-600 font-Text'>Proteção para computadores, servidores e equipamentos tecnológicos.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <HiOutlineSparkles className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Quebra de Vidros</h3>
            <p className='text-gray-600 font-Text'>Substituição de vidros, espelhos e fachadas danificados.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <GiBoxUnpacking className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Seguro de Estoque</h3>
            <p className='text-gray-600 font-Text'>Proteção para mercadorias armazenadas contra danos ou perdas.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <BsGear className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>RC de Produtos</h3>
            <p className='text-gray-600 font-Text'>Cobertura para danos causados por produtos fabricados ou comercializados.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <FaTruck className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Seguro de Transporte</h3>
            <p className='text-gray-600 font-Text'>Proteção para mercadorias em trânsito próprio ou de terceiros.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <FaUsers className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Cobertura para Funcionários</h3>
            <p className='text-gray-600 font-Text'>Seguro de vida ou acidentes pessoais para colaboradores.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <FaWrench className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Assistência 24h</h3>
            <p className='text-gray-600 font-Text'>Serviços de emergência: eletricista, encanador, chaveiro.</p>
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className='w-full max-w-7xl mb-16'>
        <h2 className='text-3xl font-bold text-secondary mb-8 text-center font-Title'>Tipos de Negócio Atendidos</h2>

        <div className='grid md:grid-cols-3 gap-6'>
          <div className='bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white text-center'>
            <MdFactory className='w-12 h-12 mx-auto mb-4' />
            <h3 className='text-xl font-bold mb-2 font-Title'>Indústria</h3>
            <p className='font-Text'>Fábricas, manufaturas e plantas industriais com coberturas específicas para equipamentos e processos produtivos.</p>
          </div>

          <div className='bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white text-center'>
            <BsBuildings className='w-12 h-12 mx-auto mb-4' />
            <h3 className='text-xl font-bold mb-2 font-Title'>Comércio</h3>
            <p className='font-Text'>Lojas, supermercados, centros comerciais com proteção para mercadorias e atendimento ao público.</p>
          </div>

          <div className='bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white text-center'>
            <MdSupportAgent className='w-12 h-12 mx-auto mb-4' />
            <h3 className='text-xl font-bold mb-2 font-Title'>Serviços</h3>
            <p className='font-Text'>Escritórios, consultorias, prestadores de serviços com foco em responsabilidade civil e equipamentos.</p>
          </div>
        </div>
      </section>

      {/* Cost Factors */}
      <section className='w-full max-w-7xl mb-16'>
        <div className='bg-gradient-to-r from-orange-500 to-red-600 rounded-lg p-8 md:p-12 text-white'>
          <h2 className='text-3xl font-bold mb-6 font-Title'>Fatores que Influenciam o Custo</h2>

          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-xl font-bold mb-4 font-Title'>Características da Empresa</h3>
              <ul className='space-y-2 font-Text'>
                <li>• Tamanho da empresa e volume de bens</li>
                <li>• Atividade econômica e nível de risco</li>
                <li>• Localização e índices regionais</li>
                <li>• Histórico de sinistros da empresa</li>
                <li>• Sistemas de segurança instalados</li>
                <li>• Idade e estado das instalações</li>
              </ul>
            </div>

            <div>
              <h3 className='text-xl font-bold mb-4 font-Title'>Coberturas e Proteções</h3>
              <ul className='space-y-2 font-Text'>
                <li>• Quantidade de coberturas contratadas</li>
                <li>• Valores de importância segurada</li>
                <li>• Franquias escolhidas</li>
                <li>• Coberturas adicionais específicas</li>
                <li>• Limites de indenização por cobertura</li>
                <li>• Modalidade de pagamento do prêmio</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className='w-full max-w-7xl mb-16'>
        <h2 className='text-3xl font-bold text-secondary mb-8 text-center font-Title'>Vantagens do Seguro Empresarial</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='text-center'>
            <div className='bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <IoShieldCheckmark className='w-8 h-8 text-blue-600' />
            </div>
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Personalização</h3>
            <p className='text-gray-600 font-Text'>Coberturas ajustadas conforme o tipo de negócio e setor de atuação.</p>
          </div>

          <div className='text-center'>
            <div className='bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <FaShieldHalved className='w-8 h-8 text-green-600' />
            </div>
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Proteção Financeira</h3>
            <p className='text-gray-600 font-Text'>Reduz os impactos financeiros de eventos inesperados no negócio.</p>
          </div>

          <div className='text-center'>
            <div className='bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <BsGear className='w-8 h-8 text-purple-600' />
            </div>
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Continuidade Operacional</h3>
            <p className='text-gray-600 font-Text'>Garante rápida recuperação após sinistros mantendo as operações.</p>
          </div>

          <div className='text-center'>
            <div className='bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <MdSupportAgent className='w-8 h-8 text-yellow-600' />
            </div>
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Credibilidade</h3>
            <p className='text-gray-600 font-Text'>Empresas seguradas transmitem maior confiança para stakeholders.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='w-full max-w-4xl text-center'>
        <div className='bg-primary rounded-lg p-8 md:p-12 text-white'>
          <h2 className='text-3xl font-bold mb-4 font-Title'>Proteja Seu Negócio Hoje Mesmo</h2>
          <p className='text-xl mb-6 font-Text'>
            Faça uma cotação personalizada e encontre o seguro empresarial ideal para seu negócio, com coberturas sob medida.
          </p>
          <a
            href='https://api.whatsapp.com/send?phone=5512996713530&text=Olá! Gostaria de fazer uma cotação de seguro empresarial.'
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
