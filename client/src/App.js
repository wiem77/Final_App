import "./App.css"
import NavBar from "./components/navBar/NavBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./components/home/Home"
import SignUp from "./components/SignUp/SignUp"
import Offers from "./components/offers/Offers"
import ContactUs from "./components/contact/Contact"

import Form from "./components/addOffer/Form"
import MyOffer from "./components/myOffer/MyOffer"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/addoffers" element={<Form />} />
          <Route path="/myOffer" element={<MyOffer />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
