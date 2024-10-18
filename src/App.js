import logo from './logo.svg';
import './App.css';

import Loading from './components/Loader/Loading';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from 'react';
import Showcase from './components/ShowCase/Showcase';
import Extra from './components/Extra/Extra';

gsap.registerPlugin(useGSAP);

const addAnimation = () => {
  gsap.to(".box", { rotation: 27, x: 100, duration: 5 });

}

function App() {
  const [isLoading, setIsLoading] = useState(true);


  const handleLoading = () => {
    setIsLoading(false);
  }


  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, [])

  return (
    // !isLoading ? (
    <div className="App">
      <Navbar />

      <header className="App-header">
        {/* <div onClick={addAnimation} className='box green'></div>
        <div className='box'></div>
        <div className='box'></div> */}

        <Extra />
        <Slider />
        <Footer />

        <Showcase />
      </header>
    </div>
    // ) :
    //   (
    //     <Loading />
  )

}

export default App;
