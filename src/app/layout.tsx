import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Masterizando Tailwind',
  description: 'Aprenda a usar o Tailwind CSS em projetos Next.js',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` 
        ${inter.className}
        antialiased bg-zinc-800 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
