const Footer = () => {
  return (
    <div className="container mt-5 d-flex flex-column">
        <div className="top-sec d-flex justify-content-between">
            <div className="left-side w-50">
                <h3>Join our newsletter for $10 offs</h3>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque distinctio dignis</p>
            </div>
            <div className="right-sec input-group-lg" style={{height:"80px"}}>
                <input type="text" className="p-2" name="" id="" placeholder="Enter your email address"/>
                <button className="btn text-light" style={{backgroundColor:"#634c9f"}}>sa</button>
            </div>
        </div>
        <hr />
        <div className="middle-sec">
                <div className="sec1 w-25">
                    <div className="txt my-2">Do You Need Help ?</div>
                    <div className="txt text-secondary mb-4">Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat. Pressa fåmoska.</div>
                    <div className="phnsc mb-4">
                        <div className="phn text-secondary">Monday-Friday: 08am-9pm</div>
                        <div className="phn fs-4"><b>0 800 300-500</b></div>
                    </div>
                    <div className="emailsec">
                        <div className="txt text-secondary">Need help with your order?</div>
                        <div className="txt fs-5"><b>info@example.com</b></div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Footer;