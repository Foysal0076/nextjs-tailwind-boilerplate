import './globals.css'

import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js + Tailwind CSS Starter',
  description:
    'A starter template to build amazing static websites with Next.js and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={openSans.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
