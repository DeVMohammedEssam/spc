import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({
  NavbarClass,
  hasOuterContainer,
  hasInnerContainer,
  signed,
  linksColor
}) => {
  let color = linksColor || "dark";
  return (
    <div className={hasOuterContainer ? "container" : ""}>
      <nav
        className={` navbar navbar-expand-lg navbar-${color} ${NavbarClass} `}
      >
        <div className={hasInnerContainer ? "container " : "container-fluid"}>
          <Link to="/" className="navbar-brand text-warning">
            SpC
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav  w-100 justify-content-around">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Docs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Contact
                </a>
              </li>
              {!signed ? (
                <li className="nav-item ">
                  <Link to="/signIn" className="nav-link">
                    Sign In
                    <i class="fas fa-sign-in-alt ml-2" />
                  </Link>
                </li>
              ) : (
                <li className="nav-item ">
                  <Link to="/" className="nav-link">
                    Sign Out
                    <i class="fas fa-sign-out-alt ml-2" />
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
