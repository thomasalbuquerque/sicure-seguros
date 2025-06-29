'use client';
import Navbar from '@/components/Navbar/Navbar';
import { FaTruckFront, FaShieldHalved, FaUserShield, FaWrench } from 'react-icons/fa6';
import { MdLocalHospital, MdGavel, MdSupportAgent } from 'react-icons/md';
import { IoCarSport } from 'react-icons/io5';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';

export default function SeguroAutomotivo() {
  return (
    <main className='flex min-h-screen flex-col px-6 py-8 md:px-24 md:py-10 items-center'>
      <Navbar />

      {/* Hero Section */}
      <section className='w-full max-w-7xl mt-12 mb-16'>
        <div className='text-center'>
          <div className='flex justify-center mb-6'>
            <FaTruckFront className='w-16 h-16 text-primary' />
          </div>
          <h1 className='text-4xl md:text-5xl font-bold text-secondary mb-4 font-Title'>Seguro Automotivo</h1>
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-Text mb-4'>
            Proteja seu veículo com a melhor cobertura do mercado brasileiro. Temos mais de 15 anos de experiência no setor, garantindo a você segurança e
            tranquilidade ao dirigir.
          </p>
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-Text'>
            Nossa equipe está pronta para oferecer o melhor atendimento e as melhores condições de seguro automotivo.
          </p>
        </div>
      </section>

      {/* What is Car Insurance */}
      <section className='w-full max-w-7xl mb-16'>
        <div className='bg-white rounded-lg shadow-lg p-8 md:p-12'>
          <h2 className='text-3xl font-bold text-secondary mb-6 font-Title'>Como funciona o Seguro Automotivo?</h2>
          <div className='space-y-4 text-gray-700 font-Text'>
            <p className='text-lg leading-relaxed'>
              O seguro automotivo é uma proteção financeira essencial que garante indenização em caso de sinistros com seu veículo. No Brasil, embora não seja
              obrigatório por lei, é altamente recomendado devido aos altos índices de roubo, furto e acidentes de trânsito.
            </p>
            <p className='text-lg leading-relaxed'>
              Ao contratar um seguro auto, você paga um valor mensal (prêmio) e, em troca, a seguradora se compromete a indenizar você conforme as coberturas
              contratadas, proporcionando tranquilidade e proteção do seu patrimônio.
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
              Você escolhe as coberturas desejadas e paga o prêmio mensal ou anual. O valor é calculado com base no perfil do condutor, modelo do veículo,
              região de circulação e histórico de sinistros.
            </p>
          </div>

          <div className='bg-green-50 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-secondary mb-4 font-Title'>2. Sinistro</h3>
            <p className='text-gray-700 font-Text'>
              Em caso de acidente, furto, roubo ou outros eventos cobertos, você aciona a seguradora através da central de atendimento 24h.
            </p>
          </div>

          <div className='bg-yellow-50 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-secondary mb-4 font-Title'>3. Avaliação</h3>
            <p className='text-gray-700 font-Text'>
              A seguradora avalia o sinistro através de peritos especializados, verificando as circunstâncias e os danos para determinar a cobertura.
            </p>
          </div>

          <div className='bg-purple-50 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-secondary mb-4 font-Title'>4. Indenização</h3>
            <p className='text-gray-700 font-Text'>
              Após aprovação, você recebe a indenização ou o veículo é reparado em uma oficina credenciada, conforme as condições da apólice.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className='w-full max-w-7xl mb-16'>
        <h2 className='text-3xl font-bold text-secondary mb-8 text-center font-Title'>Principais Coberturas</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <FaShieldHalved className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Cobertura Compreensiva</h3>
            <p className='text-gray-600 font-Text'>Proteção completa contra colisão, capotagem, incêndio, furto e roubo.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <MdLocalHospital className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Cobertura de Terceiros</h3>
            <p className='text-gray-600 font-Text'>Indenização por danos materiais e corporais causados a terceiros.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <FaUserShield className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Acidentes Pessoais</h3>
            <p className='text-gray-600 font-Text'>Proteção para condutor e passageiros em caso de morte ou invalidez.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <FaWrench className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Assistência 24h</h3>
            <p className='text-gray-600 font-Text'>Guincho, chaveiro, pane seca e outros serviços de emergência.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <IoCarSport className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Carro Reserva</h3>
            <p className='text-gray-600 font-Text'>Veículo substituto durante o período de reparo.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <RiMoneyDollarCircleFill className='w-12 h-12 text-primary mx-auto mb-4' />
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Cobertura de Vidros</h3>
            <p className='text-gray-600 font-Text'>Reposição de para-brisas, vidros laterais e traseiros.</p>
          </div>
        </div>
      </section>

      {/* Brazilian Market Specifics */}
      <section className='w-full max-w-7xl mb-16'>
        <div className='bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 md:p-12 text-white'>
          <h2 className='text-3xl font-bold mb-6 font-Title'>Características</h2>

          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-xl font-bold mb-4 font-Title'>Fatores que Influenciam o Preço</h3>
              <ul className='space-y-2 font-Text'>
                <li>• Idade e sexo do condutor principal</li>
                <li>• Modelo, ano e valor do veículo</li>
                <li>• CEP de circulação e pernoite</li>
                <li>• Histórico de sinistros</li>
                <li>• Forma de uso do veículo</li>
                <li>• Quilometragem anual</li>
              </ul>
            </div>

            <div>
              <h3 className='text-xl font-bold mb-4 font-Title'>Regulamentação</h3>
              <ul className='space-y-2 font-Text'>
                <li>• Regulado pela SUSEP (Superintendência de Seguros)</li>
                <li>• Adesão ao DPVAT (obrigatório)</li>
                <li>• Direito de arrependimento em 7 dias</li>
                <li>• Renovação automática opcional</li>
                <li>• Portabilidade entre seguradoras</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className='w-full max-w-7xl mb-16'>
        <h2 className='text-3xl font-bold text-secondary mb-8 text-center font-Title'>Vantagens do Seguro Automotivo</h2>

        <div className='grid md:grid-cols-3 gap-6'>
          <div className='text-center'>
            <div className='bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <FaShieldHalved className='w-8 h-8 text-green-600' />
            </div>
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Proteção Patrimonial</h3>
            <p className='text-gray-600 font-Text'>Preserve seu patrimônio contra perdas financeiras significativas.</p>
          </div>

          <div className='text-center'>
            <div className='bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <MdSupportAgent className='w-8 h-8 text-blue-600' />
            </div>
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Tranquilidade</h3>
            <p className='text-gray-600 font-Text'>Dirija com segurança sabendo que está protegido contra imprevistos.</p>
          </div>

          <div className='text-center'>
            <div className='bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <MdGavel className='w-8 h-8 text-purple-600' />
            </div>
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Proteção Jurídica</h3>
            <p className='text-gray-600 font-Text'>Assistência jurídica em caso de acidentes com terceiros.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='w-full max-w-4xl text-center'>
        <div className='bg-primary rounded-lg p-8 md:p-12 text-white'>
          <h2 className='text-3xl font-bold mb-4 font-Title'>Proteja Seu Veículo Hoje Mesmo</h2>
          <p className='text-xl mb-6 font-Text'>Faça uma cotação personalizada e encontre o seguro ideal para seu perfil.</p>
          <a
            href='https://api.whatsapp.com/send?phone=5512996713530&text=Olá! Gostaria de fazer uma cotação de seguro automotivo.'
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
