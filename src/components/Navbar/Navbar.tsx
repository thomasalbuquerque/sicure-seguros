import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SegurosDropdown from './SegurosDropdown';
import styles from './styles.module.css';
import clsx from 'clsx';
import FilledButton from '../common/FilledButton';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMenuOpen = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const scrollToSection = () => {
    const section = document.getElementById('segurosSection');
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      <nav className='w-full'>
        <div className='flex items-center justify-between font-Title font-bold text-base'>
          <Link href='/'>
            <Image
              className='w-20 xsm:w-28 cursor-pointer'
              src='/sicure-seguros-logo.png'
              alt='Sicure Corretora de Seguros Logo'
              width={112}
              height={80}
              priority
            />
          </Link>
          <div className='hidden sm:flex gap-10 items-center text-secondary'>
            <a href='./'>Home</a>
            <SegurosDropdown />
            <a href='https://api.whatsapp.com/send?phone=5512996713530' target='_blank'>
              Contato
            </a>
            <FilledButton text={'Saiba Mais'} />
          </div>
          <button
            id='menu-btn'
            className={clsx(`${styles.hamburger} sm:hidden focus:outline-none`, mobileMenuOpen && `${styles.open}`)}
            onClick={handleToggleMenuOpen}
          >
            <span className={styles.hamburgerTop}></span>
            <span className={styles.hamburgerMiddle}></span>
            <span className={styles.hamburgerBottom}></span>
          </button>
        </div>
        <div className='sm:hidden'>
          <div
            id='menu'
            className={clsx(
              'absolute flex-col items-center py-8 space-y-6 font-Title font-bold bg-bgColorDarker text-secondary w-28 sm:self-center right-6 drop-shadow-md rounded-md',
              mobileMenuOpen && 'flex',
              !mobileMenuOpen && 'hidden'
            )}
          >
            <a href='/'>Home</a>
            <div onClick={scrollToSection}>Seguros</div>
            <a href='https://api.whatsapp.com/send?phone=5512996713530'>Contato</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
