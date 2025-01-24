import { useState } from "react";
import { decrement, increment } from "./tools/actions/counterAction";
import configureStore from "./tools/store/configureStore";

const store = configureStore();


const App = () => {
  const [count, setCount] = useState(store.getState().count);
  store.subscribe(()=>{
    setCount(store.getState().count)
    console.log(store.getState());
  })
  return (
    <div style={{display:"flex", alignItems:'center'}}>
      <button onClick={()=>{store.dispatch(decrement())}} style={{margin:"10px", padding:"20px"}}>-</button>
      <span style={{fontSize:"40px", margin:"10px"}}>{count}</span>
      <button onClick={()=>{store.dispatch(increment())}} style={{margin:"10px", padding:"20px"}}>+</button>
    </div>
  )
}

export default App