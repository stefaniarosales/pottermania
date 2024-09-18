import React from "react"
import {Routes,Route} from "react-router-dom"


import Navbar from './components/navbar/Navbar'
import Hero from "./components/hero/Hero"
import Footer from "./components/footer/Footer"
import ScrollButton from "./components/scroll/ScrollButton"


//pages
import AboutUsPage from "./pages/aboutuspage/AboutUsPage"
import ContactFormPage from "./pages/contactpage/ContactFormPage"
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
        <Route path="ContactFormPage" element={<ContactFormPage/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
      <Footer/>
      <ScrollButton/>
    </>
  )
}

export default App
