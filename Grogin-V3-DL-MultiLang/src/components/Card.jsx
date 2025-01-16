import { Link } from 'react-router-dom';
import cart from '../assets/img/cart.png'
import slugify from 'slugify';
import { useContext } from 'react';
import { PriceContext } from '../context/PriceContext';

const Card = ({img, title, desc, price}) => {
  const [currency] = useContext(PriceContext);
  return (
    <div className="card" style={{ width: "16rem" }}>
      <img src={img} className="card-img-top" alt="..." width={"100px"} height={"200px"} />
      <div className="card-body">
        <h5 className="card-title">{title.substring(0,15)}...</h5>
        <h5 className="card-title text-danger lastprice">{currency==='USD'?price:currency==='AZN'?(price*1.7).toFixed(2):(price*0.97).toFixed(2)} {currency} <span className="text-dark text-decoration-line-through fs-6 lastprice">$9.99</span></h5>
        <p className="card-text">
          {desc}...
        </p>
        <Link to={`/products/${slugify(title, {lower:true})}`} className="btn btn-success">
          <img src={cart} width={"32px"} alt="" /> In Stock
        </Link>
      </div>
    </div>
  );
};

export default Card;
