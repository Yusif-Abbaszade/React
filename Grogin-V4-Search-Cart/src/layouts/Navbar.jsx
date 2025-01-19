const logodark = "https://klbtheme.com/grogin/wp-content/uploads/2023/11/grogin-logo-dark.png";
const logolight = "https://klbtheme.com/grogin/wp-content/uploads/2023/11/grogin-logo-light.png";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import profile from '../assets/img/profile.png'
import wishlist from '../assets/img/wishlist.png'
import cart from '../assets/img/cart.png'
import '../assets/css/navbar.css'
// import search from '../assets/img/search.png'
import sale from '../assets/img/sale.png'
import menu from '../assets/img/menu.png'
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import { ThemeContext } from "../context/ThemeContext";
import { LangContext } from "../context/LangContext";
import { FaHeart, FaUser } from "react-icons/fa";
import LangUtil from "../utils/LangUtil";
import { PriceContext } from "../context/PriceContext";
import slugify from "slugify";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const [data, setData, backup, setBackup] = useContext(DataContext);
  const [lang, setLang] = useContext(LangContext);
  const [theme, setTheme] = useContext(ThemeContext);
  const [currency, setCurrency] = useContext(PriceContext);
  const [searchText, setSearchText] = useState('');


  useEffect(()=>{
    document.getElementById('setcurrencyop').onchange = ()=>{
      setCurrency(document.getElementById('setcurrencyop').value)
    };
  }, [])

  const handleTheme = ()=>{
    if(theme==='dark'){
      setTheme('light');
      document.body.setAttribute('data-bs-theme', 'light');
    }else{
      setTheme('dark');
      document.body.setAttribute('data-bs-theme', 'dark');
    }
  };
  
  
  return (
    <>
    <div className="modal fade" id="exampleModalFullscreenSm" tabIndex={-1} aria-labelledby="exampleModalFullscreenSmLabel" aria-hidden="true" style={{display: 'none'}}>
      <div className="modal-dialog modal-fullscreen-sm-down">
        <div className="modal-content">
          <div className="modal-header justify-content-center">
            <h1 className="fs-4" id="exampleModalFullscreenSmLabel">Search</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <div className="input-group mb-3">
              <input type="text" id="searchinput" className="form-control" placeholder="Type Something" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(e)=>{setSearchText(e.target.value)}} />
              <button className="btn btn-outline-dark text-light" type="button" id="button-addon2" style={{background:"#634c9f"}}>Search</button>
            </div>
            <div className="container" style={{maxHeight:"700px", overflowY:"scroll"}}>
              <div className="row">
              {data && data.filter((item)=>(item.title.toLowerCase().includes(searchText.toLowerCase()))).map((item, index)=>(
                <Link to={`/products/${slugify(item.title, {lower:true})}`} className="col-12 d-flex align-items-center" style={{color:"black", textDecoration:"none"}} key={index}>
                  <div data-bs-dismiss="modal" className="d-flex align-items-center">
                    <img src={item.images[0]} alt="" height={"100px"} width={"100px"} style={{objectFit:"contain"}} />
                    <h4>{item.title}</h4>
                  </div>
                </Link>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid forbig">
      <div className="top-side d-flex navbar d-flex justify-content-between align-items-center">
        <div className="left-side d-flex gap-2">
          <ul className="list-unstyled d-flex gap-2">
            <li className="navbar-item"><a href="#" className="text-decoration-none text-secondary"><LangUtil EN={'About Us'} AZ={'Haqqımızda'} /></a></li>
            <li className="navbar-item"><a href="#" className="text-decoration-none text-secondary"><LangUtil EN={'My account'} AZ={'Hesabım'} /></a></li>
            <li className="navbar-item"><a href="#" className="text-decoration-none text-secondary"><LangUtil EN={'Wishlist'} AZ={'Sevimlilər'} /></a></li>
          </ul>
          <span className="navbar-item text-secondary">|</span>
          <p className="navbar-item text-secondary">
            <LangUtil EN={'We deliver to you every day from'} AZ={'Hər gün saat 7:00-dan 23:00-a kimi sizə çatdırırıq.'} /> <span style={{color:"darkorange"}}><b><LangUtil EN={'7:00 to 23:00'} /></b></span>
          </p>
        </div>
        <ul className="list-unstyled d-flex gap-2">
          <li className="navbar-item text-secondary">
            <select name="" id="setcurrencyop" style={{width:"100px", height:"30px"}} className="text-center">
              <option value="USD" defaultChecked>USD</option>
              <option value="AZN">AZN</option>
              <option value="EURO">EURO</option>
            </select>
          </li>
          <li className="navbar-item text-secondary"><LangUtil EN={'Order Tracking'} AZ={'Məhsul Takibi'} /></li>
        </ul>
      </div>
      <div className="middle-side navbar d-flex">
        <Link to={'/'}><img src={theme==='dark'?logolight:logodark} alt="logo" width={"150px"} /></Link>


        <div className="right-side">
          <ul className='list-unstyled d-flex gap-2'>
          <li>
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreenSm">
              <IconContext.Provider value={{size:"1.5em"}}>
                <div>
                  <IoIosSearch />
                </div>
              </IconContext.Provider>
            </button>
          </li>
          <li>
          <Link to={'/cart'} className="btn" style={{border:"none"}} >
            <IconContext.Provider value={{size:"1.5em", color:""}}>
              <div>
                <LuShoppingCart />
              </div>
            </IconContext.Provider>
          </Link>
        </li>
        <li>
          <button className="btn" style={{border:"none"}} onClick={handleTheme}>
            <IconContext.Provider value={{size:"1.5em", color:theme === 'light'?'black':'white'}}>
              <div>
                {theme==='light'?<MdOutlineLightMode />:<MdDarkMode />}
              </div>
            </IconContext.Provider>
          </button>
        </li>
            <li>
              <button className="btn" style={{border:"none"}}>
                <IconContext.Provider value={{size:"1.5em", color:theme==='dark'?'white':'black'}}>
                  <div>
                    <FaUser />
                  </div>
                </IconContext.Provider>
              </button>
            </li>
            <li>
              <button className="btn" style={{border:"none"}}>
                <IconContext.Provider value={{size:"1.5em", color:theme==='dark'?'white':'black'}}>
                  <div>
                    <FaHeart />
                  </div>
                </IconContext.Provider>
              </button>
            </li>
            <li>
              <button className="btn" style={{background:"#634c9f", color:"white"}} onClick={()=>{lang==="AZ"?setLang('EN'):setLang("AZ")}}><b>{lang}</b></button>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-sec navbar">
        <ul className='list-unstyled d-flex gap-3'>
          <li><Link to="/" className='text-decoration-none text-dark'><b><LangUtil EN={'Home'} AZ={'Ev'} /></b></Link></li>
          <li><a href="#" className='text-decoration-none text-dark'><b><LangUtil EN={'Shop'} AZ={'Mağaza'} /></b></a></li>
          <li><a href="#" className='text-decoration-none text-dark'><b><LangUtil EN={'Fruits & Vegetables'} AZ={'Meyvələr & Tərəvəzlər'} /></b></a></li>
          <li><a href="#" className='text-decoration-none text-dark'><b><LangUtil EN={'Beverages'} AZ={'İçkilər'} /></b></a></li>
          <li><a href="#" className='text-decoration-none text-dark'><b>Blog</b></a></li>
          <li><a href="#" className='text-decoration-none text-dark'><b><LangUtil EN={'Contact'} AZ={'Əlaqə'} /></b></a></li>
        </ul>
        <ul className='list-unstyled d-flex gap-4 align-items-center'>
          <li><a href="#" className='text-decoration-none text-dark'><b><LangUtil EN={'Trending Products'} AZ={'Trend Məhsullar'} /></b></a></li>
          <li className='mt-1'><a href="#" className='text-decoration-none' style={{color:"#dc2626"}}><b><LangUtil EN={'Almost Finished'} AZ={'Demək olar ki, bitir'} /> <img src={sale} alt="sale" width={"35px"}/></b></a></li>
        </ul>
      </div>
    </div>
    <div className="container-fluid forsml mt-3">
      <a href="#">
        <IconContext.Provider value={{size:"2em", color:theme === 'light'?'black':'white'}}>
          <div>
            <FiMenu />
          </div>
        </IconContext.Provider>
      </a>
      <Link to="/"><img src={theme==='dark'?logolight:logodark} width={"150px"} alt="" /></Link>
      <ul className="list-unstyled d-flex">
      <li>
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreenSm">
              <IconContext.Provider value={{size:"1.5em"}}>
                <div>
                  <IoIosSearch />
                </div>
              </IconContext.Provider>
            </button>
        </li>
        <li>
          <Link to={'/cart'} className="btn" style={{border:"none"}} >
            <IconContext.Provider value={{size:"1.5em", color:""}}>
              <div>
                <LuShoppingCart />
              </div>
            </IconContext.Provider>
          </Link>
        </li>
        <li>
          <button className="btn" style={{border:"none"}} onClick={handleTheme}>
            <IconContext.Provider value={{size:"1.5em", color:theme === 'light'?'black':'white'}}>
              <div>
                {theme==='light'?<MdOutlineLightMode />:<MdDarkMode />}
              </div>
            </IconContext.Provider>
          </button>
        </li>
        <li>
          <button className="btn" style={{background:"#634c9f", color:"white"}} onClick={()=>{lang==="AZ"?setLang('EN'):setLang("AZ")}}><b>{lang}</b></button>
        </li>
      </ul>
    </div>
    </>
  )
}

export default Navbar