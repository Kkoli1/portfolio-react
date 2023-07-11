import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/HeroSection'
import LeftPillar from './components/LeftPillar'
import RightPillar from './components/RightPillar'
import ScrollText from './components/ScrollText'
import About from './components/AboutSection'
import { useEffect } from 'react';

function App() {
  console.log("Hello World1");

  useEffect(() => {
    // Append a timestamp as a query parameter to all resource URLs
    const timestamp = Date.now();
    const resourceUrls = [
      'src/App.jsx',
      // Add more resource URLs as needed
    ];

    resourceUrls.forEach(url => {
      const updatedUrl = `${url}?cache=${timestamp}`;
      const linkElement = document.createElement('link');
      linkElement.href = updatedUrl;
      linkElement.rel = 'stylesheet'; // If it's a CSS file
      // For JavaScript files, use: linkElement.src = updatedUrl;

      document.head.appendChild(linkElement);
    });
  }, []);

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
