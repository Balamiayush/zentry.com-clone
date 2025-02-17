import React from 'react'
import Homepage from './components/Homepage'
import LocomotiveScroll from 'locomotive-scroll';
import Page3 from './pages/Page3';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-[500vh] overflow-hidden bg-[#DFDFF2] '>
      <Homepage/>
      <Page3/>
    </div>
    
  )
}

export default App