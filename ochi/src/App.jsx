import React from 'react'
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';


function App() {
  return (
    <div className='w-full min-h-screen text-white bg-black'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
    </div>
  )
}

export default App