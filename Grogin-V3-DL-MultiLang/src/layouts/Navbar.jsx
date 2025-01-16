const logo = "https://klbtheme.com/grogin/wp-content/uploads/2023/11/grogin-logo-dark.png";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import profile from '../assets/img/profile.png'
import wishlist from '../assets/img/wishlist.png'
import cart from '../assets/img/cart.png'
import '../assets/css/navbar.css'
import search from '../assets/img/search.png'
import sale from '../assets/img/sale.png'
import menu from '../assets/img/menu.png'
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { ThemeContext } from "../context/ThemeContext";
import { LangContext } from "../context/LangContext";
import { FaHeart, FaUser } from "react-icons/fa";
import LangUtil from "../utils/LangUtil";
import { PriceContext } from "../context/PriceContext";

const Navbar = ({searchText, setSearchText}) => {
  const [data, setData, backup, setBackup] = useContext(DataContext);
  const [lang, setLang] = useContext(LangContext);
  const [theme, setTheme] = useContext(ThemeContext);
  const [currency, setCurrency] = useContext(PriceContext);


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
  
  const updateSearchText = (event) =>{
    setSearchText(event.target.value);
    setData(backup.filter(item=>(
      item.title.toLowerCase().includes(searchText) ||
      item.description.toLowerCase().includes(searchText)
    )));
  };
  
  return (
    <>
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
              <option value="USD" selected>USD</option>
              <option value="AZN">AZN</option>
              <option value="EURO">EURO</option>
            </select>
          </li>
          <li className="navbar-item text-secondary"><LangUtil EN={'Order Tracking'} AZ={'Məhsul Takibi'} /></li>
        </ul>
      </div>
      <div className="middle-side navbar d-flex">
        <img src={logo} alt="logo" width={"150px"} />
        <div className="searchbar" style={{background:"#f3f4f6"}}><input className='inputbox' role='search' type="text" style={{width:"550px", border:"none", height:"40px", background:"#f3f4f6"}} onChange={updateSearchText}/><img src={search} alt="" width={"24px"} className='mb-1 mx-2'/></div>
        <div className="right-side">
          <ul className='list-unstyled d-flex gap-2'>
          <li>
          <button className="btn" style={{border:"none"}} >
            <IconContext.Provider value={{size:"1.5em", color:""}}>
              <div>
                <LuShoppingCart />
              </div>
            </IconContext.Provider>
          </button>
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
      <a href="#"><img src={logo} width={"150px"} alt="" /></a>
      <ul className="list-unstyled d-flex">
        <li>
          <button className="btn" style={{border:"none"}} >
            <IconContext.Provider value={{size:"1.5em", color:""}}>
              <div>
                <LuShoppingCart />
              </div>
            </IconContext.Provider>
          </button>
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