import React from 'react';
import { BiCheckCircle } from 'react-icons/bi';
import FilledButton from '../common/FilledButton';

const HeroSection = () => {
  return (
    <>
      <section className="flex flex-col xsm:flex-row font-Text justify-center text-secondary mt-7 2xl:px-28 2xl:py-20">
        <div className="lg:w-3/5 2xl:w-[810px]">
          <div className="font-Title text-4xl xsm:text-6xl">
            Seguros fazem parte da qualidade de vida
          </div>
          <div className="mt-3 xsm:mt-4 text-sm xsm:text-lg pr-7 xsm:pr-20 2xl:pr-12 2xl:mt-6">
            A Sicure garante a sua tranquilidade, com soluções de seguros
            personalizadas para proteger o que mais importa para você e sua
            família.{' '}
          </div>
          <div className="mt-3 xsm:mt-4 text-sm xsm:text-lg 2xl:mt-6">
            <ul>
              <li className="flex items-center gap-2">
                <BiCheckCircle className="text-lg" />
                <span>Melhores opções de seguradoras</span>
              </li>
              <li className="flex items-center gap-2 2xl:mt-3">
                <BiCheckCircle className="text-lg" />
                <span>Experiência e agentes qualificados</span>
              </li>
              <li className="flex items-center gap-2 2xl:mt-3">
                <BiCheckCircle className="text-lg" />
                <span>Atendimento ágil e de qualidade</span>
              </li>
            </ul>
          </div>
          <div className="mt-5 xsm:mt-6 2xl:mt-9">
            <FilledButton text={'Saiba Mais'} />
          </div>
        </div>
        <div className="lg:w-2/5 hidden lg:flex justify-end items-center">
          <img
            src="./hero-image.png"
            alt="Imagem da seção hero - Família com três pessoas sorrindo"
            className="w-72 xl:w-96 2xl:w-[26rem] 2xl:-mt-8 h-fit object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
