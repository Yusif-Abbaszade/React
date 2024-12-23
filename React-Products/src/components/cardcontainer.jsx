import { Component } from 'react'
import Card from './card'



const categories = ["electronics","jewelery","men's clothing","women's clothing"];

class Cardcontainer extends Component {
  
  constructor(){
    super();
    this.state = {
      allData:[],
      text:""
    };
  }

  componentDidMount(){
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>this.setState({allData : data}))
  }


  render() {
    return (
      <>
      <div className="container my-5 text-center">
        <span className='fs-2'>Search by Category</span>
        <input style={{width:"100%"}} type="text" name="" id="" onChange={(e)=>{this.setState({text : e.target.value})}}/>
      </div>
      <div className="container">
        <div className="row cardrow">
          {this.state.allData.filter((item)=>{return this.state.text.toLowerCase() == '' ? item : item.category.toLowerCase().includes(this.state.text);}).map((item)=>(<Card img = {item.image}  name={item.title} category={item.category} rating={item.rating.rate} price={item.price} />))}
        </div>
      </div>
      </>
    )
  }
}

export default Cardcontainer
