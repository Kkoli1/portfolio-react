import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/HeroSection";
import LeftPillar from "./components/LeftPillar";
import RightPillar from "./components/RightPillar";
import ScrollText from "./components/ScrollText";
import About from "./sections/AboutSection";
import Timer from "./components/Timer";
import LoadingScreen from "./components/LoadingScreen";
import { useState } from "react";
import Cursor from "./components/Cursor";
import Experience from "./sections/ExperienceSection";
import GrainyTexture from "./components/GrainyTexture";
import AnimatedCircle from "./components/AnimatedCircle";
import useResizeHandler from "./utils/useResizeHandler";
import Spacer from "./components/Spacer";

function App() {
  const [timerComplete, setTimerComplete] = useState(false);

  useResizeHandler();

  const handleTimerComplete = () => {
    setTimerComplete(true);
  };

  return (
    <>
      <div className="main-app-container">
        <Cursor />
        <LoadingScreen />
        <GrainyTexture />
        <AnimatedCircle />
        <AnimatedCircle />
        {!timerComplete ? (
          <Timer duration={2} onTimerComplete={handleTimerComplete} />
        ) : (
          <div>
            <Spacer />
            <ScrollText />
            <Navbar />
            <Hero />
            <LeftPillar />
            <RightPillar />
            <Spacer />
            <About />
            <Spacer />
            <Experience />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
