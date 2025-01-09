const img = 'https://creativemela.com/themeforest_html/Fresh_Vial/demo/freeshvila/images/video.jpg';

const About = () => {
  return (
    <div className="about-con">
        <div className="col" style={{gap:"15px"}}>
            <div className="header-txt"><b>ABOUT US</b></div>
            <div className="about-txt">Nunc molestie mi nunc, nec accumsan libero dignissim sit amet. Fusce sit amet tincidunt metus. Nunc eu risus suscipit massa dapibus blandit. Vivamus ac commodo eros.</div>
            <img src={img} alt="" width={"100%"} style={{borderRadius:"10px"}}/>
        </div>
    </div>
  )
}

export default About