import { Component } from 'react'
import herosec_background from '../assets/img/herosec-background.png'

class herosec extends Component {
  render() {
    return (
      <div className="container-fluid d-flex flex-column justify-content-center" style={{background:`url(${herosec_background})`, backgroundSize:"cover" ,width:'100%', height:'250px'}}>
        <div className="container">
        <h1 className='text-light'><b>Service Details</b></h1>
        <h5 className='text-light'>Home / Service Details</h5>
      </div>
      </div>
    )
  }
}

export default herosec