'use client';
import Navbar from '@/components/Navbar/Navbar';
import HeroSection from '@/components/HeroSection/HeroSection';
import SegurosSection from '@/components/SegurosSection/SegurosSection';
import UnderDevelopmentSection from '@/components/UnderDevelopmentSection/UnderDevelopmentSection';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-6 py-8 md:px-24 md:py-10 items-center">
      <Navbar />
      <HeroSection />
      <SegurosSection />
      <UnderDevelopmentSection />
    </main>
  );
}
