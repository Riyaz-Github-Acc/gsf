import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Genesis Sports Foundation',
  description: 'Sports Academy Based In Coimbatore',
  icons: ['/assets/logos/favicon.png']
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={rubik.className}>{children}</body>
    </html>
  )
}
