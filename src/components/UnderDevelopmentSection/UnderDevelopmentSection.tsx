import React from 'react';
import FilledButton from '../common/FilledButton';

const UnderDevelopmentSection = () => {
  return (
    <>
      <div
        id="segurosSection"
        className="flex flex-col items-center max-w-4xl px-5 xsm:px-10 py-12 mt-8 xsm:py-16 xsm:mt-16 rounded-[3.5rem]">
        <div className="font-Title text-secondary text-3xl text-center">
          Site em Construção
        </div>
        <div className="font-Text text-secondary text-base xsm:text-lg text-center mt-4">
          O site se encontra em construção, e serão desenvolvidas páginas
          específicas para cada Seguro, além de demais melhorias. Fique à
          vontade para entrar em contato conosco para tirar dúvidas e fazer
          cotações, estaremos prontos para lhe atender. Obrigado pela atenção.
        </div>
        <div className="mt-8">
          <a
            className="flex justify-center items-center h-8 xsm:h-9 bg-primary text-bgColor text-sm w-24 xsm:w-28 xsm:text-base font-bold shadow-sm rounded-md font-Title cursor-pointer"
            href="https://api.whatsapp.com/send?phone=5512996713530"
            target="_blank">
            Whatsapp
          </a>
        </div>
      </div>
    </>
  );
};

export default UnderDevelopmentSection;
