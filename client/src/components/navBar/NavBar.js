import SignUp from "../SignUp/SignUp"
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavBarElem"

const NavBar = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/">PetitB</NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/home" activestyle="true">
            Home
          </NavLink>
          <NavLink to="/offers" activestyle="true">
            Offers
          </NavLink>
          <NavLink to="/addoffers" activestyle="true">
            Add Offer
          </NavLink>
          <NavLink to="/contactus" activestyle="true">
            Contact Us
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
  )
}
export default NavBar
