import { Hero } from '@/components/sections/Hero';
import { Disciplines } from '@/components/sections/Disciplines';
import { About } from '@/components/sections/About';
import { Schedule } from '@/components/sections/Schedule';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Disciplines />
      <About />
      <Schedule />
      <Contact />
    </>
  );
}
