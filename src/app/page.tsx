import Image from 'next/image';
import { Button } from '@chakra-ui/react'

import HomeHero from "@components/HomeHero"
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between gap-10">

      <HomeHero />
    </main>
  );
}
