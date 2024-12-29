import Navbar from "./layout/Navbar"
import backvideo from './assets/video/background.mp4'
import './assets/css/video.css'

const App = () => {



  return (
    <div className="mainbox">
      <div className="video-container">
        <div className="bx dark-theme"></div>
        <video autoPlay muted loop>
          <source src={backvideo} type="video/mp4" />
        </video>
      </div>

      <Navbar/>
    </div>
  )
}

export default App