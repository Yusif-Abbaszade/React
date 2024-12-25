import { Component } from 'react'

class Popup extends Component {

  render() {
    return (
        <>
        <div className="popup container d-flex flex-row gap-5" style={{width:"64rem"}}>
            <img src={this.props.img} className="card-img-top" alt="..." style={{maxWidth:"300px", maxHeight:"300px"}}/>
            <div className="card-body d-flex justify-content-center flex-column">
                <h5 className="card-title">{this.props.name}</h5>
                <p className="card-text">Category : {this.props.category}</p>
                <p className="card-text text-warning">Rating : {this.props.rating}</p>
                <p className="card-text text-danger">Price : {this.props.price}</p>
                <a href="#" className="btn btn-primary" style={{maxWidth:"200px"}}>Buy Now</a>
            </div>
        </div>
        </>
    )
  }
}

export default Popup