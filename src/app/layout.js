import { Inter } from 'next/font/google'
import './globals.css'
import StarsCanvas from '@/components/main/StarBackground'
import NavBar from '@/components/main/NavBar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio  App',
  description: 'This is my Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
<NavBar/>
        <StarsCanvas/>
        {children}
        </body>
    </html>
  )
}
