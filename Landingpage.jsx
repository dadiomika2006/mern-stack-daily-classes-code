import CarouselImage from '../components/CarouselImage';
import DummyProducts from '../components/DummyProducts';
import CarouselContainer from './../components/CarouselContainer';
import FooterComponents from './../components/FooterComponents';
const LandingPage = () => {

    const handleGreeting = () => {
        let txt="Welcome to Alpha Mart";
       let speech = window.speechSynthesis();
       let voice = new SpeechSynthesisisUtterance(txt);
       wspeech.speak(voice);
       voice.rate=0.1;
       console.log(wspeech.getVoices());
       };

  return (
    <div>
        <button id="greeting-btn">click to announce Greeting</button>
        <CarouselContainer/>
        <h1>product name</h1>
        <DummyProducts/>
        <FooterComponents/>

    </div>
  )
}

export default LandingPage;