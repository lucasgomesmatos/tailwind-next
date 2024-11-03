import { Sidebar } from '@/components/sidebar'
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
    <html lang="pt-BR" className="antialiased">
      <body className={cn(inter.className)}>
        <div className="min-h-screen lg:grid lg:grid-cols-app dark:bg-zinc-900">
          <Sidebar />
          <main className="max-w-[100vw] px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
