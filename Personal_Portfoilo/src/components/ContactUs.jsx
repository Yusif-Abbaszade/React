import '../assets/css/ContactUs.css';

const dlgsvg = 'https://html.vikinglab.agency/ovro/assets/img/icons/sublogo1.svg';

const ContactMe = () => {
  return (
    <div className="container-fluid contactus">
        <h2><img src={dlgsvg} alt="dlgsvg" />Contact Me</h2>
        <h1 style={{fontSize:"60px"}}><b>Have Any Project in Mind, <span className="text-warning"><i><u>Lets Talk</u></i></span></b></h1>
        <div className="card formcard mt-5">
            <h2 className='my-3'>Let's Work Together</h2>
            <div className="row formrow mt-3">
                <div className="col-10 col-md-5">
                    <input type="text" name="" id="" placeholder="Full Name" />
                </div>
                <div className="col-10 col-md-5">
                    <input type="email" name="" id="" placeholder="Email Address" />
                </div>
                <div className="col-10 col-md-5">
                    <input type="text" name="" id="" placeholder="Phone Number" />
                </div>
                <div className="col-10 col-md-5">
                    <input type="text" name="" id="" placeholder="Subject" />
                </div>
                <div className="col-10">
                    <input type="text" name="" id="" placeholder="Your Budget (optional)" />
                </div>
                <div className="col-10">
                    <input type="text" name="" id="" className='msgbox' placeholder="Message" />
                </div>
                <div className="col-10">
                    <button className="btn my-3 col-4" style={{background:"goldenrod"}}>Send</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactMe