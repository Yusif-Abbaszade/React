import { Component } from 'react'

class quantity extends Component {
    constructor(){
        super();
        this.state = {
            count:0
        };
    }

    increment = ()=>{
        this.setState({count : this.state.count + 1});
    }
    decrement = ()=>{
        if(this.state.count==0){this.setState({count : this.state.count});}
        else{this.setState({count : this.state.count -1});}
    }

    render() {
    return (
    <>
      <button type='button' className='btn btn-danger' style={{fontSize:"25px", width:'50px'}} onClick={this.decrement}>-</button>
        <span style={{fontSize:"25px"}}>{this.state.count}</span>
      <button type='button' className='btn btn-success' style={{fontSize:"25px", width:'50px'}} onClick={this.increment}>+</button>
    </>
    )
  }
}

export default quantity