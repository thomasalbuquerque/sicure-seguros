import React from 'react';
interface props {
  text: string;
}
const HollowButton = ({ text }: props) => {
  return (
    <>
      <div className="flex justify-center items-center h-7 xsm:h-9 bg-transparent text-primary text-xs w-24 xsm:w-28 xsm:text-sm font-bold shadow-sm rounded-md border border-primary font-Title cursor-pointer">
        <a
          href="https://api.whatsapp.com/send?phone=5512996713530"
          target="_blank">
          {text}
        </a>
      </div>
    </>
  );
};

export default HollowButton;
