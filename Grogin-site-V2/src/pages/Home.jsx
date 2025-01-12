import Herosec from "../components/Herosec"
import Filter from "../components/Filter"
import Products from "../components/Products"
import { useEffect, useState } from "react"
import axios from "axios"

const Home = ({searchText, setSearchText}) => {
  const [price, setPrice] = useState(3000);
  const [rate, setRate] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [weight, setWeight] = useState(10);
  const [categories, setCategories] = useState([]);
  const [backup, setBackup] = useState([]);
  const [data, setData] = useState([]);
  // const [searchText, setSearchText] = useState('');
  

  useEffect(()=>{
    axios
    .get('https://dummyjson.com/products')
    .then(res=>res.data.products)
    .then((data)=>{setData(data); setBackup(data);})
    .catch(err=>console.log(err))
  },[])

  return (
    <>
      {/* <Header /> */}
      {/* <Navbar searchText = {searchText} setSearchText = {setSearchText} data={data} setData={setData} backup={backup} setBackup={setBackup} /> */}
      <div className="container-fluid d-flex mt-3">
        <div className="left-sec filtersec" style={{width:"25%", position:"fixed"}}>
          <Filter price={price} backup={backup} setBackup={setBackup} setPrice={setPrice} rate={rate} setRate={setRate} discountPercentage={discountPercentage} setDiscountPercentage={setDiscountPercentage} weight={weight} setWeight={setWeight} categories={categories} setCategories={setCategories} data={data} setData={setData} searchText={searchText} setSearchText={searchText} />
        </div>
        <div className="right-sec" style={{width:"75%", transform:"translateX(30%)"}}>
          <Herosec />
          <Products data={data} setData={setData} backup={backup} setBackup={setBackup} />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )

  
}

export default Home