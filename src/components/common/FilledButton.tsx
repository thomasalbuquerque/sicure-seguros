import React from 'react';
interface props {
  text: string;
}
const FilledButton = ({ text }: props) => {
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
      <div className="flex justify-center items-center h-7 xsm:h-9 bg-primary text-bgColor text-xs w-20 xsm:w-28 xsm:text-base font-bold shadow-sm rounded-md font-Title cursor-pointer">
        <div onClick={scrollToSection}>{text}</div>
      </div>
    </>
  );
};

export default FilledButton;
