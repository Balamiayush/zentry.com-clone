import React from 'react'
import Homepage from './components/Homepage'
import LocomotiveScroll from 'locomotive-scroll';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Features from './components/Features';
import Story from './components/Story';
import Footer from './components/Footer';
import Contact from './components/Contact';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full  overflow-hidden bg-[#DFDFF2] '>
      <Homepage/>
      <Page3/>
      <Features/>
      <Story/>
      <Contact/>  
      <Footer/>
    </div>
    
  )
}

export default App