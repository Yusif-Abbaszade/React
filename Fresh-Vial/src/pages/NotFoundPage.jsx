import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div className="notfoundpage">
        <h1>Page Not Found!</h1>
        <div className="row">
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About Us</Link>
            <Link to={'/contact'}>Contact Us</Link>
        </div>
    </div>
  )
}

export default NotFoundPage