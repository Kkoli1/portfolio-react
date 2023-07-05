import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/HeroSection'
import LeftPillar from './components/LeftPillar'
import RightPillar from './components/RightPillar'
import ScrollText from './components/ScrollText'
import About from './components/AboutSection'

function App() {

  return (
    <>
      <div className='main-app-container'>
        <div className="spacer"></div>
        <ScrollText />
        <Navbar />
        <Hero />
        <LeftPillar />
        <RightPillar />
        {/* {/* <div className="spacer"></div> */}
        <div className="spacer"></div>
        <About />

        {/* <About /> */}
        {/* <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div> */}
      </div>
    </>
  )
}

export default App
