import { IconContext } from "react-icons";
import { CiClock1 } from "react-icons/ci";
import { FaRegCalendar } from "react-icons/fa";

const blgimg1 = 'https://html.vikinglab.agency/ovro/assets/img/all-images/blog/blog-img1.png';
const blgimg2 = 'https://html.vikinglab.agency/ovro/assets/img/all-images/blog/blog-img2.png';
const blgimg3 = 'https://html.vikinglab.agency/ovro/assets/img/all-images/blog/blog-img3.png';
const blgimg4 = 'https://html.vikinglab.agency/ovro/assets/img/all-images/blog/blog-img4.png';
const blgimg5 = 'https://html.vikinglab.agency/ovro/assets/img/all-images/blog/blog-img5.png';
const dlgsvg = 'https://html.vikinglab.agency/ovro/assets/img/icons/sublogo1.svg';

const OurBlog = ({thmColor, setThmColor}) => {
  return (
    <div className="container-fluid mt-5 ourblog">
      <h2><img src={dlgsvg} alt="dlgsvg" />Our Blog</h2>
      <h1 style={{fontSize:"60px"}}><b>Our Latest Blog Idea UI/UX <span className="text-warning"><i><u>Trends</u></i></span></b></h1>
      <div className="row ourblogrow d-flex justify-content-center">
        <div className="col-10 col-sm-6 my-4">
          <img src={blgimg1} alt="blgimg1" width={"100%"} />
          <div className="secondsc fs-5 d-flex justify-content-between mt-3">
            <span>UI/UX</span>
            <span className="d-flex gap-1">
              <IconContext.Provider value={{size:"1.2em", color:thmColor, className:"mb-1"}}>
                <div>
                  <CiClock1 />
                </div>
              </IconContext.Provider>
              3 min read
            </span>
          </div>
          <div className="namesec fs-4 mt-2">Behind the Pixels : My Favorite Design Projects</div>
          <div className="userpf d-flex justify-content-between mt-3">
            <div className="left">
              <img src={blgimg5} alt="blgimg5" />
              Alex Carry
            </div>
            <div className="right d-flex">
              <IconContext.Provider value={{size:"1.2em", color:thmColor, className:"mb-1"}}>
                <div>
                  <FaRegCalendar />
                </div>
              </IconContext.Provider>
              Oct 26, 2024
            </div>
          </div>
        </div>
        <div className="col-10 col-sm-6 my-4">
          <img src={blgimg2} alt="blgimg1" width={"100%"} />
          <div className="secondsc fs-5 d-flex justify-content-between mt-3">
            <span>UI/UX</span>
            <span className="d-flex gap-1">
              <IconContext.Provider value={{size:"1.2em", color:thmColor, className:"mb-1"}}>
                <div>
                  <CiClock1 />
                </div>
              </IconContext.Provider>
              3 min read
            </span>
          </div>
          <div className="namesec fs-4 mt-2">Behind the Pixels : My Favorite Design Projects</div>
          <div className="userpf d-flex justify-content-between mt-3">
            <div className="left">
              <img src={blgimg5} alt="blgimg5" />
              Alex Carry
            </div>
            <div className="right d-flex">
              <IconContext.Provider value={{size:"1.2em", color:thmColor, className:"mb-1"}}>
                <div>
                  <FaRegCalendar />
                </div>
              </IconContext.Provider>
              Oct 26, 2024
            </div>
          </div>
        </div>
        <div className="col-10 col-sm-6 my-4">
          <img src={blgimg3} alt="blgimg1" width={"100%"} />
          <div className="secondsc fs-5 d-flex justify-content-between mt-3">
            <span>UI/UX</span>
            <span className="d-flex gap-1">
              <IconContext.Provider value={{size:"1.2em", color:thmColor, className:"mb-1"}}>
                <div>
                  <CiClock1 />
                </div>
              </IconContext.Provider>
              3 min read
            </span>
          </div>
          <div className="namesec fs-4 mt-2">Behind the Pixels : My Favorite Design Projects</div>
          <div className="userpf d-flex justify-content-between mt-3">
            <div className="left">
              <img src={blgimg5} alt="blgimg5" />
              Alex Carry
            </div>
            <div className="right d-flex">
              <IconContext.Provider value={{size:"1.2em", color:thmColor, className:"mb-1"}}>
                <div>
                  <FaRegCalendar />
                </div>
              </IconContext.Provider>
              Oct 26, 2024
            </div>
          </div>
        </div>
        <div className="col-10 col-sm-6 my-4">
          <img src={blgimg4} alt="blgimg1" width={"100%"} />
          <div className="secondsc fs-5 d-flex justify-content-between mt-3">
            <span>UI/UX</span>
            <span className="d-flex gap-1">
              <IconContext.Provider value={{size:"1.2em", color:thmColor, className:"mb-1"}}>
                <div>
                  <CiClock1 />
                </div>
              </IconContext.Provider>
              3 min read
            </span>
          </div>
          <div className="namesec fs-4 mt-2">Behind the Pixels : My Favorite Design Projects</div>
          <div className="userpf d-flex justify-content-between mt-3">
            <div className="left">
              <img src={blgimg5} alt="blgimg5" />
              Alex Carry
            </div>
            <div className="right d-flex">
              <IconContext.Provider value={{size:"1.2em", color:thmColor, className:"mb-1"}}>
                <div>
                  <FaRegCalendar />
                </div>
              </IconContext.Provider>
              Oct 26, 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurBlog