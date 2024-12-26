import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Herosec from "./components/Herosec"
import Filter from "./components/Filter"

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container-fluid d-flex mt-3">
        <div className="left-sec" style={{width:"25%"}}>
          <Filter />
        </div>
        <div className="right-sec" style={{width:"75%"}}>
          <Herosec />
        </div>
      </div>
    </>
  )
}

export default App