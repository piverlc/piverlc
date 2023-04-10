import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <h1 className={`${inter.className} text-slate-950 text-4xl`}>Blog WIP</h1>;
}
