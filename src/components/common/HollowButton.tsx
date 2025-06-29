import React from 'react';
import Link from 'next/link';
interface props {
  text: string;
  href?: string;
  isExternal?: boolean;
}
const HollowButton = ({ text, href = 'https://api.whatsapp.com/send?phone=5512996713530', isExternal = true }: props) => {
  const buttonContent = (
    <div className='flex justify-center items-center h-7 xsm:h-9 bg-transparent text-primary text-xs w-24 xsm:w-28 xsm:text-sm font-bold shadow-sm rounded-md border border-primary font-Title cursor-pointer hover:bg-bgColorHover duration-100'>
      {text}
    </div>
  );

  if (isExternal) {
    return (
      <a href={href} target='_blank' rel='noopener noreferrer'>
        {buttonContent}
      </a>
    );
  } else {
    return <Link href={href}>{buttonContent}</Link>;
  }
};

export default HollowButton;
