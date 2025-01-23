import { createStore } from "redux"
import { productReducer } from "../reducers/productReducer"


const configureStore = ()=>{
    return createStore(productReducer);
}

export default configureStore;