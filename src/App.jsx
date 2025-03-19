import React from 'react'
import Homepage from './components/Homepage'
import LocomotiveScroll from 'locomotive-scroll';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Features from './components/Features';
import Story from './components/Story';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full  overflow-hidden bg-[#DFDFF2] '>
      <Homepage/>
      <Page3/>
      <Features/>
      <Story/>
      <Page4/>
    </div>
    
  )
}

export default App