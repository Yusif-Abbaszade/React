import { useState } from "react"

const Search = ({filterData}) => {

  const [word, setWord] = useState('');


  const formSubmit = (e)=>{
    e.preventDefault();
    if(!word){
        alert('ERR');
    }else{
        filterData(word);
        setWord('');
    }
  }
  return (
    <div className="container d-flex align-items-center justify-content-center flex-column mt-5">
        <div className="col-sm-12 col-md-5">
            <form onSubmit={formSubmit} className="input-group mb-3">
                <input value={word} onChange={e=>setWord(e.target.value)} type="text" className="form-control" placeholder="Enter username" />
                <button className="btn btn-primary">Search</button>
            </form>
        </div>
    </div>
  )
}

export default Search