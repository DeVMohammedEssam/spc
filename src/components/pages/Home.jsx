import React, { Component } from "react";
import Header from "../Header";
import Features from "../Features";
import CardSlider from "../CardSlider";
import Brands from "../Brands";
import Footer from "../Footer";
class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="spc-logo-container">
          <img src="images/spcLogo.svg" class="spc-logo" alt="" />
        </div>
        <div className="sections-devider" />
        <div className="container">
          <Features />
          <div className="sections-devider" />
          <CardSlider />
          <div className="sections-devider" />
          <Brands />
        </div>
        <div className=" my-5" />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
