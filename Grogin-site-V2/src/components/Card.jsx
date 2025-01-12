import { Link } from 'react-router-dom';
import cart from '../assets/img/cart.png'
import slugify from 'slugify';

const Card = ({img, title, desc, price}) => {
  return (
    <div className="card" style={{ width: "16rem" }}>
      <img src={img} className="card-img-top" alt="..." width={"100px"} height={"200px"} />
      <div className="card-body">
        <h5 className="card-title">{title.substring(0,15)}...</h5>
        <h5 className="card-title text-danger">${price} <span className="text-dark text-decoration-line-through fs-6">$9.99</span></h5>
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
