import { createStore } from "redux"
import { counterReducer } from "../reducers/counterReducer";


const configureStore = ()=>{
    return createStore(counterReducer);
}

export default configureStore;