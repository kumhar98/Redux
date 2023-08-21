import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const itam = useSelector((state) => state.card);
  return (
    <div className="headerContainer">
      <header>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="nav">
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/About"> About </NavLink>
            <NavLink to="/Contact"> Contact </NavLink>
          </div>
          <div
            style={{
              marginLeft: "auto",
              display: "inline-block",
            }}
          >
            <NavLink to="/cart" className="CardBag">
              <i className="fa-solid fa-bag-shopping"></i>{" "}
              <span>{itam.length}</span>
            </NavLink>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
