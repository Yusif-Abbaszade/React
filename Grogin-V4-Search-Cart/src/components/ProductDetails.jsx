import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import slugify from "slugify";
import { DataContext } from "../context/DataContext";
import { PriceContext } from "../context/PriceContext";
import { useCart } from "react-use-cart";

const ProductDetails = () => {

  const {slug} = useParams();
  const [data] = useContext(DataContext);
  const [currency, setCurrency, currencyData] = useContext(PriceContext);
  const {addItem} = useCart();

  const cData = data.find(p=>slugify(p.title, {lower:true}) == slug);

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center" style={{height:"50vh"}}>
        {!cData?'loading':
            <div className="card d-flex flex-row justify-content-between w-100">
            <img src={cData.images[0]} className="card-img-top w-50" alt={cData.title} style={{height:"400px", objectFit:"contain"}} />
            <div className="card-body w-50 d-flex flex-column justify-content-center">
                <h2 className="card-title">{cData.title}</h2>
                <p className="card-text mt-4">{cData.description}</p>
                <p className="card-text mt-4 text-success fs-2">{currency==='usd'?cData.price:currency==='azn'?(cData.price*(1/currencyData.usd) * currencyData.azn).toFixed(2):(cData.price * (1/currencyData.usd)).toFixed(2)} {currency}</p>
                <button className="btn btn-warning mt-4 w-50" onClick={()=>{addItem(cData)}}>Add to Card</button>
            </div>
            </div>
        }
    </div>

  )
}

export default ProductDetails