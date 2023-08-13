'use client';
import Navbar from '@/components/Navbar/Navbar';
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
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10 py-8 md:px-24 md:py-10">
      <Navbar />
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
    </main>
  );
}
