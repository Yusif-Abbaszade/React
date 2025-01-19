import LangUtil from "../utils/LangUtil";

const banner = 'https://klbtheme.com/grogin/wp-content/uploads/2023/11/banner-33.jpg';
const Herosec = () => {
  return (
    <div className="container-fluid p-4 rounded-5" style={{backgroundImage:`url(${banner})`, backgroundSize:"cover", maxWidth:"90%"}}>
        <div className="textbox mx-3 pt-2" style={{width:"70%"}}>
            <div className="fs-3 mb-3 mt-1"><b><LangUtil EN={'Grocery Store with different treasures'} AZ={'Müxtəlif xəzinələri olan ərzaq mağazası'} /></b></div>
            <p className="text-secondary"><LangUtil EN={'We have prepared special discounts for you on grocery products...'} AZ={'Sizlər üçün ərzaq məhsullarında xüsusi endirimlər hazırlamışıq...'} /></p>
            <button className="btn mt-3" style={{background:"white", borderRadius:"50px"}}> <LangUtil EN={'Shop Now'} AZ={'İndi görün'} /> →</button>
        </div>
    </div>
  )
}

export default Herosec