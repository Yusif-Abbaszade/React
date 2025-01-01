import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube, FaMoon, FaSun } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import { PiLineVerticalBold } from "react-icons/pi";
import { HiMenuAlt2 } from "react-icons/hi";
import mainlogo_light from '../assets/img/mainlogo-light.png'
import mainlogo_dark from '../assets/img/mainlogo-dark.png'
import { IconContext } from "react-icons/lib";
import { MdExitToApp } from "react-icons/md";
import '../assets/css/navbar.css'
import { useState } from "react";
const Navbar = ({thmColor, setThmColor}) => {
  const theme = {
    dark:{
        logo : mainlogo_light,
        sliderbg:"#1f3238",
        sliderborder:"2px solid #a7adb0"
    },
    light:{
        logo: mainlogo_dark,
        sliderbg:"#d0d2d5",
        sliderborder:"2px solid #37484d"
    }
  };

  const handleMoonBtn = ()=>{
    document.querySelector('.moonbtn').style = 'background:white;'
    document.querySelector('.sunbtn').style = 'background:none;'
    document.querySelector('.bx').classList.remove('light-theme');
    document.querySelector('.bx').classList.add('dark-theme');
    document.querySelector('#logo').attributes[0].value = theme.dark.logo;
    document.querySelector('.theme-sec').style.background = theme.dark.sliderbg;
    document.querySelector('.theme-sec').style.border = theme.dark.sliderborder;
    [...document.querySelectorAll('.home-sections li .btn img')].map((item)=>{
        item.style.filter = 'brightness(100)';
    });
    [...document.querySelectorAll('.home-sections li .btn')].map((item)=>{
        item.style.background = '#1f3434';
        item.style.border = '1px solid #364949';
    });
    document.querySelector('.maincardhb').style.color = 'white';
    document.querySelector('#home').style.color = 'white';
    document.querySelector('#aboutus').style.color = 'white';
    setThmColor('white');
    [...document.querySelectorAll('.aboutcardmain .card-title')].map((item)=>{
        item.style.color = 'white';
    });
    [...document.querySelectorAll('.aboutcard .card-title')].map((item)=>{
        item.style.color = 'white';
    });
    [...document.querySelectorAll('.aboutcardmain .card-text')].map((item)=>{
        item.style.color = 'white';
    });
    [...document.querySelectorAll('.aboutcard .card-text')].map((item)=>{
        item.style.color = 'white';
    });
    document.querySelector('.ltswrktgtr').style.color = 'white';
    document.querySelector('#ourservice').style.color = 'white';
    document.querySelector('#myskill').style.color = 'white';
    document.querySelector('.portfolio').style.color = 'white';
    document.querySelector('.testimonial').style.color = 'white';
    // document.querySelector('.cardname').style.color = 'white';
    [...document.querySelectorAll('.cardname')].map((item)=>{
        item.style.color = 'black';
    });
    document.querySelector('.ourblog').style.color = 'white';
    document.querySelector('.contactus').style.color = 'white';
    [...document.querySelectorAll('input')].map(item=>{
        item.style.color = 'white';
        item.style = 'background:#4e5e63 !important;';
    });
};
const handleSunBtn = ()=>{
    document.querySelector('.moonbtn').style = 'background:none;'
    document.querySelector('.sunbtn').style = 'background:black;'
    document.querySelector('.bx').classList.remove('dark-theme');
    document.querySelector('.bx').classList.add('light-theme');
    document.querySelector('#logo').attributes[0].value = theme.light.logo;
    document.querySelector('.theme-sec').style.background = theme.light.sliderbg;
    document.querySelector('.theme-sec').style.border = theme.light.sliderborder;
    [...document.querySelectorAll('.btnimg')].map((item)=>{
        item.style.filter = 'brightness(0)';
    });
    [...document.querySelectorAll('.home-sections li .btn')].map((item)=>{
        item.style.background = '#dcdde2';
        item.style.border = '1px solid #ccd0da';
    });
    document.querySelector('.maincardhb').style.color = 'black';
    document.querySelector('#home').style.color = 'black';
    document.querySelector('#aboutus').style.color = 'black';
    [...document.querySelectorAll('.aboutcardmain .card-title')].map((item)=>{
        item.style.color = 'black';
    });
    [...document.querySelectorAll('.aboutcard .card-title')].map((item)=>{
        item.style.color = 'black';
    });
    [...document.querySelectorAll('.aboutcardmain .card-text')].map((item)=>{
        item.style.color = 'black';
    });
    [...document.querySelectorAll('.aboutcard .card-text')].map((item)=>{
        item.style.color = 'black';
    });
    document.querySelector('.ltswrktgtr').style.color = 'black';
    setThmColor('black');
    document.querySelector('#ourservice').style.color = 'black';
    document.querySelector('#myskill').style.color = 'black';
    document.querySelector('.portfolio').style.color = 'black';
    document.querySelector('.testimonial').style.color = 'black';
    // document.querySelector('.cardname').style.color = 'black';
    [...document.querySelectorAll('.cardname')].map((item)=>{
        item.style.color = 'black';
    });
    document.querySelector('.ourblog').style.color = 'black';
    document.querySelector('.contactus').style.color = 'black';
    [...document.querySelectorAll('input')].map(item=>{
        item.style.color = 'black';
        item.style = 'background:#cbcfd7 !important;';
    });
  };

  const openLeftMenu = ()=>{
    if(window.innerWidth > 768){
        document.querySelector('.leftmenusec').style.width = "40%";
        document.querySelector('.leftmenusec').style.transform = `translate(150%)`;
    }else{
        document.querySelector('.leftmenusec').style.width = "100%";
        document.querySelector('.leftmenusec').style.transform = 'translate(0%)';
    }
  };

  const closeLeftMenu = ()=>{
    if(window.innerWidth > 768){
        document.querySelector('.leftmenusec').style.transform = `translate(300%)`;
    }else{
        document.querySelector('.leftmenusec').style.transform = 'translate(100%)';
    }
  };

  return (
    <>
    <div className="container d-flex flex-row justify-content-between pt-3 align-items-center">
        <img src={mainlogo_light} alt="" width={"200px"} height={"51px"} id="logo"/>
        <div className="right-side gap-3 d-flex align-items-center">
            <div className="theme-sec rounded-5 pt-1" style={{background:"#1f3238", border:"2px solid #37484d", height:"50px"}}>
                <button type="button" className="btn rounded-5 moonbtn" onClick={handleMoonBtn} style={{background:"white"}}>
                    <IconContext.Provider value={{ color: "black"}}>
                        <div>
                            <FaMoon />
                        </div>
                    </IconContext.Provider>
                </button>
                <button type="button" className="btn sunbtn rounded-5" onClick={handleSunBtn}>
                    <IconContext.Provider value={{color: "white"}}>
                        <div>
                            <FaSun />
                        </div>
                    </IconContext.Provider>
                </button>
            </div>
            <div className="hrsec d-none d-md-block">
                <IconContext.Provider value={{size:'3em', color:'white'}}>
                    <div>
                        <PiLineVerticalBold />
                    </div>
                </IconContext.Provider>
            </div>
            <a href="#" className="btn btn-warning d-flex rounded-5 p-3 d-none d-md-flex"><b className="pt-1">HIRE ME</b>
                <IconContext.Provider value={{size:'2em'}}>
                    <div>
                        <IoIosMail />
                    </div>
                </IconContext.Provider>
            </a>
            <button onClick={openLeftMenu} className="btn">
                <IconContext.Provider value={{size:'2.8em', color:thmColor}}>
                    <div>
                        <HiMenuAlt2 />
                    </div>
                </IconContext.Provider>
            </button>
        </div>
    </div>
    <div className="leftmenusec" style={{position:"fixed", top:"0", zIndex:"1", width:"100%", height:"100%", background:"#061d1e", overflow:"scroll"}}>
        <button className="btn float-end" onClick={closeLeftMenu}>
        <IconContext.Provider value={{size:"2.8em", color:"white"}}>
            <div>
                <MdExitToApp />
            </div>
        </IconContext.Provider>
        </button>
        <div className="elements" style={{marginTop:"20%", marginLeft:"20px"}}>
            <img src={mainlogo_light} alt="" width={"200px"} height={"51px"} id="logo" className="mb-4"/>
            <ul className="list-unstyled sites-sec">
                <li className="mb-3"><a href="#" className="text-decoration-none text-light fs-5">HOME</a></li>
                <li className="mb-3"><a href="#" className="text-decoration-none text-light fs-5">ABOUT US</a></li>
                <li className="mb-3"><a href="#" className="text-decoration-none text-light fs-5">SERVICE</a></li>
                <li className="mb-3"><a href="#" className="text-decoration-none text-light fs-5">SKILL</a></li>
                <li className="mb-3"><a href="#" className="text-decoration-none text-light fs-5">PORTFOLIO</a></li>
                <li className="mb-3"><a href="#" className="text-decoration-none text-light fs-5">TESTIMONIAL</a></li>
                <li className="mb-3"><a href="#" className="text-decoration-none text-light fs-5">BLOGS</a></li>
                <li className="mb-3"><a href="#" className="text-decoration-none text-light fs-5">CONTACT</a></li>
            </ul>
            <button href="#" className="btn rounded-5 py-2 px-3 fs-5 d-flex justify-content-center mt-5" style={{background:"goldenrod"}}><span className="mt-1">GET IN TOUCH NOW</span>
                <IconContext.Provider value={{size:'2em'}}>
                    <div>
                        <IoIosMail />
                    </div>
                </IconContext.Provider>
            </button>
            <div className="text-light mt-4 fs-4"><b>SOCIAL LINKS</b></div>
            <ul className="list-unstyled d-flex gap-2 my-3 social-links">
                <li><a href="#">
                    <IconContext.Provider value={{size:'1.6em', color:"white"}}>
                        <div className="rounded-5 p-2" style={{background:"#1f3435", border:"1px solid #2e4142"}}>
                            <FaFacebookF />
                        </div>
                    </IconContext.Provider>
                </a>
                </li>
                <li><a href="#">
                    <IconContext.Provider value={{size:'1.6em', color:"white"}}>
                        <div className="rounded-5 p-2" style={{background:"#1f3435", border:"1px solid #2e4142"}}>
                            <FaInstagram />
                        </div>
                    </IconContext.Provider>
                </a>
                </li>
                <li><a href="#">
                    <IconContext.Provider value={{size:'1.6em', color:"white"}}>
                        <div className="rounded-5 p-2" style={{background:"#1f3435", border:"1px solid #2e4142"}}>
                            <RiLinkedinFill />
                        </div>
                    </IconContext.Provider>
                </a>
                </li>
                <li><a href="#">
                    <IconContext.Provider value={{size:'1.6em', color:"white"}}>
                        <div className="rounded-5 p-2" style={{background:"#1f3435", border:"1px solid #2e4142"}}>
                            <FaPinterestP />
                        </div>
                    </IconContext.Provider>
                </a>
                </li>
                <li><a href="#">
                    <IconContext.Provider value={{size:'1.6em', color:"white"}}>
                        <div className="rounded-5 p-2" style={{background:"#1f3435", border:"1px solid #2e4142"}}>
                            <FaYoutube />
                        </div>
                    </IconContext.Provider>
                </a>
                </li>
            </ul>
            <div className="text-light fs-5"><b>SUBSCRIBE TO NEWSLETTER</b></div>
            <div className="searchbar">
                <input type="text" className="input-group-text rounded-5 text-light" name="" id="" placeholder="Email Address*"/>
                <button type="button" className="btn rounded-5 px-4" style={{background:"goldenrod"}}>SUBSCRIBE</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar