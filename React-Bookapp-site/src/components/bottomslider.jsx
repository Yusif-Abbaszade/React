import { Component } from 'react'
import bottomslider1 from '../assets/img/bottomslider-1.png'
import bottomslider2 from '../assets/img/bottomslider-2.png'
import bottomslider3 from '../assets/img/bottomslider-3.png'
import bottomslider4 from '../assets/img/bottomslider-4.png'
import bottomslider5 from '../assets/img/bottomslider-5.png'

const imgarr = [bottomslider1, bottomslider2, bottomslider3, bottomslider4, bottomslider5];

class bottomslider extends Component {
  constructor(){
    super();
    this.state = {
        currentSlides:[1,2]
    };
  }


  changeLeft = ()=>{
    if(this.state.currentSlides[0] == 1 && this.state.currentSlides[1] == 2){
        this.setState({currentSlides: [5,1]});
    }
    else if(this.state.currentSlides[0] == 2 && this.state.currentSlides[1] == 3){
        this.setState({currentSlides: [1,2]});
    }
    else if(this.state.currentSlides[0] == 3 && this.state.currentSlides[1] == 4){
        this.setState({currentSlides: [2,3]});
    }
    else if(this.state.currentSlides[0] == 4 && this.state.currentSlides[1] == 5){
        this.setState({currentSlides: [3,4]});
    }
    else if(this.state.currentSlides[0] == 5 && this.state.currentSlides[1] == 1){
        this.setState({currentSlides: [4,5]});
    }
  }

  changeRight = ()=>{
    if(this.state.currentSlides[0] == 1 && this.state.currentSlides[1] == 2){
        this.setState({currentSlides: [2,3]});
    }
    else if(this.state.currentSlides[0] == 2 && this.state.currentSlides[1] == 3){
        this.setState({currentSlides: [3,4]});
    }
    else if(this.state.currentSlides[0] == 3 && this.state.currentSlides[1] == 4){
        this.setState({currentSlides: [4,5]});
    }
    else if(this.state.currentSlides[0] == 4 && this.state.currentSlides[1] == 5){
        this.setState({currentSlides: [5,1]});
    }
    else if(this.state.currentSlides[0] == 5 && this.state.currentSlides[1] == 1){
        this.setState({currentSlides: [1,2]});
    }
  }

  render() {
    return (
        <div className="container-fluid d-flex gap-5 justify-content-center align-items-center">
        <button type='button' className='btn text-light' style={{background:"#ff3763"}} onClick={this.changeLeft}>{"<"}</button>
        <div className="card d-flex flex-row" style={{width: '24rem'}}>
            <div className="left-side d-flex justify-content-center align-items-center" style={{width:"33%"}}>
                <img src={imgarr[this.state.currentSlides[0] - 1]} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
                <p className="card-text text-secondary">Barber Shop</p>
                <h5 className="card-title">City Tower Barber Shop</h5>
                <p className="card-text text-secondary">City tower, Road: 1285,USA</p>
                <p className="card-text text-dark"><b>$350 </b><span className='text-secondary text-decoration-line-through mx-3'>$400</span></p>
                <a href="#" className="btn rounded-5 px-4 py-2 text-light" style={{background:"#ff3763"}}>Book Now</a>
            </div>
        </div>
        <div className="card d-flex flex-row" style={{width: '24rem'}}>
            <div className="left-side d-flex justify-content-center align-items-center" style={{width:"33%"}}>
                <img src={imgarr[this.state.currentSlides[1] - 1]} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
                <p className="card-text text-secondary">Barber Shop</p>
                <h5 className="card-title">City Tower Barber Shop</h5>
                <p className="card-text text-secondary">City tower, Road: 1285,USA</p>
                <p className="card-text text-dark"><b>$350 </b><span className='text-secondary text-decoration-line-through mx-3'>$400</span></p>
                <a href="#" className="btn rounded-5 px-4 py-2 text-light" style={{background:"#ff3763"}}>Book Now</a>
            </div>
        </div>
        <button type='button' className='btn text-light' style={{background:"#ff3763"}} onClick={this.changeRight}>{">"}</button>
        </div>
    )
  }
}

export default bottomslider