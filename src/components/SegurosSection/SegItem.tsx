import React from 'react';
import HollowButton from '../common/HollowButton';

interface props {
  item: {
    title: string;
    icon: React.JSX.Element;
    description: string;
    url?: string;
    isExternal?: boolean;
  };
}

const SegItem = ({ item }: props) => {
  return (
    <>
      <div className='w-60 h-fit mt-12 xsm:mt-16'>
        <div className='flex flex-col font-Text'>
          <div className='text-primary'>{item.icon}</div>
          <div className='text-secondary text-lg font-bold mt-3'>{item.title}</div>
          <div className='text-secondary text-sm mt-2'>{item.description}</div>
          <div className='mt-5'>
            <HollowButton text={'Fazer Cotação'} href={item.url} isExternal={item.isExternal} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SegItem;
