import Image from 'next/image'
import Hero from '@/components/main/Hero'
import AboutMe from '@/components/main/AboutMe'
import Skills from '@/components/main/Skills'
import Projects from '@/components/main/Projects'
import Footer from '@/components/main/Footer'
export default function Home() {
  return (
   <>
   <main className='h-full w-full'>
   <div className='flex flex-col  gap-20' > 
    <Hero/>
    <AboutMe/>
    <Skills/>
    <Projects/>
    <Footer/>
    </div>
   </main>
   </>
  )
}
