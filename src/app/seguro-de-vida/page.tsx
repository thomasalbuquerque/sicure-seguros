'use client';
import Navbar from '@/components/Navbar/Navbar';
import { MdFavorite, MdSecurity, MdFamilyRestroom, MdSupportAgent, MdHealthAndSafety } from 'react-icons/md';
import { IoHeart, IoShieldCheckmark, IoPersonOutline, IoMedical } from 'react-icons/io5';
import { FaShieldHalved, FaHandHoldingHeart, FaUsers, FaBriefcase, FaHeart, FaMoneyBillWave } from 'react-icons/fa6';
import { RiMoneyDollarCircleFill, RiHeartPulseLine, RiUserHeartLine } from 'react-icons/ri';
import { GiHealthNormal, GiFamilyHouse } from 'react-icons/gi';
import { HiOutlineSparkles } from 'react-icons/hi2';
import { BsPersonCheck, BsHeart } from 'react-icons/bs';

export default function SeguroDeVida() {
  return (
    <main className='flex min-h-screen flex-col px-6 py-8 md:px-24 md:py-10 items-center'>
      <Navbar />

      {/* Hero Section */}
      <section className='w-full max-w-7xl mt-12 mb-16'>
        <div className='text-center'>
          <div className='flex justify-center mb-6'>
            <MdFavorite className='w-16 h-16 text-primary' />
          </div>
          <h1 className='text-4xl md:text-5xl font-bold text-secondary mb-4 font-Title'>Seguros de Vida Individual e para Colaboradores Empresariais</h1>
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-Text mb-4'>
            Proteção financeira que garante segurança para você e seus dependentes em caso de imprevistos. Oferecemos soluções personalizadas tanto para pessoas
            físicas quanto para empresas que valorizam seus colaboradores.
          </p>
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-Text'>
            Coberturas flexíveis para atender necessidades específicas, proporcionando tranquilidade e planejamento financeiro.
          </p>
        </div>
      </section>

      {/* What is Life Insurance */}
      <section className='w-full max-w-7xl mb-16'>
        <div className='bg-white rounded-lg shadow-lg p-8 md:p-12'>
          <h2 className='text-3xl font-bold text-secondary mb-6 font-Title'>O que é o Seguro de Vida?</h2>
          <div className='space-y-4 text-gray-700 font-Text'>
            <p className='text-lg leading-relaxed'>
              O seguro de vida é uma proteção financeira que garante segurança para o segurado e seus dependentes em caso de imprevistos, como morte, invalidez
              ou doenças graves. É amplamente utilizado no Brasil, tanto por pessoas físicas quanto por empresas que desejam oferecer benefícios aos seus
              funcionários.
            </p>
            <p className='text-lg leading-relaxed'>
              Este tipo de seguro oferece flexibilidade para incluir coberturas adicionais personalizadas, atendendo às necessidades específicas de cada perfil,
              seja individual ou empresarial, garantindo proteção abrangente e planejamento financeiro adequado.
            </p>
          </div>
        </div>
      </section>

      {/* How to Contract */}
      <section className='w-full max-w-7xl mb-16'>
        <h2 className='text-3xl font-bold text-secondary mb-8 text-center font-Title'>Como Contratar um Seguro de Vida</h2>

        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          <div className='bg-blue-50 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-secondary mb-4 font-Title'>1. Avaliação das Necessidades</h3>
            <p className='text-gray-700 font-Text'>
              Analise seu perfil financeiro, dependentes e objetivos para determinar o valor ideal da cobertura e as proteções necessárias.
            </p>
          </div>

          <div className='bg-green-50 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-secondary mb-4 font-Title'>2. Escolha das Coberturas</h3>
            <p className='text-gray-700 font-Text'>
              Defina as coberturas básicas e adicionais mais adequadas ao seu perfil, considerando idade, saúde e atividade profissional.
            </p>
          </div>

          <div className='bg-yellow-50 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-secondary mb-4 font-Title'>3. Cotação Personalizada</h3>
            <p className='text-gray-700 font-Text'>
              Compare propostas de diferentes seguradoras, analisando coberturas, valores e condições para encontrar a melhor opção.
            </p>
          </div>

          <div className='bg-purple-50 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-secondary mb-4 font-Title'>4. Contratação</h3>
            <p className='text-gray-700 font-Text'>
              Após escolher a melhor proposta, preencha a documentação, realize exames se necessário e formalize o contrato.
            </p>
          </div>
        </div>
      </section>

      {/* Individual Life Insurance */}
      <section className='w-full max-w-7xl mb-16'>
        <div className='bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-8 md:p-12 text-white mb-8'>
          <div className='flex items-center mb-6'>
            <IoPersonOutline className='w-12 h-12 mr-4' />
            <h2 className='text-3xl font-bold font-Title'>Seguro de Vida Individual</h2>
          </div>
          <p className='text-lg font-Text'>
            Contratado por uma pessoa física para proteger a si mesma e seus beneficiários, oferecendo indenização financeira em situações específicas como
            morte, invalidez ou diagnóstico de doenças graves.
          </p>
        </div>

        <h3 className='text-2xl font-bold text-secondary mb-6 font-Title'>Coberturas Básicas</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <BsHeart className='w-12 h-12 text-primary mx-auto mb-4' />
            <h4 className='text-lg font-bold text-secondary mb-2 font-Title'>Morte (Qualquer Causa)</h4>
            <p className='text-gray-600 font-Text'>Indenização aos beneficiários em caso de falecimento por causas naturais ou acidentais.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <MdHealthAndSafety className='w-12 h-12 text-primary mx-auto mb-4' />
            <h4 className='text-lg font-bold text-secondary mb-2 font-Title'>Invalidez por Acidente (IPA)</h4>
            <p className='text-gray-600 font-Text'>Cobertura para invalidez permanente total ou parcial resultante de acidentes.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <RiHeartPulseLine className='w-12 h-12 text-primary mx-auto mb-4' />
            <h4 className='text-lg font-bold text-secondary mb-2 font-Title'>Invalidez por Doença (IPD)</h4>
            <p className='text-gray-600 font-Text'>Proteção para incapacidade permanente de trabalhar devido a doenças.</p>
          </div>
        </div>

        <h3 className='text-2xl font-bold text-secondary mb-6 font-Title'>Coberturas Adicionais (Opcional)</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <IoMedical className='w-12 h-12 text-primary mx-auto mb-4' />
            <h4 className='text-lg font-bold text-secondary mb-2 font-Title'>Doenças Graves</h4>
            <p className='text-gray-600 font-Text'>Indenização para câncer, infarto, AVC e outras doenças graves.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <FaMoneyBillWave className='w-12 h-12 text-primary mx-auto mb-4' />
            <h4 className='text-lg font-bold text-secondary mb-2 font-Title'>Diárias por Incapacidade (DIT)</h4>
            <p className='text-gray-600 font-Text'>Pagamento diário durante incapacidade temporária de trabalhar.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <GiFamilyHouse className='w-12 h-12 text-primary mx-auto mb-4' />
            <h4 className='text-lg font-bold text-secondary mb-2 font-Title'>Assistência Funeral</h4>
            <p className='text-gray-600 font-Text'>Cobertura para despesas com funeral do segurado.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <MdFamilyRestroom className='w-12 h-12 text-primary mx-auto mb-4' />
            <h4 className='text-lg font-bold text-secondary mb-2 font-Title'>Cobertura Familiar</h4>
            <p className='text-gray-600 font-Text'>Extensão do seguro para cônjuge e filhos do segurado.</p>
          </div>
        </div>
      </section>

      {/* Corporate Life Insurance */}
      <section className='w-full max-w-7xl mb-16'>
        <div className='bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-8 md:p-12 text-white mb-8'>
          <div className='flex items-center mb-6'>
            <FaBriefcase className='w-12 h-12 mr-4' />
            <h2 className='text-3xl font-bold font-Title'>Seguro de Vida para Colaboradores Empresariais</h2>
          </div>
          <p className='text-lg font-Text'>
            Contratado por empresas para oferecer proteção aos colaboradores. É um benefício muito valorizado no mercado de trabalho, demonstrando cuidado com
            os funcionários e suas famílias.
          </p>
        </div>

        <h3 className='text-2xl font-bold text-secondary mb-6 font-Title'>Coberturas Básicas</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <IoHeart className='w-12 h-12 text-primary mx-auto mb-4' />
            <h4 className='text-lg font-bold text-secondary mb-2 font-Title'>Morte (Qualquer Causa)</h4>
            <p className='text-gray-600 font-Text'>Indenização aos beneficiários do colaborador em caso de falecimento.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <BsPersonCheck className='w-12 h-12 text-primary mx-auto mb-4' />
            <h4 className='text-lg font-bold text-secondary mb-2 font-Title'>Invalidez por Acidente (IPA)</h4>
            <p className='text-gray-600 font-Text'>Cobertura para invalidez permanente resultante de acidentes.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <GiHealthNormal className='w-12 h-12 text-primary mx-auto mb-4' />
            <h4 className='text-lg font-bold text-secondary mb-2 font-Title'>Invalidez por Doença (IPD)</h4>
            <p className='text-gray-600 font-Text'>Proteção para invalidez permanente causada por doenças.</p>
          </div>
        </div>

        <h3 className='text-2xl font-bold text-secondary mb-6 font-Title'>Coberturas Adicionais (Opcional)</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <HiOutlineSparkles className='w-12 h-12 text-primary mx-auto mb-4' />
            <h4 className='text-lg font-bold text-secondary mb-2 font-Title'>Assistência Funeral</h4>
            <p className='text-gray-600 font-Text'>Cobertura para despesas com funeral do colaborador ou dependentes.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <FaHeart className='w-12 h-12 text-primary mx-auto mb-4' />
            <h4 className='text-lg font-bold text-secondary mb-2 font-Title'>Doenças Graves</h4>
            <p className='text-gray-600 font-Text'>Indenização em caso de diagnóstico de doenças graves.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <RiUserHeartLine className='w-12 h-12 text-primary mx-auto mb-4' />
            <h4 className='text-lg font-bold text-secondary mb-2 font-Title'>Renda por Invalidez</h4>
            <p className='text-gray-600 font-Text'>Pagamento de renda mensal em caso de invalidez do colaborador.</p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <FaUsers className='w-12 h-12 text-primary mx-auto mb-4' />
            <h4 className='text-lg font-bold text-secondary mb-2 font-Title'>Cobertura para Dependentes</h4>
            <p className='text-gray-600 font-Text'>Extensão do seguro para cônjuge e filhos do colaborador.</p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className='w-full max-w-7xl mb-16'>
        <h2 className='text-3xl font-bold text-secondary mb-8 text-center font-Title'>Diferenças Entre Seguro Individual e Empresarial</h2>

        <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead className='bg-primary text-white'>
                <tr>
                  <th className='px-6 py-4 text-left font-Title'>Aspecto</th>
                  <th className='px-6 py-4 text-left font-Title'>Seguro Individual</th>
                  <th className='px-6 py-4 text-left font-Title'>Seguro Empresarial</th>
                </tr>
              </thead>
              <tbody className='font-Text'>
                <tr className='border-b'>
                  <td className='px-6 py-4 font-semibold'>Quem Contrata</td>
                  <td className='px-6 py-4'>Pessoa física</td>
                  <td className='px-6 py-4'>Empresa</td>
                </tr>
                <tr className='border-b bg-gray-50'>
                  <td className='px-6 py-4 font-semibold'>Beneficiários</td>
                  <td className='px-6 py-4'>Escolhidos pelo segurado</td>
                  <td className='px-6 py-4'>Familiares do colaborador</td>
                </tr>
                <tr className='border-b'>
                  <td className='px-6 py-4 font-semibold'>Custo</td>
                  <td className='px-6 py-4'>Geralmente mais alto</td>
                  <td className='px-6 py-4'>Mais acessível (contratação em grupo)</td>
                </tr>
                <tr className='border-b bg-gray-50'>
                  <td className='px-6 py-4 font-semibold'>Coberturas</td>
                  <td className='px-6 py-4'>Personalizáveis pelo segurado</td>
                  <td className='px-6 py-4'>Definidas pela empresa</td>
                </tr>
                <tr>
                  <td className='px-6 py-4 font-semibold'>Objetivo</td>
                  <td className='px-6 py-4'>Proteção pessoal e familiar</td>
                  <td className='px-6 py-4'>Benefício empresarial</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cost Factors */}
      <section className='w-full max-w-7xl mb-16'>
        <div className='bg-gradient-to-r from-orange-500 to-red-600 rounded-lg p-8 md:p-12 text-white'>
          <h2 className='text-3xl font-bold mb-6 font-Title'>Fatores que Influenciam o Custo</h2>

          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-xl font-bold mb-4 font-Title'>Características Pessoais</h3>
              <ul className='space-y-2 font-Text'>
                <li>• Idade do segurado (quanto mais jovem, menor o custo)</li>
                <li>• Estado de saúde e histórico médico</li>
                <li>• Atividade profissional e nível de risco</li>
                <li>• Hábitos de vida (fumante, pratica esportes)</li>
                <li>• Gênero e expectativa de vida</li>
                <li>• Valor da cobertura desejada</li>
              </ul>
            </div>

            <div>
              <h3 className='text-xl font-bold mb-4 font-Title'>Coberturas e Benefícios</h3>
              <ul className='space-y-2 font-Text'>
                <li>• Quantidade de coberturas contratadas</li>
                <li>• Coberturas adicionais específicas</li>
                <li>• Valor da importância segurada</li>
                <li>• Modalidade de pagamento do prêmio</li>
                <li>• Número de colaboradores (caso empresarial)</li>
                <li>• Carência das coberturas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className='w-full max-w-7xl mb-16'>
        <h2 className='text-3xl font-bold text-secondary mb-8 text-center font-Title'>Vantagens do Seguro de Vida</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='text-center'>
            <div className='bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <IoShieldCheckmark className='w-8 h-8 text-blue-600' />
            </div>
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Tranquilidade</h3>
            <p className='text-gray-600 font-Text'>Segurança financeira para dependentes em caso de imprevistos.</p>
          </div>

          <div className='text-center'>
            <div className='bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <FaShieldHalved className='w-8 h-8 text-green-600' />
            </div>
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Planejamento Financeiro</h3>
            <p className='text-gray-600 font-Text'>Proteção do patrimônio e da renda familiar.</p>
          </div>

          <div className='text-center'>
            <div className='bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <FaHandHoldingHeart className='w-8 h-8 text-purple-600' />
            </div>
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Valorização Profissional</h3>
            <p className='text-gray-600 font-Text'>Benefício empresarial que fortalece relações com colaboradores.</p>
          </div>

          <div className='text-center'>
            <div className='bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <MdSupportAgent className='w-8 h-8 text-yellow-600' />
            </div>
            <h3 className='text-lg font-bold text-secondary mb-2 font-Title'>Flexibilidade</h3>
            <p className='text-gray-600 font-Text'>Coberturas personalizáveis conforme necessidades específicas.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='w-full max-w-4xl text-center'>
        <div className='bg-primary rounded-lg p-8 md:p-12 text-white'>
          <h2 className='text-3xl font-bold mb-4 font-Title'>Proteja Sua Vida e Sua Família</h2>
          <p className='text-xl mb-6 font-Text'>
            Faça uma cotação personalizada e encontre o seguro de vida ideal para você ou sua empresa, com coberturas sob medida.
          </p>
          <a
            href='https://api.whatsapp.com/send?phone=5512996713530&text=Olá! Gostaria de fazer uma cotação de seguro de vida.'
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
