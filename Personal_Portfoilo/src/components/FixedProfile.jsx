import { IconContext } from 'react-icons';
import '../assets/css/FixedProfile.css'
import { MdOutlineFileDownload } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';

const home1 = 'https://html.vikinglab.agency/ovro/assets/img/icons/home1.svg';
const home2 = 'https://html.vikinglab.agency/ovro/assets/img/icons/home2.svg';
const home3 = 'https://html.vikinglab.agency/ovro/assets/img/icons/home3.svg';
const home4 = 'https://html.vikinglab.agency/ovro/assets/img/icons/home4.svg';
const home5 = 'https://html.vikinglab.agency/ovro/assets/img/icons/home5.svg';
const home6 = 'https://html.vikinglab.agency/ovro/assets/img/icons/home6.svg';
const home7 = 'https://html.vikinglab.agency/ovro/assets/img/icons/home7.svg';
const home8 = 'https://html.vikinglab.agency/ovro/assets/img/icons/home8.svg';
const userProfile = 'https://avatars.githubusercontent.com/u/52384595?v=4';

const FixedProfile = ({thmColor, setThmColor}) => {
  return (
    <div className="left-side">
    <div className="d-flex fixed-profile for-fixed" style={{width:"100%"}}>
      <ul className="list-unstyled home-sections">
        <li className="p-3"><span className="btn" id='homebtn'><img src={home1} className='btnimg' alt="" /><div><b>Home</b></div></span></li>
        <li className="p-3"><span className="btn" id='aboutusbtn'><img src={home2} className='btnimg' alt="" /><div><b>About Us</b></div></span></li>
        <li className="p-3"><span className="btn"><img src={home3} className='btnimg' alt="" /><div><b>Our Service</b></div></span></li>
        <li className="p-3"><span className="btn"><img src={home4} className='btnimg' alt="" /><div><b>My Skill</b></div></span></li>
        <li className="p-3"><span className="btn"><img src={home5} className='btnimg' alt="" /><div><b>Portfolio</b></div></span></li>
        <li className="p-3"><span className="btn"><img src={home6} className='btnimg' alt="" /><div><b>Testimonial</b></div></span></li>
        <li className="p-3"><span className="btn"><img src={home7} className='btnimg' alt="" /><div><b>Our Blog</b></div></span></li>
        <li className="p-3"><span className="btn"><img src={home8} className='btnimg' alt="" /><div><b>Contact Us</b></div></span></li>
      </ul>
      <div className="card maincardhb p-2 d-flex justify-content-center align-items-center text-center" style={{width: '30%', opacity:"90%", background:"none", color:"white", maxWidth:"450px", backdropFilter:"blur(20px)"}}>
        <img src={userProfile} className="card-img-top" alt="..." style={{maxHeight:"400px", maxWidth:"400px"}} />
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <h5 className="card-title fs-3"><b>Hasan Bakhtiar</b></h5>
          <p className="card-text">Hi, I’m Alex, a dedicated UI/UX Designer with 10 years of experience creating meaningful digital experiences.</p>
          <ul className="list-unstyled d-flex gap-2 my-3 social-links">
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
          <button className="btn downloadbrn btn-warning fs-6 d-flex p-3 rounded-5"><b className='p-1'>DOWNLOAD NOW</b>
            <IconContext.Provider value={{size:'2em'}}>
              <div>
                <MdOutlineFileDownload />
              </div>
            </IconContext.Provider>
          </button>
        </div>
      </div>

    </div>
    </div>
  )
}

export default FixedProfile