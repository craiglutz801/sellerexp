import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CategoryInsight from '@/components/CategoryInsight'
import CostOfFriction from '@/components/CostOfFriction'
import Solution from '@/components/Solution'
import HowItWorks from '@/components/HowItWorks'
import WhatWeMeasure from '@/components/WhatWeMeasure'
import Benefits from '@/components/Benefits'
import Benchmarking from '@/components/Benchmarking'
import WhoItsFor from '@/components/WhoItsFor'
import ROI from '@/components/ROI'
import Objections from '@/components/Objections'
import FinalClose from '@/components/FinalClose'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryInsight />
        <CostOfFriction />
        <Solution />
        <HowItWorks />
        <WhatWeMeasure />
        <Benefits />
        <Benchmarking />
        <WhoItsFor />
        <ROI />
        <Objections />
        <FinalClose />
        <FinalCTA />
        <Footer />
      </main>
    </>
  )
}
