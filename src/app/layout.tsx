import '@/styles/globals.css'
import '@/styles/globals.scss'

import { Inter, Rubik } from 'next/font/google'

import { AuthProvider } from '@/auth/AuthProvider'
import NextThemeProvider from '@/components/Common/NextThemeProvider'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

// eslint-disable-next-line no-unused-vars
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap',
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
    <html
      lang='en'
      suppressHydrationWarning
      className={`${inter.variable} ${rubik.variable}`}>
      <link
        rel='icon'
        type='image/ico'
        sizes='32x32'
        href='/assets/favicons/favicon.ico'
      />
      <body suppressHydrationWarning>
        <AuthProvider>
          <NextThemeProvider>
            <div className='flex min-h-screen flex-col justify-between bg-surface-50'>
              <div>
                <Navbar />
                <main>{children}</main>
              </div>
              <Footer />
            </div>
          </NextThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
