import React from 'react'
import TopDestination from './TopDestination'
import Hero from './Hero'
import Categories from './Categories'
import OurExperiences from './OurExperiences'
import Testimonials from './Testimonials'
import Footer from './Footer'
import Payment from '../Payment/Payment'

function Home() {
  return (
    <div>
        <Hero />
        <TopDestination />
        <Categories />
        <OurExperiences />
        <Testimonials />
        <Footer />
        <Payment />
    </div>
  )
}

export default Home