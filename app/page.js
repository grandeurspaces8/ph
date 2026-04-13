'use client'
import { Suspense } from 'react'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import WhyPalmHills from '@/components/WhyPalmHills'
import Gallery from '@/components/Gallery'
import ContactBar from '@/components/ContactBar'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import UTMCapture from '@/components/UTMCapture'

export default function Home() {
  return (
    <Suspense fallback={null}>
      <UTMCapture />
      <Hero />
      <Projects />
      <WhyPalmHills />
      <Gallery />
      <ContactBar />
      <Footer />
      <FloatingButtons />
    </Suspense>
  )
}
