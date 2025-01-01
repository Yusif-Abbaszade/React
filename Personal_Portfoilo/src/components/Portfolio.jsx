import '../assets/css/Portfolio.css'

const dlgsvg = 'https://html.vikinglab.agency/ovro/assets/img/icons/sublogo1.svg';
const portfolio1 = 'https://html.vikinglab.agency/ovro/assets/img/all-images/portfolio/portfolio-img1.png';
const portfolio2 = 'https://html.vikinglab.agency/ovro/assets/img/all-images/portfolio/portfolio-img2.png';
const portfolio3 = 'https://html.vikinglab.agency/ovro/assets/img/all-images/portfolio/portfolio-img3.png';
const portfolio4 = 'https://html.vikinglab.agency/ovro/assets/img/all-images/portfolio/portfolio-img4.png';

const Portfolio = () => {
  return (
    <div className="container-fluid mt-5 portfolio">
        <h2><img src={dlgsvg} alt="dlgsvg" />My Portfolio</h2>
        <h1 style={{fontSize:"60px"}}><b>Innovation Designs Real <span className="text-warning"><i><u>Results</u></i></span></b></h1>
        <div className="row d-flex justify-content-center">
            <div className="imgbox col-10 mt-5">
                <img src={portfolio1} alt="portfolio1" width={"100%"} className="rounded-4" />
                <h2 className="text-center mt-5"><b>Reelup - E commercer Video Platform</b></h2>
            </div>
            <div className="imgbox col-10 mt-5">
                <img src={portfolio2} alt="portfolio2" width={"100%"} className="rounded-4" />
                <h2 className="text-center mt-5"><b>Reelup - E commercer Video Platform</b></h2>
            </div>
            <div className="imgbox col-10 mt-5">
                <img src={portfolio3} alt="portfolio3" width={"100%"} className="rounded-4" />
                <h2 className="text-center mt-5"><b>Reelup - E commercer Video Platform</b></h2>
            </div>
            <div className="imgbox col-10 mt-5">
                <img src={portfolio4} alt="portfolio4" width={"100%"} className="rounded-4" />
                <h2 className="text-center mt-5"><b>Reelup - E commercer Video Platform</b></h2>
            </div>
        </div>
    </div>
  )
}

export default Portfolio