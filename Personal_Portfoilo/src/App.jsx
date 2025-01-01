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
import Portfolio from "./components/Portfolio"
import Testimonial from "./components/Testimonial"
import OurBlog from "./components/OurBlog"
import ContactUs from "./components/ContactUs"

const App = () => {
  const [thmColor, setThmColor] = useState('white');
  const [visibleElement, setVisibleElement] = useState('');


  const checkIsVisible = ()=>{
    const home = document.getElementById('home');
    const aboutus = document.getElementById('aboutus');
    const ourservice = document.getElementById('ourservice');
    const myskill = document.getElementById('myskill');
    const portfolio = document.querySelector('.portfolio');
    const testimonial = document.querySelector('.testimonial');
    const ourblog = document.querySelector('.ourblog');
    const contactus = document.querySelector('.contactus');
    //-----------------
    const homeRect = home.getBoundingClientRect();
    const aboutusRect = aboutus.getBoundingClientRect();
    const ourserviceRect = ourservice.getBoundingClientRect();
    const myskillRect = myskill.getBoundingClientRect();
    const portfolioRect = portfolio.getBoundingClientRect();
    const testimonialRect = testimonial.getBoundingClientRect();
    const ourblogRect = ourblog.getBoundingClientRect();
    const contactusRect = contactus.getBoundingClientRect();

    //-----------------

    document.getElementById('homebtn').onclick = ()=>{
      window.scroll(0, homeRect.top);
    };
    document.getElementById('aboutusbtn').onclick = ()=>{
      window.scroll(0, aboutusRect.top);
    };
    document.getElementById('ourservicebtn').onclick = ()=>{
      window.scroll(0, ourserviceRect.top);
    };
    document.getElementById('myskillbtn').onclick = ()=>{
      window.scroll(0, myskillRect.top);
    };
    document.getElementById('portfoliobtn').onclick = ()=>{
      window.scroll(0, portfolioRect.top);
    };
    document.getElementById('testimonialbtn').onclick = ()=>{
      window.scroll(0, testimonialRect.top);
    };
    document.getElementById('ourblogbtn').onclick = ()=>{
      window.scroll(0, ourblogRect.top);
    };
    document.getElementById('contactusbtn').onclick = ()=>{
      window.scroll(0, contactusRect.top);
    };



    //-----------------
    if(homeRect.bottom <= window.innerHeight <= homeRect.top){
      setVisibleElement('home');
    }
    else if(aboutusRect.bottom <= window.innerHeight <= aboutusRect.top){
      setVisibleElement('aboutus');
    }
    else if(ourserviceRect.bottom <= window.innerHeight <= ourserviceRect.top){
      setVisibleElement('ourservice');
    }
    else if(myskillRect.bottom <= window.innerHeight <= myskillRect.top){
      setVisibleElement('myskill');
    }
    else if(portfolioRect.bottom <= window.innerHeight <= portfolioRect.top){
      setVisibleElement('portfolio');
    }
    else if(myskillRect.testimonialRect <= window.innerHeight <= testimonialRect.top){
      setVisibleElement('testimonial');
    }
    else if(ourblogRect.bottom <= window.innerHeight <= ourblogRect.top){
      setVisibleElement('ourblog');
    }
    else if(contactusRect.bottom <= window.innerHeight <= contactusRect.top){
      setVisibleElement('contactus');
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
          document.getElementById('testimonialbtn').style = 'background:#1f3434;';
          document.getElementById('ourblogbtn').style = 'background:#1f3434;';
          document.getElementById('contactusbtn').style = 'background:#1f3434;';
        }
        else {
          // document.getElementById('homebtn').style = 'background:#dcdde2;';
          document.getElementById('aboutusbtn').style = 'background:#dcdde2;';
          document.getElementById('ourservicebtn').style = 'background:#dcdde2;';
          document.getElementById('myskillbtn').style = 'background:#dcdde2;';
          document.getElementById('portfoliobtn').style = 'background:#dcdde2;';
          document.getElementById('testimonialbtn').style = 'background:#dcdde2;';
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
          document.getElementById('testimonialbtn').style = 'background:#1f3434;';
          document.getElementById('ourblogbtn').style = 'background:#1f3434;';
          document.getElementById('contactusbtn').style = 'background:#1f3434;';
        }
        else {
          document.getElementById('homebtn').style = 'background:#dcdde2;';
          // document.getElementById('aboutusbtn').style = 'background:#dcdde2;';
          document.getElementById('ourservicebtn').style = 'background:#dcdde2;';
          document.getElementById('myskillbtn').style = 'background:#dcdde2;';
          document.getElementById('portfoliobtn').style = 'background:#dcdde2;';
          document.getElementById('testimonialbtn').style = 'background:#dcdde2;';
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
          document.getElementById('testimonialbtn').style = 'background:#1f3434;';
          document.getElementById('ourblogbtn').style = 'background:#1f3434;';
          document.getElementById('contactusbtn').style = 'background:#1f3434;';
        }
        else {
          document.getElementById('homebtn').style = 'background:#dcdde2;';
          document.getElementById('aboutusbtn').style = 'background:#dcdde2;';
          // document.getElementById('ourservicebtn').style = 'background:#dcdde2;';
          document.getElementById('myskillbtn').style = 'background:#dcdde2;';
          document.getElementById('portfoliobtn').style = 'background:#dcdde2;';
          document.getElementById('testimonialbtn').style = 'background:#dcdde2;';
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
          document.getElementById('testimonialbtn').style = 'background:#1f3434;';
          document.getElementById('ourblogbtn').style = 'background:#1f3434;';
          document.getElementById('contactusbtn').style = 'background:#1f3434;';
        }
        else {
          document.getElementById('homebtn').style = 'background:#dcdde2;';
          document.getElementById('aboutusbtn').style = 'background:#dcdde2;';
          document.getElementById('ourservicebtn').style = 'background:#dcdde2;';
          // document.getElementById('myskillbtn').style = 'background:#dcdde2;';
          document.getElementById('portfoliobtn').style = 'background:#dcdde2;';
          document.getElementById('testimonialbtn').style = 'background:#dcdde2;';
          document.getElementById('ourblogbtn').style = 'background:#dcdde2;';
          document.getElementById('contactusbtn').style = 'background:#dcdde2;';
        }
      }
      else if(visibleElement == 'portfolio'){
        document.getElementById('portfoliobtn').style = 'background:goldenrod;';
        if(thmColor == 'white'){
          document.getElementById('homebtn').style = 'background:#1f3434;';
          document.getElementById('aboutusbtn').style = 'background:#1f3434;';
          document.getElementById('ourservicebtn').style = 'background:#1f3434;';
          document.getElementById('myskillbtn').style = 'background:#1f3434;';
          // document.getElementById('portfoliobtn').style = 'background:#1f3434;';
          document.getElementById('testimonialbtn').style = 'background:#1f3434;';
          document.getElementById('ourblogbtn').style = 'background:#1f3434;';
          document.getElementById('contactusbtn').style = 'background:#1f3434;';
        }
        else {
          document.getElementById('homebtn').style = 'background:#dcdde2;';
          document.getElementById('aboutusbtn').style = 'background:#dcdde2;';
          document.getElementById('ourservicebtn').style = 'background:#dcdde2;';
          document.getElementById('myskillbtn').style = 'background:#dcdde2;';
          // document.getElementById('portfoliobtn').style = 'background:#dcdde2;';
          document.getElementById('testimonialbtn').style = 'background:#dcdde2;';
          document.getElementById('ourblogbtn').style = 'background:#dcdde2;';
          document.getElementById('contactusbtn').style = 'background:#dcdde2;';
        }
      }
      else if(visibleElement == 'testimonial'){
        document.getElementById('testimonialbtn').style = 'background:goldenrod;';
        if(thmColor == 'white'){
          document.getElementById('homebtn').style = 'background:#1f3434;';
          document.getElementById('aboutusbtn').style = 'background:#1f3434;';
          document.getElementById('ourservicebtn').style = 'background:#1f3434;';
          document.getElementById('myskillbtn').style = 'background:#1f3434;';
          document.getElementById('portfoliobtn').style = 'background:#1f3434;';
          // document.getElementById('testimonialbtn').style = 'background:#1f3434;';
          document.getElementById('ourblogbtn').style = 'background:#1f3434;';
          document.getElementById('contactusbtn').style = 'background:#1f3434;';
        }
        else {
          document.getElementById('homebtn').style = 'background:#dcdde2;';
          document.getElementById('aboutusbtn').style = 'background:#dcdde2;';
          document.getElementById('ourservicebtn').style = 'background:#dcdde2;';
          document.getElementById('myskillbtn').style = 'background:#dcdde2;';
          document.getElementById('portfoliobtn').style = 'background:#dcdde2;';
          // document.getElementById('testimonialbtn').style = 'background:#dcdde2;';
          document.getElementById('ourblogbtn').style = 'background:#dcdde2;';
          document.getElementById('contactusbtn').style = 'background:#dcdde2;';
        }
      }
      else if(visibleElement == 'ourblog'){
        document.getElementById('ourblogbtn').style = 'background:goldenrod;';
        if(thmColor == 'white'){
          document.getElementById('homebtn').style = 'background:#1f3434;';
          document.getElementById('aboutusbtn').style = 'background:#1f3434;';
          document.getElementById('ourservicebtn').style = 'background:#1f3434;';
          document.getElementById('myskillbtn').style = 'background:#1f3434;';
          document.getElementById('portfoliobtn').style = 'background:#1f3434;';
          document.getElementById('testimonialbtn').style = 'background:#1f3434;';
          // document.getElementById('ourblogbtn').style = 'background:#1f3434;';
          document.getElementById('contactusbtn').style = 'background:#1f3434;';
        }
        else {
          document.getElementById('homebtn').style = 'background:#dcdde2;';
          document.getElementById('aboutusbtn').style = 'background:#dcdde2;';
          document.getElementById('ourservicebtn').style = 'background:#dcdde2;';
          document.getElementById('myskillbtn').style = 'background:#dcdde2;';
          document.getElementById('portfoliobtn').style = 'background:#dcdde2;';
          document.getElementById('testimonialbtn').style = 'background:#dcdde2;';
          // document.getElementById('ourblogbtn').style = 'background:#dcdde2;';
          document.getElementById('contactusbtn').style = 'background:#dcdde2;';
        }
      }
      else if(visibleElement == 'contactus'){
        document.getElementById('contactusbtn').style = 'background:goldenrod;';
        if(thmColor == 'white'){
          document.getElementById('homebtn').style = 'background:#1f3434;';
          document.getElementById('aboutusbtn').style = 'background:#1f3434;';
          document.getElementById('ourservicebtn').style = 'background:#1f3434;';
          document.getElementById('myskillbtn').style = 'background:#1f3434;';
          document.getElementById('portfoliobtn').style = 'background:#1f3434;';
          document.getElementById('testimonialbtn').style = 'background:#1f3434;';
          document.getElementById('ourblogbtn').style = 'background:#1f3434;';
          // document.getElementById('contactusbtn').style = 'background:#1f3434;';
        }
        else {
          document.getElementById('homebtn').style = 'background:#dcdde2;';
          document.getElementById('aboutusbtn').style = 'background:#dcdde2;';
          document.getElementById('ourservicebtn').style = 'background:#dcdde2;';
          document.getElementById('myskillbtn').style = 'background:#dcdde2;';
          document.getElementById('portfoliobtn').style = 'background:#dcdde2;';
          document.getElementById('testimonialbtn').style = 'background:#dcdde2;';
          document.getElementById('ourblogbtn').style = 'background:#dcdde2;';
          // document.getElementById('contactusbtn').style = 'background:#dcdde2;';
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
        <Portfolio />
        <Testimonial />
        <OurBlog thmColor={thmColor} setThmColor={setThmColor} />
        <ContactUs />
      </div>
    </div>
  )
}

export default App