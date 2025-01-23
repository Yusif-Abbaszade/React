import React, { useState } from 'react'
import configureStore from './tools/store/configureStore';
import { getProduct } from './tools/actions/productAction';


const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProduct());
const App = () => {

  return (
    <table style={{fontSize:"60px", width:"100%", textAlign:"center"}}>
      <tr style={{width:"100%"}}>
        <th>id</th>
        <th>title</th>
        <th>price</th>
      </tr>
      {store.getState().map((item)=>(
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.price}</td>
        </tr>
      ))}

    </table>
  )
}

export default App