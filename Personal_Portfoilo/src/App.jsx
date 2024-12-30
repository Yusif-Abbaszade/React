import Navbar from "./layout/Navbar"
import backvideo from './assets/video/background.mp4'
import './assets/css/video.css'
import FixedProfile from "./components/FixedProfile"
import Home from "./components/Home"
import './assets/css/sectionsR.css'
import AboutUs from "./components/AboutUs"
import { useEffect, useState } from "react"

const App = () => {
  const [thmColor, setThmColor] = useState('white');
  const [visibleElement, setVisibleElement] = useState('');


  const checkIsVisible = ()=>{
    const home = document.getElementById('home');
    const aboutus = document.getElementById('aboutus');
    const homeRect = home.getBoundingClientRect();
    const aboutusRect = aboutus.getBoundingClientRect();
    if(homeRect.bottom <= window.innerHeight <= homeRect.top){
      setVisibleElement('home');
    }
    else if(aboutusRect.bottom <= window.innerHeight <= aboutusRect.top){
      setVisibleElement('aboutus');
    }
  };



  useEffect(()=>{
    document.addEventListener('scroll', ()=>{
      checkIsVisible();
      if(visibleElement == 'home'){
        document.getElementById('homebtn').style = 'background:goldenrod;';
        if(thmColor == 'white'){
          document.getElementById('aboutusbtn').style = 'background:#1f3434;';
        }
        else {
          document.getElementById('aboutusbtn').style = 'background:#dcdde2;';
        }
      }
      else if(visibleElement == 'aboutus'){
        document.getElementById('aboutusbtn').style = 'background:goldenrod;';
        if(thmColor == 'white'){
          document.getElementById('homebtn').style = 'background:#1f3434;';
        }
        else {
          document.getElementById('homebtn').style = 'background:#dcdde2;';
        }
      }
    });
  }, [thmColor, visibleElement]);

  return (
    <div className="mainbox">
      <div className="video-container">
        <div className="bx dark-theme"></div>
        <video autoPlay muted loop>
          <source src={backvideo} type="video/mp4" />
        </video>
      </div>

      <Navbar thmColor={thmColor} setThmColor={setThmColor}/>
      <div className="container-fluid mt-5 fixed-profile">
          <FixedProfile visibleElement={visibleElement} thmColor={thmColor} setThmColor={setThmColor} />
      </div>
      <div className="sections text-light mt-5">
        <Home thmColor={thmColor} setThmColor={setThmColor}/>
        <AboutUs thmColor={thmColor} setThmColor={setThmColor} />
      </div>
    </div>
  )
}

export default App