import './App.css';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from 'react';

import Extra from './components/Extra/Extra';
import Scale from './components/Scale/Scale';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';
import Loading from './components/Loader/Loading';
import Showcase from './components/ShowCase/Showcase';
import FlipAnimation from './components/FlipAnimation/FlipAnimation';
import Section from './components/Section/Section';




gsap.registerPlugin(useGSAP);


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState()

  const handleLoading = () => {
    setIsLoading(false);
  }

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, [])

  return (
    !isLoading ? (<div className="App">
      <Navbar />
      <header className="App-header">
        <FlipAnimation setImage={setImage} />
        <Section image={image} />

        {/* <Slider />
        <Extra />
        <Scale />
        <Showcase />
        <Footer /> */}
      </header>
    </div>
    ) : (<Loading />)
  )

}

export default App;
