/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
// Standardize your component names and paths
import CarouselContainer from "../components/CarouselContainer";
import DumiProducts from "../components/DumiProducts"; 
import FooterComponent from "../components/FooterComponent";

const LandingPage = () => {
  const handleGreeting = () => {
    const txt = "Hello, Welcome to Alpha Mart";
    const wSpeech = window.speechSynthesis;
    const voice = new SpeechSynthesisUtterance(txt);
    
    // Configure voice settings before speaking
    voice.rate = 1.0; // 0.1 is very slow, 3.0 is very fast; 1.0 is normal
    wSpeech.speak(voice);
    
    console.log(wSpeech.getVoices());
  };

  return (
    <div>
      <button id="greeting-btn" onClick={handleGreeting} className="btn btn-primary">
        Click to Announce Greeting
      </button>
      
      <CarouselContainer />
      
      <h1 className="mt-4">Products</h1>
      <DumiProducts />
      
      <FooterComponent />
    </div>
  );
};

export default LandingPage;