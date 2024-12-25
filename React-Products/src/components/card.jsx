import { Component } from 'react'

class card extends Component {
  render() {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={this.props.img} className="card-img-top" alt="..." width={"100px"} height={"300px"}/>
            <div className="card-body">
                <h5 className="card-title">{this.props.name.substring(0, 20)}...</h5>
                <p className="card-text">Category : {this.props.category}</p>
                <p className="card-text text-warning">Rating : {this.props.rating}</p>
                <p className="card-text text-danger">Price : {this.props.price}</p>
                <a href="#" className="btn btn-primary">Buy Now</a>
            </div>
        </div>
    )
  }
}

export default card