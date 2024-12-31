
const skill1 = 'https://html.vikinglab.agency/ovro/assets/img/icons/skill1.svg';
const skill2 = 'https://html.vikinglab.agency/ovro/assets/img/icons/skill2.svg';
const skill3 = 'https://html.vikinglab.agency/ovro/assets/img/icons/skill3.svg';
const skill4 = 'https://html.vikinglab.agency/ovro/assets/img/icons/skill4.svg';
const skill5 = 'https://html.vikinglab.agency/ovro/assets/img/icons/skill5.svg';
const skill6 = 'https://html.vikinglab.agency/ovro/assets/img/icons/skill6.svg';
const dlgsvg = 'https://html.vikinglab.agency/ovro/assets/img/icons/sublogo1.svg';

const MySkill = () => {
  return (
    <div className="container-fluid mt-5" id="myskill">
        <h2><img src={dlgsvg} alt="dlgsvg" />My Skill</h2>
        <h1 style={{fontSize:"60px"}}><b>The Tools Behind Exceptional <span className="text-warning"><i><u>Design</u></i></span></b></h1>
        <div className="row mt-5 d-flex justify-content-center g-2">
            <div className="aboutcardmain card col-10 col-md-5 col-xl-4 gap-3 py-4 d-flex justify-content-center align-items-center">
                <img src={skill1} width={"100px"} alt="skill1" />
                <div className="card-title fs-2"><b>96%</b></div>
                <div className="card-text">Figma</div>
            </div>
            <div className="aboutcardmain card col-10 col-md-5 col-xl-4 gap-3 py-4 d-flex justify-content-center align-items-center">
                <img src={skill2} width={"100px"} alt="skill2" />
                <div className="card-title fs-2"><b>87%</b></div>
                <div className="card-text">Photoshop</div>
            </div>
            <div className="aboutcardmain card col-10 col-md-5 col-xl-4 gap-3 py-4 d-flex justify-content-center align-items-center">
                <img src={skill3} width={"100px"} alt="skill3" />
                <div className="card-title fs-2"><b>90%</b></div>
                <div className="card-text">Illustrator</div>
            </div>
            <div className="aboutcardmain card col-10 col-md-5 col-xl-4 gap-3 py-4 d-flex justify-content-center align-items-center">
                <img src={skill4} width={"100px"} alt="skill4" />
                <div className="card-title fs-2"><b>89%</b></div>
                <div className="card-text">Sketch</div>
            </div>
            <div className="aboutcardmain card col-10 col-md-5 col-xl-4 gap-3 py-4 d-flex justify-content-center align-items-center">
                <img src={skill5} width={"100px"} alt="skill5" />
                <div className="card-title fs-2"><b>92%</b></div>
                <div className="card-text">Adobe XD</div>
            </div>
            <div className="aboutcardmain card col-10 col-md-5 col-xl-4 gap-3 py-4 d-flex justify-content-center align-items-center">
                <img src={skill6} width={"100px"} alt="skill6" />
                <div className="card-title fs-2"><b>85%</b></div>
                <div className="card-text">Wordpress</div>
            </div>
        </div>
    </div>
  )
}

export default MySkill