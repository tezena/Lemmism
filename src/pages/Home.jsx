import React from 'react'
import HeroSection from '../components/LandingPageComponents/Hero'
import Art from '../components/LandingPageComponents/NextToHero'
import '../components/LandingPageComponents/style.css'
import Display from '../components/LandingPageComponents/Display'
import Footer from '../components/Footer'
function Home() {
  return (
    <>
    <HeroSection />
    <Art />

    <div className='hvh bg-secondary overflow-hidden' >
           <Display /> 
    </div>
    <Footer />
        
    </>
  )
}

export default Home