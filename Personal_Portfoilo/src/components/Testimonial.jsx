import { IconContext } from "react-icons";
import { IoIosStar } from "react-icons/io";
import '../assets/css/Testimonial.css'

const dlgsvg = 'https://html.vikinglab.agency/ovro/assets/img/icons/sublogo1.svg';
const pp1 = 'https://html.vikinglab.agency/ovro/assets/img/all-images/testimonials/tesi-img1.png';
const pp2 = 'https://html.vikinglab.agency/ovro/assets/img/all-images/testimonials/tesi-img2.png';
const pp3 = 'https://html.vikinglab.agency/ovro/assets/img/all-images/testimonials/tesi-img3.png';
const pp4 = 'https://html.vikinglab.agency/ovro/assets/img/all-images/testimonials/tesi-img4.png';



const Testimonial = () => {
  return (
    <div className="container-fluid testimonial">
        <h2><img src={dlgsvg} alt="dlgsvg" />Testimonial</h2>
        <h1 style={{fontSize:"60px"}}><b>What Client Says About <span className="text-warning"><i><u>My Work</u></i></span></b></h1>
        <div className="row d-flex justify-content-center gap-4 mt-5">
            <div className="aboutcard testimonialcard col-10 col-sm-5 rounded-2" style={{border:"none"}}>
                <IconContext.Provider value={{color:"gold", size:"1.5em", className:"mt-3"}}>
                    <div>
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                    </div>
                </IconContext.Provider>
                <div className="card-text mt-3">
                    "Working with Alex was a game-changer for our brand. Their attention to detail and focus on creating a seamless user experience truly transformed our website. We’ve seen an incredible boost in user engagement and satisfaction."
                </div>
                <div className="profile-sec d-flex flex-row gap-3 my-4 m-3">
                    <img src={pp1} alt="pp1" width={"60px"} height={"60px"} />
                    <div className="text">
                        <div className="fs-5 cardname">David Elson</div>
                        <div className="text-secondary">Ezhe Source</div>
                    </div>
                </div>
            </div>
            <div className="aboutcard testimonialcard col-10 col-sm-5 rounded-2" style={{border:"none"}}>
                <IconContext.Provider value={{color:"gold", size:"1.5em", className:"mt-3"}}>
                    <div>
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                    </div>
                </IconContext.Provider>
                <div className="card-text mt-3">
                    "Alex exceeded all expectations with their innovative designs and collaborative approach. Reality that perfectly resonates with our audience."
                </div>
                <div className="profile-sec d-flex flex-row gap-3 my-4 m-3">
                    <img src={pp2} alt="pp2" width={"60px"} height={"60px"} className="rounded-5" />
                    <div className="text">
                        <div className="fs-5 cardname">Chris Glasser</div>
                        <div className="text-secondary">Auto Works</div>
                    </div>
                </div>
            </div>
            <div className="aboutcard testimonialcard col-10 col-sm-5 rounded-2" style={{border:"none"}}>
                <IconContext.Provider value={{color:"gold", size:"1.5em", className:"mt-3"}}>
                    <div>
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                    </div>
                </IconContext.Provider>
                <div className="card-text mt-3">
                    "The designs delivered by Yusif were intuitive and engaging, making a significant difference in how users interacted with our platform."
                </div>
                <div className="profile-sec d-flex flex-row gap-3 my-4 m-3">
                    <img src={pp3} alt="pp3" width={"60px"} height={"60px"} />
                    <div className="text">
                        <div className="fs-5 cardname">Rodger Struck</div>
                        <div className="text-secondary">Specialty Restaurant Group</div>
                    </div>
                </div>
            </div>
            <div className="aboutcard testimonialcard col-10 col-sm-5 rounded-2" style={{border:"none"}}>
                <IconContext.Provider value={{color:"gold", size:"1.5em", className:"mt-3"}}>
                    <div>
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                    </div>
                </IconContext.Provider>
                <div className="card-text mt-3">
                    "From wireframes to the final product, Alex brought creativity and functionality together beautifully. The final design not only looks fantastic but also works flawlessly across devices."
                </div>
                <div className="profile-sec d-flex flex-row gap-3 my-4 m-3">
                    <img src={pp4} alt="pp4" width={"60px"} height={"60px"} />
                    <div className="text">
                        <div className="fs-5 cardname">Mary Freund</div>
                        <div className="text-secondary">Rink's</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial