const logo = "https://klbtheme.com/grogin/wp-content/uploads/2023/11/grogin-logo-dark.png";
import profile from '../assets/img/profile.png'
import wishlist from '../assets/img/wishlist.png'
import cart from '../assets/img/cart.png'
import '../assets/css/navbar.css'
import search from '../assets/img/search.png'
import sale from '../assets/img/sale.png'
import menu from '../assets/img/menu.png'
import { Link } from 'react-router-dom';

const Navbar = ({searchText, setSearchText, data, setData, backup, setBackup}) => {
  
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
            <li className="navbar-item"><a href="#" className="text-decoration-none text-secondary">About us</a></li>
            <li className="navbar-item"><a href="#" className="text-decoration-none text-secondary">My account</a></li>
            <li className="navbar-item"><a href="#" className="text-decoration-none text-secondary">Wishlist</a></li>
          </ul>
          <span className="navbar-item text-secondary">|</span>
          <p className="navbar-item text-secondary">
            We deliver to you every day from <span style={{color:"darkorange"}}><b>7:00 to 23:00</b></span>
          </p>
        </div>
        <ul className="list-unstyled d-flex gap-2">
          <li className="navbar-item text-secondary">English ↓</li>
          <li className="navbar-item text-secondary">USD ↓</li>
          <li className="navbar-item text-secondary">Order Tracking</li>
        </ul>
      </div>
      <div className="middle-side navbar d-flex">
        <img src={logo} alt="sa" width={"150px"} />
        <div className="searchbar" style={{background:"#f3f4f6"}}><input className='inputbox' role='search' type="text" style={{width:"700px", border:"none", height:"40px", background:"#f3f4f6"}} onChange={updateSearchText}/><img src={search} alt="" width={"24px"} className='mb-1 mx-2'/></div>
        <div className="right-side">
          <ul className='list-unstyled d-flex gap-3'>
            <li><a href="#"><img width={"28px"} src={profile} alt="" /></a></li>
            <li><a href="#"><img width={"28px"} src={wishlist} alt="" /></a></li>
            <li><a href="#"><img width={"28px"} src={cart} alt="" /></a></li>
          </ul>
        </div>
      </div>
      <div className="bottom-sec navbar">
        <ul className='list-unstyled d-flex gap-3'>
          <li><Link to="/" className='text-decoration-none text-dark'><b>Home</b></Link></li>
          <li><a href="#" className='text-decoration-none text-dark'><b>Shop</b></a></li>
          <li><a href="#" className='text-decoration-none text-dark'><b>Fruits & Vegetables</b></a></li>
          <li><a href="#" className='text-decoration-none text-dark'><b>Beverages</b></a></li>
          <li><a href="#" className='text-decoration-none text-dark'><b>Blog</b></a></li>
          <li><a href="#" className='text-decoration-none text-dark'><b>Contact</b></a></li>
        </ul>
        <ul className='list-unstyled d-flex gap-4 align-items-center'>
          <li><a href="#" className='text-decoration-none text-dark'><b>Trending Products</b></a></li>
          <li className='mt-1'><a href="#" className='text-decoration-none' style={{color:"#dc2626"}}><b>Almost Finished <img src={sale} alt="sale" width={"35px"}/></b></a></li>
        </ul>
      </div>
    </div>
    <div className="container-fluid forsml mt-3">
      <a href="#"><img src={menu} width={"28px"} alt="" /></a>
      <a href="#"><img src={logo} width={"150px"} alt="" /></a>
      <a href="#"><img width={"28px"} src={cart} alt="" /></a>
    </div>
    </>
  )
}

export default Navbar