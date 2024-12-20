import { Component } from 'react'
class services extends Component {
  render() {
    return (
      <div className="container my-5">
        <div className="top-side d-flex flex-column">
          <span className='text-secondary'>Barber Services</span>
          <span className='fs-2 text-dark'><b>Men{"'"}s Haircuts And Hair styles</b></span>
          <span className='text-secondary'>Tokyo city tower, Road No: 1280, Housing Apartment, Japan</span>
        </div>
        <div className="middle-1 d-flex flex-column my-5">
          <span className='text-dark fs-5'><b>Service Description</b></span>
          <span className='text-secondary'>Get Barbers at your doorstep now on your demand as per your required time and date. Trim your regular hairstyle or get a new look with a new style from the catalog. Even if you are too busy in the office and have a meeting to attend, why not get the job done in the office itself!! Choose a regular scissor cut or ask for a trimmer cut, any style you want is just a tap away!
          Praesent lectus facilisi tempor ridiculus arcu pharetra non tellus. Torquent nisl tempori amader Magnis mollis lobortis nam, montes ut, consequat sed amet nullam.</span>
        </div>
        <div className="middle-2">
          <span className='text-dark fs-5'><b>Service Description</b></span>
          <ul style={{color:"red"}}>
            <li className='mt-4'><p><b className='text-dark'>Service Booking : </b><span className='text-secondary'>3 hours before service delivery</span></p></li>
            <li><p><b className='text-dark'>Service Duration : </b><span className='text-secondary'>40 minutes {'('}can be extended up to 10 minutes{')'}</span></p></li>
            <li><p><b className='text-dark'>Service Availability : </b><span className='text-secondary'>9 Am to 7 pm</span></p></li>
          </ul>
        </div>
        <div className="middle-3">
          <span className='fs-5 text-dark'><b>Service Features</b></span>
          <ul style={{color:"red"}} className='mt-4'>
            <li><span className='text-secondary fs-6'>100% Secure Services</span></li>
            <li><span className='text-secondary fs-6'>Covid 19 Safety</span></li>
            <li><span className='text-secondary fs-6'>Easy Payment Method</span></li>
            <li><span className='text-secondary fs-6'>Services Quality Ensure</span></li>
          </ul>
        </div>
        <div className="bottom-sec border rounded p-3 mt-4">
          <span className='fs-5'><b>Do You Want to Book Men’s Haircut And Hair Style Services?</b></span>
          <div className="endbar m-3 d-flex justify-content-between">
            <div className="location d-flex flex-row align-items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ff3763" version="1.1" id="Capa_1" width="28px" height="28px" viewBox="0 0 395.71 395.71" xml:space="preserve">
<g>
	<path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738   c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388   C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191   c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
</g>
</svg>
              <div className="text d-flex flex-column">
                <span className='fs-5'><b>Your Location</b></span>
                <span className='text-secondary'>Madrid</span>
              </div>
            </div>
            <button type='button' className='btn text-light px-5 me-4' style={{background:"#ff3763"}}>Book Now</button>
          </div>
        </div>
      </div>
    )
  }
}

export default services