import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FaTruckFront } from 'react-icons/fa6';
import { IoHome } from 'react-icons/io5';
import { MdBusinessCenter } from 'react-icons/md';
import { BiSolidBuildingHouse } from 'react-icons/bi';
import { FaHeartCirclePlus } from 'react-icons/fa6';
import { IoBody } from 'react-icons/io5';
import { BsGlobeEuropeAfrica } from 'react-icons/bs';
import { MdPedalBike } from 'react-icons/md';
import { FaHouseUser } from 'react-icons/fa';
import { BsAirplaneFill } from 'react-icons/bs';
import { FaPlaneDeparture } from 'react-icons/fa';
import { LuBoxes } from 'react-icons/lu';
import { LiaHorseHeadSolid } from 'react-icons/lia';

import { RxCaretDown } from 'react-icons/rx';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const insurances = [
  { title: 'Auto', icon: <FaTruckFront className="text-primary" /> },
  { title: 'Residencial', icon: <IoHome className="text-primary" /> },
  {
    title: 'Empresarial',
    icon: <MdBusinessCenter className="text-primary" />,
  },
  { title: 'Vida', icon: <FaHeartCirclePlus className="text-primary" /> },
  {
    title: 'Aeronáutico (Casco)',
    icon: <FaPlaneDeparture className="text-primary" />,
  },
  {
    title: 'Aeronáutico (R.E.T.A)',
    icon: <BsAirplaneFill className="text-primary" />,
  },
  {
    title: 'Acidentes',
    icon: <IoBody className="text-primary" />,
  },
  {
    title: 'Aluguel',
    icon: <FaHouseUser className="text-primary" />,
  },
  {
    title: 'Viagem',
    icon: <BsGlobeEuropeAfrica className="text-primary" />,
  },
  {
    title: 'Cavalo',
    icon: <LiaHorseHeadSolid className="text-primary" />,
  },
  {
    title: 'Condomínio',
    icon: <BiSolidBuildingHouse className="text-primary" />,
  },
  {
    title: 'Diversos',
    icon: <LuBoxes className="text-primary" />,
  },
];

const firstHalftInsurances = insurances.slice(0, 6);
const secondHalfInsurances = insurances.slice(6, 12);

export default function SegurosDropdown() {
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
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full items-center justify-center rounded-md   font-semibold text-secondary">
          Seguros
          <RxCaretDown className="-mr-1 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute right-0 z-10 mt-2 w-80 origin-top-right rounded-md shadow-lg bg-bgColor ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-2 flex">
            <div>
              {firstHalftInsurances.map((insurance, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    // <a href="insurance.path"
                    <div
                      className={classNames(
                        active ? ' text-primary' : 'text-secondary',
                        'flex gap-2 px-4 py-2 text-sm items-center cursor-pointer'
                      )}
                      onClick={scrollToSection}>
                      {insurance.icon}
                      {insurance.title}
                      {/*</a> */}
                    </div>
                  )}
                </Menu.Item>
              ))}
            </div>

            <div>
              {secondHalfInsurances.map((insurance, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    // <a href="insurance.path"
                    <div
                      className={classNames(
                        active ? ' text-primary' : 'text-secondary',
                        'flex gap-2 px-4 py-2 text-sm items-center cursor-pointer'
                      )}
                      onClick={scrollToSection}>
                      {insurance.icon}
                      {insurance.title}
                      {/*</a> */}
                    </div>
                  )}
                </Menu.Item>
              ))}
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
