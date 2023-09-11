import Image from 'next/image';
import { Button } from '@chakra-ui/react'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between gap-10">
      <Button colorScheme='blue' style={{height:'100px'}}>Button</Button>

      <button
        type="button"
        className="rounded bg-indigo-500 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Button text
      </button>
    </main>
  );
}
