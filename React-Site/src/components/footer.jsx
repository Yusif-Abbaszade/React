import { Component } from 'react'
import "../assets/css/footer.css"
import site_logo from '../assets/img/site-logo.png'
import instalogo from '../assets/img/instalogo.png'

class footer extends Component {
  render() {
    return (
      <div className="container-fluid footer d-flex justify-content-center align-items-center flex-column" style={{background:"#fff2f5"}}>
        <button className='btn hex d-flex justify-content-center align-items-cemter'><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" height="36px" width="36px" version="1.1" id="Layer_1" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<polygon points="247.5,0 34.2,213.3 34.2,341.3 204.8,170.7 204.8,512 290.2,512 290.2,170.7 460.8,341.3 460.8,213.3 "/>
</svg></button>

        <div className="logo navbar-brand d-flex justify-content-center align-items-center">
            <span></span>
            <a href="#"><img src={site_logo} alt="" /></a>
            <span></span>
        </div>

        <div className="textbar d-flex flex-column gap-2 mt-3 text-center">
            <span><b>live@example.com</b></span>
            <span><b>+999 22 33 5555</b></span>
        </div>

        <div className="contacts mt-2">
            <div className="row">
                <div className="col-3">
                <button className='btn'><img width={"40px"} src={instalogo} alt="" /></button>
                </div>
                <div className="col-3">
                <button className='btn'><img width={"40px"} src={instalogo} alt="" /></button>
                </div>
                <div className="col-3">
                <button className='btn'><img width={"40px"} src={instalogo} alt="" /></button>
                </div>
                <div className="col-3">
                <button className='btn'><img width={"40px"} src={instalogo} alt="" /></button>
                </div>
            </div>
        </div>

        <div className="emailsec mt-3">
            <div className="input-group">
                <input className="input-group-text" />
                <div className="btn text-light" style={{background:"#ff0037"}}>Subscribe</div>
            </div>
        </div>


        <div className="links">
            <ul className='list-unstyled fs-6 d-flex gap-3 mt-4 mb-5'>
                <li><a href="#" className='text-decoration-none text-secondary'>Home</a></li>
                <li><a href="#" className='text-decoration-none text-secondary'>About</a></li>
                <li><a href="#" className='text-decoration-none text-secondary'>Services</a></li>
                <li><a href="#" className='text-decoration-none text-secondary'>Shops</a></li>
                <li><a href="#" className='text-decoration-none text-secondary'>Contact</a></li>
            </ul>
        </div>

        <span className='hra mb-4 mt-4'></span>

        <span className='mb-3'>Copyright 2024 Bookapp. All Rights Reserved</span>
      </div>
    )
  }
}

export default footer