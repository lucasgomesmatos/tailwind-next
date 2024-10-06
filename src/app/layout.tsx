import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Masterizando Tailwind',
  description: 'Aprenda a usar o Tailwind CSS em projetos Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
