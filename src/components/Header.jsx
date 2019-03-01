import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="">
      <header className="header">
        <Navbar
          hasInnerContainer={false}
          hasOuterContainer={true}
          signed={false}
        />
        <div className="container header__content-container">
          <div className="header__content ">
            <h1 className="header__title">TURN YOUR SPEECH TO CODE</h1>
            <p className="header__text">
              <span className="text-warning font-weight-bold">SpC</span> speech
              to code is a platform that can turn your speech to code through
              NLP technique
            </p>

            <Link to="/dashboard" className="header__link--explore">
              <button className="btn btn-outline-warning header__btn--explore">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
