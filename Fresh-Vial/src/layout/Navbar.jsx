import { Link, NavLink } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { IconContext } from "react-icons";

const logo = 'https://creativemela.com/themeforest_html/Fresh_Vial/demo/freeshvila/images/logo.png';

const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <img src={logo} alt="" style={{width:"104px", height:"40px"}} />
      <div className="navlinks">
        <ul>
          <li>
            <NavLink to={'/'} >Home</NavLink>
          </li>
          <li>
            <NavLink to={'/about'} >About Us</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'} >Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="marketside">
        <IconContext.Provider value={{size:"1.5em"}}>
          <div>
            <FaBasketShopping />
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{size:"1.5em"}}>
          <div>
            <IoSearch />
          </div>
        </IconContext.Provider>
      </div>
    </div>
    </>
  )
}

export default Navbar