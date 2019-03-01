import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4  my-4">
            <ul className="footer__links-list list-unstyled d-flex justify-content-center ">
              <div>
                <h4 className="footer__links-list__title">Useful Links</h4>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Docs</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="col-12 col-lg-4 my-4">
            <div className="footer__info-box__container">
              <div className="footer__info-box">
                <i className="fas fa-envelope footer__info-box__icon" />

                <p className="footer__info-box__text">SPC_0125@gmail.com</p>
              </div>
              <div className="footer__info-box">
                <i className="fas fa-phone footer__info-box__icon" />
                <p className="footer__info-box__text">254-547-7894</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 my-4">
            <div className="footer__links-container">
              <h4 className="footer__links-list__title mb-5">Follow Us</h4>
              <div className="footer__social-box__container">
                <span className="footer__social-box">
                  <a href="#">
                    <img
                      src="images/facebook.png"
                      className="footer__social-icon"
                      alt=""
                    />
                  </a>
                </span>
                <span className="footer__social-box">
                  <a href="#">
                    <img
                      src="images/twitter.png"
                      className="footer__social-icon"
                      alt=""
                    />
                  </a>
                </span>
                <span className="footer__social-box">
                  <a href="">
                    <img
                      src="images/linkedin.png"
                      className="footer__social-icon"
                      alt=""
                    />
                  </a>
                </span>
                <span className="footer__social-box">
                  <a href="">
                    <img
                      src="images/google-plus.png"
                      className="footer__social-icon"
                      alt=""
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="footer__copy-right col-12 text-center ">
            copyright &copy; 2018 BETA_TEAM
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
