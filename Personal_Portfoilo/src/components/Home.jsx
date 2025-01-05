import { useEffect, useState } from 'react';
import '../assets/css/Home.css'
import { FiArrowUpRight } from "react-icons/fi";
import { IconContext } from 'react-icons';


const dlgsvg = 'https://html.vikinglab.agency/ovro/assets/img/icons/sublogo1.svg';
const othersimg = 'https://html.vikinglab.agency/ovro/assets/img/all-images/others/others1.png';

export const Home = ({thmColor, setThmColor}) => {

  const [arrowcolor, setArrowcolor] = useState(thmColor);
  useEffect(()=>{
    const text = document.querySelector('.text p');
    text.innerHTML = text.innerText.split('').map((char, index)=>(
    `<span style="transform:rotate(${index * 5.4}deg)">${char}</span>`
    )).join('');
    document.querySelector('.ltswrktgtr').addEventListener("mouseenter", ()=>{
        if(thmColor == 'white'){
            document.querySelector('.ltswrktgtr').classList.add('btn-warning', 'text-dark')
            document.querySelector('.ltswrktgtr').classList.remove('text-light');
            setArrowcolor('black');
        }else{
            document.querySelector('.ltswrktgtr').classList.add('btn-warning', 'text-light')
            document.querySelector('.ltswrktgtr').classList.remove('text-dark');
            setArrowcolor('white');
        }
    });
    document.querySelector('.ltswrktgtr').addEventListener("mouseout", ()=>{
        if(thmColor=='white'){
            document.querySelector('.ltswrktgtr').classList.add('text-light')
            document.querySelector('.ltswrktgtr').classList.remove('text-dark' ,'btn-warning')
            setArrowcolor('white');
        }else{
            document.querySelector('.ltswrktgtr').classList.add('text-dark')
            document.querySelector('.ltswrktgtr').classList.remove('text-light' ,'btn-warning')
            setArrowcolor('black');
        }
    });
  }, [thmColor])
  return (
    <div className="container-fluid d-flex flex-column" id='home'>
        <h2><img src={dlgsvg} alt="" /><span>Hi, I’m Alex, Frontend Designer</span></h2>
        <h1 className="" style={{fontSize:"70px"}}><b>Designing Intuitive</b></h1>
        <h1 className="mx-5" style={{fontSize:"70px"}}><b>Experiences <span className="text-warning text-decoration-underline"><i>Inspire</i></span></b></h1>
        <span className="w-75 mt-3">Your gateway to innovative design, seamless user experiences, and impactful solutions. Turning complex ideas into user-friendly designs.</span>
        <div className='mt-5 d-flex justify-content-between align-items-center'>
            <div className="left-side">
                <div className="circle">
                    <div className="text">
                        <p>BUILD-A-SUCCESS-BRAND-WITH-DEMOUI</p>
                    </div>
                    <IconContext.Provider value={{size:'3em'}}>
                        <div>
                            <FiArrowUpRight />
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
            <div className="right-side">
                <img src={othersimg} alt="" />
            </div>
        </div>
        <button className='btn mt-5 fs-1 ltswrktgtr'>Lets Work Together 
            <IconContext.Provider value={{size:'3em', color:arrowcolor}}>
                <div>
                    <FiArrowUpRight />
                </div>
            </IconContext.Provider>
        </button>
    </div>
  )
}

export default Home

// BUILD A SUCCESS BRAND WITH DEMOUI