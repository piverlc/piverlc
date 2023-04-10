import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <h1 className={`${inter.className} text-4xl text-slate-950`}>Blog WIP</h1>;
}
