import React from "react";
import React, { useContext } from "react";
import CarouselContainer from "../components/CarouselContainer";
import FooterComponent from "../components/FooterComponent";
import DummyProducts from "../components/DummyProducts";

const LandingPage = () => {
  const handleGreeting = () => {
    let txt = "Welcome to Alpha Mart";
    let wSpeech = window.speechSynthesis;
    let voice = new SpeechSynthesisUtterance(txt);
    wSpeech.speak(voice);
    voice.rate=0.1;
  };


  return (
    <div>
      <button id="greeting-btn" onClick={handleGreeting}> Click to Announce Greeting</button>
      <CarouselContainer />
       <CarouselContainer />
      <h1>Products</h1>
      <DummyProducts />
      <FooterComponent />
    </div>
  );
};