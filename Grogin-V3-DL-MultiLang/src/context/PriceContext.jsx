import { createContext, useState } from "react";


export const PriceContext = createContext();

export const PriceProvider = ({children})=>{
    const [currency, setCurrency] = useState('USD');
    return <PriceContext.Provider value={[currency, setCurrency]}>{children}</PriceContext.Provider>
}