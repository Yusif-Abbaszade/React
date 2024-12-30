import { useEffect } from 'react';
import '../assets/css/AboutUs.css'
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { RiLinkedinFill } from 'react-icons/ri';

const dlgsvg = 'https://html.vikinglab.agency/ovro/assets/img/icons/sublogo1.svg';
const home2 = 'https://html.vikinglab.agency/ovro/assets/img/icons/home2.svg';
const home3 = 'https://html.vikinglab.agency/ovro/assets/img/icons/home3.svg';
const home4 = 'https://html.vikinglab.agency/ovro/assets/img/icons/home4.svg';
const home5 = 'https://html.vikinglab.agency/ovro/assets/img/icons/home5.svg';
const AboutUs = ({thmColor, setThmColor}) => {

  

  useEffect(()=>{
    if(window.innerWidth <=875){
        [...document.querySelectorAll('.aboutcard')].map((item)=>{
            item.classList.remove('col-5');
            item.classList.add('col-10');
        });
    }
    else {
        [...document.querySelectorAll('.aboutcard')].map((item)=>{
            item.classList.add('col-5');
            item.classList.remove('col-10');
        });
    }
  }, []);
  return (
    <div id='aboutus'>
        <h1><img src={dlgsvg} alt="" />About Us</h1>
        <h1 style={{fontSize:"50px"}}>Crafting Seamless User <span className="text-warning text-decoration-underline"><b><i>Experiences</i></b></span></h1>
        <div className="row d-flex justify-content-center gap-5 mt-5">
            <div className="aboutcardmain card col-10">
                <div className="card-title fs-1 text-center">Hasan Bakhtiar</div>
                <div className="card-text">Hi, I’m Alex Carry, a dedicated UI/UX Designer with 10 years of experience creating meaningful digital experiences. I specialize in crafting user-centered designs that enhance engagement and drive results. By combining research, creativity, and technical skills, I deliver solutions that not only look great but also function seamlessly.</div>
            </div>
            <div className="aboutcard card col-5">
                <img src={home2} className='aboutusicons btnimg' alt="home2" width={"50px"}  />
                <div className="card-title fs-4">UI/UX Design</div>
                <div className="card-text">Designing intuitive, user-focused interfaces that prioritize functionality & seamless navigation.</div>
            </div>
            <div className="aboutcard card col-5">
                <img src={home3} className='aboutusicons btnimg' alt="home3" width={"50px"}  />
                <div className="card-title fs-4">User Research & Prototyping</div>
                <div className="card-text">
                Conducting in-depth user research and creating interactive prototypes to validate ideas and refine designs.</div>
            </div>
            <div className="aboutcard card col-5">
                <img src={home4} className='aboutusicons btnimg' alt="home4" width={"50px"}  />
                <div className="card-title fs-4">Responsive Web Design</div>
                <div className="card-text">Crafting designs adapt seamlessly across all devices ensuring and a consistent user experience.</div>
            </div>
            <div className="aboutcard card col-5">
                <img src={home5} className='aboutusicons btnimg' alt="home5" width={"50px"}  />
                <div className="card-title fs-4">Wireframing & Visual Design</div>
                <div className="card-text">Creating detailed wireframes and visually stunning designs to bring ideas into focus.</div>
            </div>
            <h1 className='text-center'>Work Experience</h1>
            <div className="aboutcardmain card col-10 gap-3">
                <a href="#" className='text-info text-decoration-none'>2015-2020</a>
                <div className="card-title fs-4">UI/UX Designer</div>
                <div className="card-text text-info">Creative Spark Agency</div>

                <a href="#" className='text-info text-decoration-none mt-4'>2020 - Present</a>
                <div className="card-title fs-4">Senior UI/UX Designer</div>
                <div className="card-text text-info">Visionary Tech</div>
            </div>
            <h1 className='text-center'>Education</h1>
            <div className="aboutcardmain card col-10 gap-3">
                <a href="#" className='text-info text-decoration-none'>2010-2013</a>
                <div className="card-title fs-4">Bachelor's Degree in Graphic Design</div>
                <div className="card-text text-info">University of California</div>

                <a href="#" className='text-info text-decoration-none mt-4'>2013 - 2015</a>
                <div className="card-title fs-4">Master's Degree in User Experience Design</div>
                <div className="card-text text-info">Massachusetts Institute of Technology (MIT)</div>
            </div>
            <div className="aboutcard card col-11">
                <div className="card-title fs-4 text-center">Stay With Me</div>
                <ul className="list-unstyled d-flex gap-2 my-3 social-links justify-content-center">
                <li><a href="#">
                    <IconContext.Provider value={{size:'1.6em', color:thmColor}}>
                        <div className="rounded-5 p-2" style={{background:(thmColor =='white')?'#2e4142':'none', border:"1px solid #2e4142"}}>
                            <FaFacebookF />
                        </div>
                    </IconContext.Provider>
                </a>
                </li>
                <li><a href="#">
                    <IconContext.Provider value={{size:'1.6em', color:thmColor}}>
                        <div className="rounded-5 p-2" style={{background:(thmColor =='white')?'#2e4142':'none', border:"1px solid #2e4142"}}>
                            <FaInstagram />
                        </div>
                    </IconContext.Provider>
                </a>
                </li>
                <li><a href="#">
                    <IconContext.Provider value={{size:'1.6em', color:thmColor}}>
                        <div className="rounded-5 p-2" style={{background:(thmColor =='white')?'#2e4142':'none', border:"1px solid #2e4142"}}>
                            <RiLinkedinFill />
                        </div>
                    </IconContext.Provider>
                </a>
                </li>
                <li><a href="#">
                    <IconContext.Provider value={{size:'1.6em', color:thmColor}}>
                        <div className="rounded-5 p-2" style={{background:(thmColor =='white')?'#2e4142':'none', border:"1px solid #2e4142"}}>
                            <FaPinterestP />
                        </div>
                    </IconContext.Provider>
                </a>
                </li>
                <li><a href="#">
                    <IconContext.Provider value={{size:'1.6em', color:thmColor}}>
                        <div className="rounded-5 p-2" style={{background:(thmColor =='white')?'#2e4142':'none', border:"1px solid #2e4142"}}>
                            <FaYoutube />
                        </div>
                    </IconContext.Provider>
                </a>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default AboutUs