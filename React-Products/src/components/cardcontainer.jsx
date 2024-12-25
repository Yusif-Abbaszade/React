import { Component } from 'react'
import Card from './card'
import Popup from './popup';



class Cardcontainer extends Component {
  
  constructor(){
    super();
    this.state = {
      allData:[],
      categories:[],
      selectedCategory:"All",
      openedItem:{},
      isOpened: false
    };
  }

  componentDidMount(){
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .catch(err=>console.log(err))
    .then(data=>this.setState({allData : data}))

    fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .catch(err=>console.log(err))
    .then(data=>this.setState({categories : data}))
  }



  render() {
    return (
      <>
      <div className="container my-5 text-center d-flex justify-content-around">
        {this.state.categories.map((item)=>(
          <button key={item} onClick={(e)=>{this.setState({selectedCategory : e.target.innerHTML})}} className='btn btn-primary'>{item}</button>
        ))}
        <button className='btn btn-primary' onClick={(e)=>{this.setState({selectedCategory : e.target.innerHTML})}}>All</button>
      </div>
      <div className="container">
        <div className="row allcards">
          {this.state.allData.filter(item=>(this.state.selectedCategory === "All" || item.category === this.state.selectedCategory)).map(item=>(
            <div key={item.id} className="col-12 col-md-6 col-xl-3 my-2" onClick={()=>{this.setState({isOpened : true, openedItem: item}); document.querySelector('.allcards').style.display = 'none';}}>
              <Card img={item.image} name={item.title} category={item.category} rating={item.rating.rate} price={item.price} />
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        {this.state.isOpened &&  
        <button className='btn btn-danger' style={{position:"fixed", zIndex:"999"}} onClick={()=>{this.setState({isOpened: false, openedItem : {}}); document.querySelector('.allcards').style.display = 'flex';}}>X</button>}

        {
          this.state.isOpened && 
        <Popup img = {this.state.openedItem.image} name = {this.state.openedItem.title} category = {this.state.openedItem.category} rating = {this.state.openedItem.rating.rate} price = {this.state.openedItem.price}/>
        }
      </div>
      </>
    )
  }
}

export default Cardcontainer
