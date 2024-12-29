import { useEffect } from 'react';
import '../assets/css/filter.css';
import axios from 'axios';

const Filter = ({price, backup, setBackup, setPrice, rate, setRate, discountPercentage, setDiscountPercentage, weight, setWeight,categories, setCategories, data, setData, searchText, setSearchText}) => {
  
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleRateChange = (event) => {
    setRate(event.target.value);
  };
  
  const handleDiscountPercentageChange = (event) =>{
    setDiscountPercentage(event.target.value);
  };

  const handleWeightChange = (event)=>{
    setWeight(event.target.value);
  }


  const filterAll = ()=>{
    setCategories([]);

    let beauty = document.getElementById('beautycheck').checked;
    let fragrances = document.getElementById('fragrancescheck').checked;
    let furniture = document.getElementById('furniturecheck').checked;
    let groceries = document.getElementById('groceriescheck').checked;

    if(beauty){categories.push('beauty')}
    if(fragrances){categories.push('fragrances')}
    if(furniture){categories.push('furniture')}
    if(groceries){categories.push('groceries')}
    let filtered_data = backup.filter((item)=>(
      categories.includes(item.category) &&
      price >= item.price &&
      rate <= item.rating &&
      discountPercentage <= item.discountPercentage &&
      weight >= item.weight 
      // (item.title.includes(searchText) || item.description.includes(searchText))
    ))
    setData(filtered_data)
  }

  return (
    <div className="container-fluid">
      <div>
        <p>Filter by Rate: {rate}</p>
        <div className="slidecontainer">
          <input
            type="range"
            min={0}
            max={5}
            value={rate}
            className="slider"
            id="rate-slider"
            onChange={handleRateChange}
          />
        </div>
      </div>
      <div>
        <p>Filter by Price: Under ${price}</p>
        <div className="slidecontainer">
          <input
            type="range"
            min={0}
            max={3000}
            value={price}
            className="slider"
            id="price-slider"
            onChange={handlePriceChange}
          />
        </div>
      </div>
      <div>
        <p>Filter by Discount: +{discountPercentage}%</p>
        <div className="slidecontainer">
          <input
            type="range"
            min={0}
            max={100}
            value={discountPercentage}
            className="slider"
            id="price-slider"
            onChange={handleDiscountPercentageChange}
          />
        </div>
      </div>
      <div>
        <p>Filter by Weight: Under {weight}kg</p>
        <div className="slidecontainer">
          <input
            type="range"
            min={1}
            max={10}
            value={weight}
            className="slider"
            id="price-slider"
            onChange={handleWeightChange}
          />
        </div>
      </div>
      <p className='mt-4'>Filter by Category : </p>
      <div className='fs-5 d-flex flex-column gap-2'>
        <label className='selectcon'>
          <input type="checkbox" name="" id="beautycheck" defaultChecked/> Beauty
        </label>
        <label className='selectcon'>
          <input type="checkbox" name="" id="fragrancescheck" defaultChecked/> Fragrances
        </label>
        <label className='selectcon'>
          <input type="checkbox" name="" id="furniturecheck" defaultChecked/> Furniture
        </label>
        <label className='selectcon'>
          <input type="checkbox" name="" id="groceriescheck" defaultChecked/> Groceries
        </label>
      </div>
      <button type='button' className='btn text-light mt-3' style={{background:"#634c9f"}} onClick={filterAll}>Submit</button>

      {
        window.addEventListener("scroll", (event) => {
          let scroll = window.pageYOffset;
          if(scroll >= 2000){
            document.getElementsByClassName('filtersec')[0].style.display = "none";
          }
          if(scroll <2000){
            document.getElementsByClassName('filtersec')[0].style.display = "block";
          }
      })
      }
    </div>

    
  );
};



export default Filter;