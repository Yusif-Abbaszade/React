import { products } from "../../database/products";

export const productReducer = (state = products, action)=>{
    switch (action.type){
        case "GET_PRODUCT":
            return state;
        
        default :
            return state;
    }
}