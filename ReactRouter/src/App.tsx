import { Route, Routes } from "react-router-dom"
import About from "./components/About"
import Product from "./components/Product"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Header from "./components/Header"
const App = () => {
  return (
    <div>
      <Header/>
    <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </div>
  )
}

export default App