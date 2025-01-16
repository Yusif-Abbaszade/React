import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import slugify from "slugify";
import { DataContext } from "../context/DataContext";

const ProductDetails = () => {

  const {slug} = useParams();
  const [data] = useContext(DataContext);

  const cData = data.find(p=>slugify(p.title, {lower:true}) == slug);

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center" style={{height:"50vh"}}>
        {!cData?'loading':
            <div className="card d-flex flex-row justify-content-between w-100">
            <img src={cData.images[0]} className="card-img-top w-50" alt={cData.title} style={{height:"400px", objectFit:"contain"}} />
            <div className="card-body w-50 d-flex flex-column justify-content-center">
                <h2 className="card-title">{cData.title}</h2>
                <p className="card-text mt-4">{cData.description}</p>
                <p className="card-text mt-4 text-success fs-2">${cData.price}</p>
                <Link to="/" className="btn btn-warning mt-4 w-50">Add to Card</Link>
            </div>
            </div>
        }
    </div>

  )
}

export default ProductDetails