import { Link } from 'react-router-dom';
import cart from '../assets/img/cart.png'
import slugify from 'slugify';
import { useContext } from 'react';
import { PriceContext } from '../context/PriceContext';
import { IconContext } from 'react-icons';
import { FaShoppingCart } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import { useCart } from 'react-use-cart';

const Card = ({img, title, desc, price, alldata}) => {
  const [currency] = useContext(PriceContext);
  const [theme] = useContext(ThemeContext);
  const {addItem} = useCart();
  return (
    <div className="card" style={{ width: "16rem" }}>
      <img src={img} className="card-img-top" alt="..." width={"100px"} height={"200px"} style={{objectFit:"contain"}} />
      <div className="card-body">
        <h5 className="card-title">{title.substring(0,15)}...</h5>
        <h5 className="card-title text-danger lastprice">{currency==='USD'?price:currency==='AZN'?(price*1.7).toFixed(2):(price*0.97).toFixed(2)} {currency} <span className="text-dark text-decoration-line-through fs-6 lastprice">$9.99</span></h5>
        <p className="card-text">
          {desc}...
        </p>
        <Link to={`/products/${slugify(title, {lower:true})}`} className="btn btn-warning darkbtnthm">More Details</Link>
        <button className="btn btn-success ms-3" onClick={()=>{addItem(alldata)}}>
          <IconContext.Provider value={{color:theme==='dark'?'white':'black', size:"1.4em"}}>
            <div>
              <FaShoppingCart />
            </div>
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
};

export default Card;
