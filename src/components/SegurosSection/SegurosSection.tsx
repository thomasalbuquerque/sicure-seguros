import React from 'react';
import { FaTruckFront } from 'react-icons/fa6';
import { IoHome } from 'react-icons/io5';
import { MdBusinessCenter } from 'react-icons/md';
import { IoBody } from 'react-icons/io5';
import { BiSolidBuildingHouse } from 'react-icons/bi';
import { FaHeartCirclePlus } from 'react-icons/fa6';
import { BsGlobeEuropeAfrica } from 'react-icons/bs';
import { MdPedalBike } from 'react-icons/md';
import { FaHouseUser } from 'react-icons/fa';
import { BsAirplaneFill } from 'react-icons/bs';
import { FaPlaneDeparture } from 'react-icons/fa';
import { LuBoxes } from 'react-icons/lu';
import { LiaHorseHeadSolid } from 'react-icons/lia';
import SegItem from './SegItem';

const items = [
  {
    title: 'Auto',
    icon: <FaTruckFront className="w-8 h-auto" />,
    description: 'Assegure seu veículo contra furtos, roubos e acidentes.',
  },
  {
    title: 'Residencial',
    icon: <IoHome className="w-8 h-auto" />,
    description:
      'Proteja seu lar com contra danos, incêndios e desastres naturais.',
  },
  {
    title: 'Empresa',
    icon: <MdBusinessCenter className="w-8 h-auto" />,
    description: 'Mantenha seu negócio seguro com nosso plano empresarial.',
  },
  {
    title: 'Vida',
    icon: <FaHeartCirclePlus className="w-8 h-auto" />,
    description:
      'Seguros de vida individual e para colaboradores empresariais (global).',
  },
  {
    title: 'Aeronáutico (Casco)',
    icon: <BsAirplaneFill className="w-8 h-auto" />,
    description: 'Assegure o avião contra danos no casco e nos motores.',
  },
  {
    title: 'Aeronáutico (R.E.T.A.)',
    icon: <FaPlaneDeparture className="w-8 h-auto" />,
    description:
      'Assegure contra danos a todos à bordo, bagagens e pessoas no solo.',
  },
  {
    title: 'Acidentes',
    icon: <IoBody className="w-8 h-auto" />,
    description: 'Fique protegido com nosso seguro contra acidentes pessoais.',
  },
  {
    title: 'Aluguel',
    icon: <FaHouseUser className="w-8 h-auto" />,
    description:
      'Assegure seu aluguel caso o inquilino não cumpra com o pagamento.',
  },
  {
    title: 'Viagem',
    icon: <BsGlobeEuropeAfrica className="w-8 h-auto" />,
    description: 'Sua viagem estará assegurada contra imprevistos.',
  },
  {
    title: 'Cavalo',
    icon: <LiaHorseHeadSolid className="w-8 h-auto" />,
    description: 'Proteja a vida do seu animal contra qualquer imprevisto.',
  },
  {
    title: 'Condomínio',
    icon: <BiSolidBuildingHouse className="w-8 h-auto" />,
    description: 'Coberturas contra danos, responsabilidade civil e mais.',
  },
  {
    title: 'Diversos',
    icon: <LuBoxes className="w-8 h-auto" />,
    description:
      'Outras soluções sob medida para suas necessidades específicas.',
  },
];

const SegurosSection = () => {
  return (
    <>
      <div
        id="segurosSection"
        className="max-w-7xl bg-bgColorDarker py-12 mt-8 xsm:py-16 xsm:mt-16 rounded-[3.5rem]">
        <div className="font-Title text-secondary text-3xl xsm:text-5xl text-center">
          Soluções de Seguros
        </div>
        <div className="flex flex-wrap px-16 justify-between">
          {items.map((item) => (
            <SegItem item={item} />
          ))}
        </div>
      </div>
      <div></div>
    </>
  );
};

export default SegurosSection;
