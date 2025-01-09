
const bgimg = 'https://creativemela.com/themeforest_html/Fresh_Vial/demo/freeshvila/images/page-banner.jpg';

const Contactus = () => {
  return (
    <div className="contactus">
        <div className="banner" style={{background:`url(${bgimg})`, width:"100%", height:"300px", backgroundSize:"cover", backgroundRepeat:"no-repeat", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <h1>Contact Us</h1>
        </div>
        <form action="">
            <legend><u><b>Leave Reply</b></u></legend>
            <div className="colmd">
                <div className="column1">
                    <label htmlFor="name">Nick name :</label>
                    <input type="text" name="name" />
                </div>
                <div className="column1">
                    <label htmlFor="email">Email Address :</label>
                    <input type="email" name="email" />
                </div>
            </div>
            <div className="column1">
                <label htmlFor="textbox">Write a message :</label>
                <input type="text" name="textbox" />
            </div>
            <button type="button">SUBMIT</button>
        </form>
    </div>
  )
}

export default Contactus