import { Component } from 'react'
import topslider1 from '../assets/img/service-lg-1.jpg'
import topslider2 from '../assets/img/service-lg-2.jpg'
import topslider3 from '../assets/img/service-lg-3.jpg'
import topslider4 from '../assets/img/service-lg-4.jpg'

const sliderimgs = [topslider1, topslider2, topslider3, topslider4];

class topslider extends Component {
  constructor(){
    super();
    this.state = {
        currentSlide:1
    }
  }

  changeBackward = ()=>{
    if(this.state.currentSlide == 1){
        this.setState({currentSlide : 4});
    }
    else {
        this.setState({currentSlide : this.state.currentSlide - 1});
    }
  }
  changeForward = ()=>{
    if(this.state.currentSlide == 4){
        this.setState({currentSlide : 1});
    }
    else{
        this.setState({currentSlide : this.state.currentSlide + 1});
    }
  }

  render() {
    return (
      <div className="container d-flex justify-content-center align-items-center mt-5 gap-4">
        <button type='button' onClick={this.changeBackward} className='btn text-light' style={{background:"#ff3763", width:"40px", height:"40px"}}>{"<"}</button>
        <div className="slider">
            <img src={sliderimgs[this.state.currentSlide - 1]} alt="" width={"100%"} height={""} className='rounded'/>
        </div>
        <button type='button' onClick={this.changeForward} className='btn text-light' style={{background:"#ff3763", width:"40px", height:"40px"}}>{">"}</button>
      </div>
    )
  }
}

export default topslider