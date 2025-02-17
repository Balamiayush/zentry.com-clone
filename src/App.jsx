import React from 'react'
import Homepage from './components/Homepage'
import LocomotiveScroll from 'locomotive-scroll';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full  overflow-hidden bg-[#DFDFF2] '>
      <Homepage/>
      <Page3/>
      <Page4/>
    </div>
    
  )
}

export default App