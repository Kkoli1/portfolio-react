import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/HeroSection'
import LeftPillar from './components/LeftPillar'
import RightPillar from './components/RightPillar'
import ScrollText from './components/ScrollText'
import About from './components/AboutSection'
import Timer from './components/Timer'
import { useState } from 'react'

function App() {

  const [timerComplete, setTimerComplete] = useState(false);

  const handleTimerComplete = () => {
    setTimerComplete(true);
  };

  return (
    <>
      <div className='main-app-container'>
        {!timerComplete ? (
          <Timer duration={1} onTimerComplete={handleTimerComplete} />
        ) : (
          <div>
            <div className="spacer"></div>
            <ScrollText />
            <Navbar />
            <Hero />
            <LeftPillar />
            <RightPillar />
            {/* {/* <div className="spacer"></div> */}
            <div className="spacer"></div>
            <About />
          </div>
        )}


        {/* <About /> */}
        {/* <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div> */}
      </div>
    </>
  )
}

export default App
