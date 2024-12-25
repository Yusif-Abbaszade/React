import { Component } from 'react'

class comments extends Component {
  render() {
    return (
        <div className="col-12">
        <div className="card p-3 d-flex flex-column">
            <div className="top-side d-flex gap-4 align-items-center">
              <img src={this.props.img} className="card-img-top rounded-circle" style={{width:"10%", height:"10%", maxHeight:"75px", maxWidth:"75px"}} alt="..." />
              <h5 className='card-title'>{this.props.name}</h5>
            </div>
            <div className="bottom-side card-body">
                <h5 className="card-title"><b>{this.props.pattern}</b></h5>
                <p className="card-text">{this.props.comment}</p>
            </div>
        </div>
        </div>

    )
  }
}

export default comments