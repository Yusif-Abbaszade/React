import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const PriceContext = createContext();

export const PriceProvider = ({children})=>{
    const [currency, setCurrency] = useState('usd');
    const [currencyData, setCurrencyData] = useState({});
    useEffect(()=>{

        axios
        .get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json')
        .then(res=>res.data.eur)
        .then(data=>{setCurrencyData(data)})
        .catch(err=>console.log(err))
    }, [])

    return <PriceContext.Provider value={[currency, setCurrency, currencyData]}>{children}</PriceContext.Provider>
}