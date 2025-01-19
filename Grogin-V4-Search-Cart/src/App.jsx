import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Header from "./layouts/Header"
import Navbar from "./layouts/Navbar"
import { useState } from "react"
import ProductDetails from "./components/ProductDetails"
import './assets/css/Theme.css';
import Cart from "./pages/Cart"
const App = () => {




  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:slug" element={<ProductDetails />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App