import "../assets/css/header.css"


const Header = () => {
  return (
    <div className="container-fluid d-flex justify-content-between headersec text-light py-2" style={{background:"#634c9f"}}>
      <div className="left-side" style={{fontSize:"14px"}}>
        <b>FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.</b>
      </div>
      <div className="right-side" style={{fontSize:"14px"}}>
        Until the end of sale: <span className="fs-5">47</span> days <span className="fs-5">08</span> hours <span className="fs-5">13</span> minutes <span className="fs-5">20</span> sec.
      </div>
    </div>
  )
}

export default Header