import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div className="container-fluid navbar navbar-light bg-light d-flex justify-content-center align-items-center" style={{minHeight:"5vh"}}>
      <IconContext.Provider value={{size:"1.5em", className:"mb-1"}}>
        <div className="fs-4">
          <FaGithub />
          <span className="mx-2">GitHub</span>
        </div>
      </IconContext.Provider>
    </div>
  )
}

export default Header