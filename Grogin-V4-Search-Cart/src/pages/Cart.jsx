import { useContext } from "react";
import { useCart } from "react-use-cart";
import { PriceContext } from "../context/PriceContext";

const emptyCartimg = 'https://assets-v2.lottiefiles.com/a/0953d504-117d-11ee-aa49-1f149204cb5f/9uZcoEJaoF.gif';

const Cart = () => {
  const { isEmpty, cartTotal, totalUniqueItems, items, updateItemQuantity, removeItem, totalItems, emptyCart } = useCart();
  const [currency, setCurrency, currencyData] = useContext(PriceContext);
  if (isEmpty){return (
    <div>
        <h1 className="text-center mt-5">Your Cart is Empty</h1>
        <div className="d-flex justify-content-center">
            <img src={emptyCartimg} alt=""  />
        </div>
    </div>
  );}
  return (
    <div className="container-fluid">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index)=>(
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td><img src={item.images[0]} alt="" width={"50px"} height={"50px"} style={{objectFit:"contain"}}/></td>
                <td>{item.title}</td>
                <td>{currency==='usd'?item.price:currency==='azn'?(item.price*(1/currencyData.usd) * currencyData.azn).toFixed(2):(item.price * (1/currencyData.usd)).toFixed(2)} {currency}</td>
                <td>
                    <button className="btn btn-danger" onClick={()=>{updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}}>-</button>
                    <span>{item.quantity}</span>
                    <button className="btn btn-success" onClick={()=>{updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}}>+</button>
                </td>
                <td>{currency==='usd'?item.itemTotal:currency==='azn'?(item.itemTotal*(1/currencyData.usd) * currencyData.azn).toFixed(2):(item.itemTotal * (1/currencyData.usd)).toFixed(2)} {currency}</td>
                <td><button className="btn btn-danger" onClick={() => removeItem(item.id)}>X</button></td>
            </tr>
          ))}
          <tr>
            <th scope="row">Total : </th>
            <th></th>
            <th></th>
            <th></th>
            <th>{totalItems} items</th>
            <th>{currency==='usd'?cartTotal:currency==='azn'?(cartTotal*(1/currencyData.usd) * currencyData.azn).toFixed(2):(cartTotal * (1/currencyData.usd)).toFixed(2)} {currency}</th>
            <th><button className="btn btn-danger" onClick={()=>{emptyCart()}}>X</button></th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
