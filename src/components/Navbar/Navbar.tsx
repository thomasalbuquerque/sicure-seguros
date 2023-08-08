import React from 'react';
import SegurosDropdown from './SegurosDropdown';

const Navbar = () => {
  return (
    <>
      <nav className="flex w-full items-center justify-between font-Title font-bold">
        <img
          className="w-28"
          src="./sicure-seguros-logo.png"
          alt="Sicure Corretora de Seguros Logo"
        />
        <div className="flex gap-10 items-center text-secondary">
          <a href="./">Home</a>
          <SegurosDropdown />
          <a href="./">Contato</a>
          <a
            href="./learnMore"
            className="text-bgColor shadow-sm rounded-md bg-primary px-5 py-[0.35rem]">
            Saiba Mais
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
