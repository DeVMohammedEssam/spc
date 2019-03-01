import React from "react";
const Brands = () => {
  return (
    <div className="brands">
      <div className="brands__title-container">
        <h2 className="brands__title">WHO IS USING OUR SERVESICES</h2>
      </div>
      <div className="brand__img-container">
        <img className="brand__img w-100" src="/images/coursera.svg" alt="" />
      </div>
      <div className="brand__img-container">
        <img className="brand__img" src="/images/apple.png" alt="" />
      </div>
      <div className="brand__img-container ">
        <img
          className="brand__img scaleLess"
          src="/images/563px-Wix.com_website_logo.png"
          alt=""
        />
      </div>
      <div className="brand__img-container">
        <img className="brand__img" src="/images/udacity.svg" alt="" />
      </div>
    </div>
  );
};

export default Brands;
