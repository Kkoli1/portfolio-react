import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/HeroSection'
import LeftPillar from './components/LeftPillar'
import RightPillar from './components/RightPillar'
import ScrollText from './components/ScrollText'
import About from './components/AboutSection'
import Timer from './components/Timer'
import LoadingScreen from './components/LoadingScreen'
import { useState } from 'react'
import Cursor from './components/Cursor'
import Experience from './components/ExperienceSection'


function App() {

  const [timerComplete, setTimerComplete] = useState(false);

  const handleTimerComplete = () => {
    setTimerComplete(true);
  };

  return (
    <>
      <div className='main-app-container'>
        <Cursor />
        <LoadingScreen />
        {!timerComplete ? (
          <Timer duration={2} onTimerComplete={handleTimerComplete} />
        ) : (
          <div>
            <div className="spacer"></div>
            <ScrollText />
            <Navbar />
            <Hero />
            <LeftPillar />
            <RightPillar />
            <div className="spacer"></div>
            <div className="section-display">
              <About />
              <Experience />
            </div>

          </div>
        )}
      </div>
    </>
  )
}

export default App
