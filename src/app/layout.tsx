import '@/styles/globals.css'
import '@/styles/globals.scss'

import { Open_Sans } from 'next/font/google'

import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-open-sans',
  display: 'swap',
  fallback: ['Poppins', 'sans-serif'],
})

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
      <link
        rel='icon'
        type='image/ico'
        sizes='32x32'
        href='/assets/favicons/favicon.ico'
      />
      <body className={openSans.variable} suppressHydrationWarning>
        <div className='flex min-h-screen flex-col justify-between'>
          <div>
            <Navbar />
            <main>{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
