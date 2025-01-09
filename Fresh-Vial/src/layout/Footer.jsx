
const logo = 'https://creativemela.com/themeforest_html/Fresh_Vial/demo/freeshvila/images/logo.png';

const Footer = () => {
  return (
    <div className="footersec" >
      <div className="main">
      <div className="leftside my-5">
        <h1 style={{color:'#2e4db9', fontSize:"50px"}}><b>Newsletter</b></h1>
        <p style={{maxWidth:"70%"}}>Nullam condimentum varius ipsum at viverra. Donec tortor metus, sollicitudin vitae est id, ullamcorper pretium tortor.</p>
      </div>
      <div className="searchbar my-5" style={{marginTop:"30px"}}>
        <input type="text" name="" id="" placeholder="Enter Your email address..."/>
        <button type="button"><b>SUBSCRIBE</b></button>
      </div>
      </div>
      <hr style={{marginTop:"40px", marginBottom:"60px"}} />
      <div className="aboutsc">
      <div className="row">
  <div className="col">
    <div className="footer-about pt-30">
      <a href="#"><img src={logo} alt="logo" /></a>
      <p>Donec vel ligula ornare, finibus ex at, vive risus. Aenean velit ex, finibus elementum eu, dignissim varius augue. </p>
      <span><i className="fa fa-globe" />www.fresh@water.com</span>
    </div>
  </div>
  <div className="col">
    <div className="footer-title">
      <h5 style={{color:"#2e4db9", fontSize:"20px"}}>Information</h5>
    </div>
    <div className="footer-info">
      <ul>
        <li><a href="contact.html">Contact Us</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="#">Delivery Information</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms &amp; Conditions</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>
  </div>
  <div className="col">
    <div className="footer-title pt-30">
      <h5 style={{color:"#2e4db9", fontSize:"20px"}}>Our Services</h5>
    </div>
    <div className="footer-info">
      <ul>
        <li><a href="#">My Account</a></li>
        <li><a href="#">Order History</a></li>
        <li><a href="#">Wishlist</a></li>
        <li><a href="#">Newsletter</a></li>
        <li><a href="#">Returns</a></li>
      </ul>
    </div>
  </div>
  <div className="col">
    <div className="footer-title pt-30">
      <h5 style={{color:"#2e4db9", fontSize:"20px"}}>Recent News</h5>
    </div>
    <div className="footer-news">
      <ul>
        <li>
          <p>Nullam condimenum varius ipsum.</p>
          <a href="#"><i className="fa fa-calendar" /> 15 Aug 2018</a>
        </li>
        <li>
          <p>Nullam condimenum varius ipsum.</p>
          <a href="#"><i className="fa fa-calendar" /> 15 Aug 2018</a>
        </li>
      </ul>
    </div>
  </div>
  <div className="col">
    <div className="footer-title pt-30">
      <h5 style={{color:"#2e4db9", fontSize:"20px"}}>Get In Tuch</h5>
    </div>
    <div className="footer-address">
      <ul>
        <li>
          <div className="icon map-i">
            <i className="fa fa-map-marker" />
          </div>
          <div className="address">
            <p>45 Grand Central Terminal <br /> New York.</p>
          </div>
        </li>
        <li>
          <div className="icon">
            <i className="fa fa-volume-control-phone" />
          </div>
          <div className="address">
            <p>+00123654789</p>
          </div>
        </li>
        <li>
          <div className="icon">
            <i className="fa fa-envelope-o" />
          </div>
          <div className="address">
            <p>freshwater@gmail.com</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

      </div>
    </div>
  )
}

export default Footer