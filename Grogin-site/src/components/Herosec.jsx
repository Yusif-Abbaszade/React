const banner = 'https://klbtheme.com/grogin/wp-content/uploads/2023/11/banner-33.jpg';
const Herosec = () => {
  return (
    <div className="container-fluid">
        <img src={banner} alt="" style={{maxWidth:"100%", position:"fixed", zIndex:-1, borderRadius:"10px", minWidth:"900px"}}/>
        <div className="textbox mx-3 pt-2" style={{width:"70%"}}>
            <div className="fs-3 mb-3 mt-1"><b>Grocery Store with different treasures</b></div>
            <p className="text-secondary">We have prepared special discounts for you on grocery products...</p>
            <button className="btn mt-3" style={{background:"white", borderRadius:"50px"}}> Shop Now →</button>
        </div>
    </div>
  )
}

export default Herosec