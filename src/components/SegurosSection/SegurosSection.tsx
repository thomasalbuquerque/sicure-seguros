import React from 'react';
import Image from 'next/image';
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

const SegurosSection = () => {
  return (
    <>
      <div>
        <FaTruckFront className="text-primary" />
        <IoHome className="text-primary" />
        <MdBusinessCenter className="text-primary" />
        <BiSolidBuildingHouse className="text-primary" />
        <FaHeartCirclePlus className="text-primary" />
        <IoBody className="text-primary" />
        <BsGlobeEuropeAfrica className="text-primary" />
        <MdPedalBike className="text-primary" />
        <FaHouseUser className="text-primary" />
        <BsAirplaneFill className="text-primary" />
        <FaPlaneDeparture className="text-primary" />
        <LuBoxes className="text-primary" />
        <LiaHorseHeadSolid className="text-primary" />
      </div>
    </>
  );
};

export default SegurosSection;
