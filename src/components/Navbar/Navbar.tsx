import React, { useState } from 'react';
import SegurosDropdown from './SegurosDropdown';
import styles from './styles.module.css';
import clsx from 'clsx';
import SaibaMais from '../common/SaibaMais';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMenuOpen = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <>
      <nav className="w-full">
        <div className="flex items-center justify-between font-Title font-bold text-base">
          <img
            className="w-20 xsm:w-28"
            src="./sicure-seguros-logo.png"
            alt="Sicure Corretora de Seguros Logo"
          />
          <div className="hidden sm:flex gap-10 items-center text-secondary">
            <a href="./">Home</a>
            <SegurosDropdown />
            <a href="./">Contato</a>
            <SaibaMais />
          </div>
          <button
            id="menu-btn"
            className={clsx(
              `${styles.hamburger} sm:hidden focus:outline-none`,
              mobileMenuOpen && `${styles.open}`
            )}
            onClick={handleToggleMenuOpen}>
            <span className={styles.hamburgerTop}></span>
            <span className={styles.hamburgerMiddle}></span>
            <span className={styles.hamburgerBottom}></span>
          </button>
        </div>
        <div className="sm:hidden">
          <div
            id="menu"
            className={clsx(
              'absolute flex-col items-center py-8 space-y-6 font-Title font-bold bg-bgColorDarker text-secondary w-28 sm:self-center right-6 drop-shadow-md',
              mobileMenuOpen && 'flex',
              !mobileMenuOpen && 'hidden'
            )}>
            <a href="/">Home</a>
            <a href="#segurosSection">Seguros</a>
            <a href="https://api.whatsapp.com/send?phone=5512996713530">
              Contato
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
