import { useState } from 'react';
import '../assets/css/filter.css'

const Filter = () => {

  const [price, setPrice]= useState(3000);
  const [rate, setRate]= useState(0);



  return (
    <div className="container-fluid">
      <div>
        <p>Filter by rate : {rate}</p>
        <div className="slidecontainer">
          <input
            type="range"
            min={0}
            max={5}
            defaultValue={0}
            className="slider"
            id='rateslider'
            // onChange={setRate(2)}
          />
        </div>
      </div>
      <div>
        <p>Filter by Price : {price}</p>
        <div className="slidecontainer">
          <input
            type="range"
            min={0}
            max={3000}
            defaultValue={3000}
            className="slider"
            id='priceslider'
          />
        </div>
      </div>
      {}
    </div>
  );
};


export default Filter;
