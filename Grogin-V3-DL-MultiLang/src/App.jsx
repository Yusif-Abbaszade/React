import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Header from "./layouts/Header"
import Navbar from "./layouts/Navbar"
import { useState } from "react"
import ProductDetails from "./components/ProductDetails"
import './assets/css/Theme.css';
const App = () => {


  const [searchText, setSearchText] = useState('');



  return (
    <BrowserRouter>
      <Header />
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products/:slug" element={<ProductDetails />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App