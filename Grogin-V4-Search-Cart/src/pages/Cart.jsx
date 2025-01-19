import { useCart } from "react-use-cart";

const emptyCartimg = 'https://assets-v2.lottiefiles.com/a/0953d504-117d-11ee-aa49-1f149204cb5f/9uZcoEJaoF.gif';

const Cart = () => {
  const { isEmpty, cartTotal, totalUniqueItems, items, updateItemQuantity, removeItem, totalItems, emptyCart } = useCart();
  if (isEmpty){return (
    <div>
        <h1 className="text-center mt-5">Your Cart is Empty</h1>
        <div className="d-flex justify-content-center">
            <img src={emptyCartimg} alt=""  />
        </div>
    </div>
  );}
  return (
    <div className="container">
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          {items.map((item, index)=>(
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td><img src={item.images[0]} alt="" width={"50px"} height={"50px"} style={{objectFit:"contain"}}/></td>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>
                    <button className="btn btn-danger" onClick={()=>{updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}}>-</button>
                    <span>{item.quantity}</span>
                    <button className="btn btn-success" onClick={()=>{updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}}>+</button>
                </td>
                <td>${item.itemTotal.toFixed(2)}</td>
                <td><button className="btn btn-danger" onClick={() => removeItem(item.id)}>X</button></td>
            </tr>
          ))}
          <tr>
            <th scope="row">Total : </th>
            <th></th>
            <th></th>
            <th></th>
            <th>{totalItems} items</th>
            <th>${cartTotal.toFixed(2)}</th>
            <th><button className="btn btn-danger" onClick={()=>{emptyCart()}}>X</button></th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
