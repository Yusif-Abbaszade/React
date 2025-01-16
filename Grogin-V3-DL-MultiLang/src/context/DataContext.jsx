import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const DataContext = createContext();

export const DataProvider = ({children})=>{
    const [data, setData] = useState([]);
    const [backup, setBackup] = useState([]);
    useEffect(()=>{
        axios
        .get('https://dummyjson.com/products')
        .then(res=>res.data.products)
        .then((data)=>{setData(data); setBackup(data);})
        .catch(err=>console.log(err))
    },[])

    return <DataContext.Provider value={[data, setData, backup, setBackup]}>{children}</DataContext.Provider>
}