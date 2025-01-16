import Herosec from "../components/Herosec"
import Filter from "../components/Filter"
import Products from "../components/Products"
import { useContext, useState } from "react"
import { DataContext } from "../context/DataContext"

const Home = ({searchText, setSearchText}) => {
  const [price, setPrice] = useState(3000);
  const [rate, setRate] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [weight, setWeight] = useState(10);
  const [categories, setCategories] = useState([]);
  const [data, setData, backup, setBackup] = useContext(DataContext);

  return (
    <>
      <div className="container-fluid d-flex mt-3">
        <div className="left-sec filtersec" style={{width:"25%", position:"fixed"}}>
          <Filter price={price} backup={backup} setBackup={setBackup} setPrice={setPrice} rate={rate} setRate={setRate} discountPercentage={discountPercentage} setDiscountPercentage={setDiscountPercentage} weight={weight} setWeight={setWeight} categories={categories} setCategories={setCategories} data={data} setData={setData} searchText={searchText} setSearchText={searchText} />
        </div>
        <div className="right-sec" style={{width:"75%", transform:"translateX(30%)"}}>
          <Herosec />
          <Products data={data} setData={setData} backup={backup} setBackup={setBackup} />
        </div>
      </div>
    </>
  )

  
}
export default Home