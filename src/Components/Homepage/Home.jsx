import React from 'react'
import TopDestination from './TopDestination'
import Hero from './Hero'
import Categories from './Categories'
import OurExperiences from './OurExperiences'
import Testimonials from './Testimonials'
import Footer from './Footer'
import Payment from '../Payment/Payment'
import Navbar from './Navbar'
import Thankyou from '../Payment/Thankyou'

function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <TopDestination />
      <Categories />
      <OurExperiences />
      <Testimonials />
      {/* <Footer /> */}
      {/* remove the below 2 components this is just for my testing */}
      {/* <Payment />
      <Thankyou /> */}
    </div>
  )
}

export default Home