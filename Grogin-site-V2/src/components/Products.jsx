import axios from "axios"
import { useEffect} from "react"
import Card from "./Card"
const Products = ({data, setData, backup, setBackup}) => {

  return (
    <>
    <div className="fs-2 text-center my-4">Products</div>
    <div className="row d-flex justify-content-center">
        {(data.length === 0 && backup.length === 0)?(<h1 className="text-center text-danger">Loading...</h1>):(data.length === 0)?(<h1 className="text-center text-danger">No match found...</h1>):(data.map((item)=>(
            <Card key={item.id} img={item.images[0]} title={item.title} desc={item.description.substring(0,30)} price={item.price}/>
        )))}
    </div>
    </>
  )
}

export default Products