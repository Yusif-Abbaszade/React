
const dlgsvg = 'https://html.vikinglab.agency/ovro/assets/img/icons/sublogo1.svg';

const OurService = () => {
  return (
    <div className="container-fluid d-flex flex-column mt-5" id="ourservice">
        <h2><img src={dlgsvg} alt="" />My Services</h2>
        <h1 style={{fontSize:"60px"}}><b>Elevating Brands</b></h1>
        <h1 style={{fontSize:"60px"}} className="mx-5"><b>Intuitive <span className="text-warning"><i><u>Design</u></i></span></b></h1>
        <div className="row gap-5 mt-5 d-flex justify-content-center">
            <div className="aboutcardmain card col-10 gap-3 py-4">
                <div className="card-title fs-2">UI/UX Design</div>
                <div className="card-text">Designing intuitive, user-focused interfaces that prioritize functionality and seamless navigation.</div>
            </div>
            <div className="aboutcardmain card col-10 gap-3 py-4">
                <div className="card-title fs-2">User Research & Prototyping</div>
                <div className="card-text">Conducting in-depth user research and creating interactive prototypes to validate ideas and refine designs.</div>
            </div>
            <div className="aboutcardmain card col-10 gap-3 py-4">
                <div className="card-title fs-2">Responsive Web Design</div>
                <div className="card-text">Crafting designs that adapt seamlessly across all devices, ensuring a consistent user experience.</div>
            </div>
            <div className="aboutcardmain card col-10 gap-3 py-4">
                <div className="card-title fs-2">Wireframing & Visual Design</div>
                <div className="card-text">Creating detailed wireframes and visually stunning designs to bring ideas into focus.</div>
            </div>
        </div>
    </div>
  )
}

export default OurService