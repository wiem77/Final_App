import { Nav, NavLink, Bars, NavMenu } from "./NavBarElem"
import React, { useState, Fragment } from "react"
import { useSelector, useDispatch } from "react-redux"

const NavBar = () => {
  // const isAuth = useSelector((state) => state.authReducer.isAuth)

  const guestLinks = (
    <Fragment>
      <NavLink to="/" activestyle="true">
        Home
      </NavLink>
    </Fragment>
  )
  const authLinks = (
    <Fragment>
      <NavLink to="/offers" activestyle="true">
        Offers
      </NavLink>
      <NavLink to="/addoffers" activestyle="true">
        Add Offer
      </NavLink>
      <NavLink to="/myoffer" activestyle="true">
        My Offers
      </NavLink>
      <NavLink to="/contactus" activestyle="true">
        Contact Us
      </NavLink>
    </Fragment>
  )
  return (
    <div>
      <Nav>
        <NavLink to="/">PetitB</NavLink>
        <Bars />
        {/* <NavMenu>{isAuth ? authLinks : guestLinks}</NavMenu> */}{" "}
        <NavMenu>
          {authLinks}
          {guestLinks}
        </NavMenu>
      </Nav>
    </div>
  )
}
export default NavBar
