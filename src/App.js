import './App.css';
import logo_rebel from './imagenes/Logo_Rebel.png';
import fondo from './imagenes/Fondo.png';
import Videofondo from './imagenes/VideoFondo.mp4';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from "react";

function App() {

  const [numClicks, setNumClicks] = useState(0); 

  const clickControl = () => {
    setNumClicks(numClicks + 1);
  };

  const resetCounter = () => {
    setNumClicks(0);
  };

  

  return (
    <div className="App">
      <div className='video-wrapper'>
        <video playsInline autoPlay muted loop poster={fondo}>
          <source src={Videofondo} type='video/mp4' />
        </video>
      </div>
      <div className='My-logo-container'>
        <img 
          className='My-logo'
          src={logo_rebel}
          alt="My logo RebelDevelop"
        />
      </div>
      <div className='main-container'>
        <Contador 
          numClicks={numClicks}
        />
        <Boton 
          text="Click" 
          isClickButton={true}
          clickControl={clickControl}
        />
        <Boton 
          text="Reset"
          isClickButton={false}
          clickControl={resetCounter}
        />
      </div>
    </div>
  );
}

export default App;
