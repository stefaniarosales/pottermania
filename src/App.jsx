import React from "react"
import {Routes,Route} from "react-router-dom"


import Navbar from './components/Navbar/Navbar.jsx'
import Hero from "./components/hero/Hero"
import Footer from "./components/footer/Footer"


//pages
import AboutUsPage from "./pages/aboutuspage/AboutUsPage"
import ContactPage from "./pages/contactpage/ContactPage"
import ProductsPage from "./pages/productspage/ProductsPage"
import NoPage from "./pages/nopage/NoPage"




function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="AboutUsPage" element={<AboutUsPage/>}/>
        <Route path="ProductsPage" element={<ProductsPage/>}/>
        <Route path="ContactPage" element={<ContactPage/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
