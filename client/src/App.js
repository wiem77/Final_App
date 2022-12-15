import "./App.css"
import NavBar from "./components/navBar/NavBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./components/home/Home"
import SignUp from "./components/SignUp/SignUp"
import Offers from "./components/offers/Offers"
import ContactUs from "./components/contact/Contact"

import Form from "./components/addOffer/Form"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/addoffers" element={<Form />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
