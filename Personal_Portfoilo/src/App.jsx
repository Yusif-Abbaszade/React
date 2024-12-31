import Navbar from "./layout/Navbar"
import backvideo from './assets/video/background.mp4'
import './assets/css/video.css'
import FixedProfile from "./components/FixedProfile"
import Home from "./components/Home"
import './assets/css/sectionsR.css'
import AboutUs from "./components/AboutUs"
import { useEffect, useState } from "react"
import OurService from "./components/OurService"
import MySkill from "./components/MySkill"

const App = () => {
  const [thmColor, setThmColor] = useState('white');
  const [visibleElement, setVisibleElement] = useState('');


  const checkIsVisible = ()=>{
    const home = document.getElementById('home');
    const aboutus = document.getElementById('aboutus');
    const ourservice = document.getElementById('ourservice');
    const myskill = document.getElementById('myskill');
    const homeRect = home.getBoundingClientRect();
    const aboutusRect = aboutus.getBoundingClientRect();
    const ourserviceRect = ourservice.getBoundingClientRect();
    const myskilleRect = myskill.getBoundingClientRect();
    if(homeRect.bottom <= window.innerHeight <= homeRect.top){
      setVisibleElement('home');
    }
    else if(aboutusRect.bottom <= window.innerHeight <= aboutusRect.top){
      setVisibleElement('aboutus');
    }
    else if(ourserviceRect.bottom <= window.innerHeight <= ourserviceRect.top){
      setVisibleElement('ourservice');
    }
    else if(myskilleRect.bottom <= window.innerHeight <= myskilleRect.top){
      setVisibleElement('myskill');
    }
  };



  useEffect(()=>{
    document.addEventListener('scroll', ()=>{
      checkIsVisible();
      if(visibleElement == 'home'){
        document.getElementById('homebtn').style = 'background:goldenrod;';
        if(thmColor == 'white'){
          // document.getElementById('homebtn').style = 'background:#1f3434;';
          document.getElementById('aboutusbtn').style = 'background:#1f3434;';
          document.getElementById('ourservicebtn').style = 'background:#1f3434;';
          document.getElementById('myskillbtn').style = 'background:#1f3434;';
          document.getElementById('portfoliobtn').style = 'background:#1f3434;';
          document.getElementById('testimonialebtn').style = 'background:#1f3434;';
          document.getElementById('ourblogbtn').style = 'background:#1f3434;';
          document.getElementById('contactusbtn').style = 'background:#1f3434;';
        }
        else {
          // document.getElementById('homebtn').style = 'background:#dcdde2;';
          document.getElementById('aboutusbtn').style = 'background:#dcdde2;';
          document.getElementById('ourservicebtn').style = 'background:#dcdde2;';
          document.getElementById('myskillbtn').style = 'background:#dcdde2;';
          document.getElementById('portfoliobtn').style = 'background:#dcdde2;';
          document.getElementById('testimonialebtn').style = 'background:#dcdde2;';
          document.getElementById('ourblogbtn').style = 'background:#dcdde2;';
          document.getElementById('contactusbtn').style = 'background:#dcdde2;';
        }
      }
      else if(visibleElement == 'aboutus'){
        document.getElementById('aboutusbtn').style = 'background:goldenrod;';
        if(thmColor == 'white'){
          document.getElementById('homebtn').style = 'background:#1f3434;';
          // document.getElementById('aboutusbtn').style = 'background:#1f3434;';
          document.getElementById('ourservicebtn').style = 'background:#1f3434;';
          document.getElementById('myskillbtn').style = 'background:#1f3434;';
          document.getElementById('portfoliobtn').style = 'background:#1f3434;';
          document.getElementById('testimonialebtn').style = 'background:#1f3434;';
          document.getElementById('ourblogbtn').style = 'background:#1f3434;';
          document.getElementById('contactusbtn').style = 'background:#1f3434;';
        }
        else {
          document.getElementById('homebtn').style = 'background:#dcdde2;';
          // document.getElementById('aboutusbtn').style = 'background:#dcdde2;';
          document.getElementById('ourservicebtn').style = 'background:#dcdde2;';
          document.getElementById('myskillbtn').style = 'background:#dcdde2;';
          document.getElementById('portfoliobtn').style = 'background:#dcdde2;';
          document.getElementById('testimonialebtn').style = 'background:#dcdde2;';
          document.getElementById('ourblogbtn').style = 'background:#dcdde2;';
          document.getElementById('contactusbtn').style = 'background:#dcdde2;';
        }
      }
      else if(visibleElement == 'ourservice'){
        document.getElementById('ourservicebtn').style = 'background:goldenrod;';
        if(thmColor == 'white'){
          document.getElementById('homebtn').style = 'background:#1f3434;';
          document.getElementById('aboutusbtn').style = 'background:#1f3434;';
          // document.getElementById('ourservicebtn').style = 'background:#1f3434;';
          document.getElementById('myskillbtn').style = 'background:#1f3434;';
          document.getElementById('portfoliobtn').style = 'background:#1f3434;';
          document.getElementById('testimonialebtn').style = 'background:#1f3434;';
          document.getElementById('ourblogbtn').style = 'background:#1f3434;';
          document.getElementById('contactusbtn').style = 'background:#1f3434;';
        }
        else {
          document.getElementById('homebtn').style = 'background:#dcdde2;';
          document.getElementById('aboutusbtn').style = 'background:#dcdde2;';
          // document.getElementById('ourservicebtn').style = 'background:#dcdde2;';
          document.getElementById('myskillbtn').style = 'background:#dcdde2;';
          document.getElementById('portfoliobtn').style = 'background:#dcdde2;';
          document.getElementById('testimonialebtn').style = 'background:#dcdde2;';
          document.getElementById('ourblogbtn').style = 'background:#dcdde2;';
          document.getElementById('contactusbtn').style = 'background:#dcdde2;';
        }
      }
      else if(visibleElement == 'myskill'){
        document.getElementById('myskillbtn').style = 'background:goldenrod;';
        if(thmColor == 'white'){
          document.getElementById('homebtn').style = 'background:#1f3434;';
          document.getElementById('aboutusbtn').style = 'background:#1f3434;';
          document.getElementById('ourservicebtn').style = 'background:#1f3434;';
          // document.getElementById('myskillbtn').style = 'background:#1f3434;';
          document.getElementById('portfoliobtn').style = 'background:#1f3434;';
          document.getElementById('testimonialebtn').style = 'background:#1f3434;';
          document.getElementById('ourblogbtn').style = 'background:#1f3434;';
          document.getElementById('contactusbtn').style = 'background:#1f3434;';
        }
        else {
          document.getElementById('homebtn').style = 'background:#dcdde2;';
          document.getElementById('aboutusbtn').style = 'background:#dcdde2;';
          document.getElementById('ourservicebtn').style = 'background:#dcdde2;';
          // document.getElementById('myskillbtn').style = 'background:#dcdde2;';
          document.getElementById('portfoliobtn').style = 'background:#dcdde2;';
          document.getElementById('testimonialebtn').style = 'background:#dcdde2;';
          document.getElementById('ourblogbtn').style = 'background:#dcdde2;';
          document.getElementById('contactusbtn').style = 'background:#dcdde2;';
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
        <OurService thmColor={thmColor} setThmColor={setThmColor} />
        <MySkill thmColor={thmColor} setThmColor={setThmColor} />
      </div>
    </div>
  )
}

export default App