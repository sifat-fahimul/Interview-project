import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FunFact from './components/body/FunFact/FunFact';
import Home from './components/body/home/Home';
import OurOffering from './components/body/OurOffering/OurOffering';
import Product from './components/body/Product/Product';
import Reader from './components/body/Reader/Reader';
import Testomonial from './components/body/Testomonial/Testomonial';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';

// import Particles from "react-tsparticles";
import Particles from "react-tsparticles";

function App() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="App">
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
       
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
 <Header></Header>
 <Home></Home>
 <Product></Product>
 <OurOffering></OurOffering>
 <Reader></Reader>
 <Testomonial></Testomonial>
 <FunFact></FunFact>
 <Footer></Footer>
    </div>
  );
}

export default App;
