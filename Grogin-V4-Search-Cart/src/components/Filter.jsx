import '../assets/css/filter.css';
import LangUtil from '../utils/LangUtil';

const Filter = ({price, backup, setPrice, rate, setRate, discountPercentage, setDiscountPercentage, weight, setWeight,categories, setCategories, setData}) => {
  
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
    ))
    setData(filtered_data)
  }

  return (
    <div className="container-fluid">
      <div>
        <p><LangUtil EN={'Filter by Rate:'} AZ={'Reytinqə görə süzün:'} /> {rate}</p>
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
        <p><LangUtil EN={'Filter by Price: Under'} AZ={'Qiymətə görə süzün:'} /> ${price}</p>
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
        <p><LangUtil EN={'Filter by Discount:'} AZ={'Endirimə görə filtrləyin:'} /> +{discountPercentage}%</p>
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
        <p><LangUtil EN={'Filter by Weight: Under'} AZ={'Çəkiyə ilə Filtrləyin'} /> {weight}kg</p>
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
      <p className='mt-4'><LangUtil EN={'Filter by Category :'} AZ={'Kateqoriyaya görə süzün:'} /> </p>
      <div className='fs-5 d-flex flex-column gap-2'>
        <label className='selectcon'>
          <input type="checkbox" name="" id="beautycheck" defaultChecked/> <LangUtil EN={'Beauty'} AZ={'Gözəllik'} />
        </label>
        <label className='selectcon'>
          <input type="checkbox" name="" id="fragrancescheck" defaultChecked/> <LangUtil EN={'Fragrances'} AZ={'Ətirlər'}/>
        </label>
        <label className='selectcon'>
          <input type="checkbox" name="" id="furniturecheck" defaultChecked/> <LangUtil EN={'Furniture'} AZ={'Mebel'}/>
        </label>
        <label className='selectcon'>
          <input type="checkbox" name="" id="groceriescheck" defaultChecked/> <LangUtil EN={'Groceries'} AZ={'Baqqal'}/>
        </label>
      </div>
      <button type='button' className='btn text-light mt-3' style={{background:"#634c9f"}} onClick={filterAll}><LangUtil EN={'Submit'} AZ={'Təsdiq et'} /></button>

    </div>

    
  );
};



export default Filter;