import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Masterizando Tailwind',
  description: 'Aprenda a usar o Tailwind CSS em projetos Next.js',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn(inter.className)}>
        <div className="grid-cols-app grid min-h-screen">
          <aside className="border-r border-zinc-200 px-5 py-8">sidebar</aside>
          <main className="px-4 pb-12 pt-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
