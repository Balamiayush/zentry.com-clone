import React from 'react'
import Homepage from './components/Homepage'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full overflow-hidden h-[200vh] '>
      <Homepage/>
    </div>
    
  )
}

export default App