import React from "react";
import Card from "./Card";
const CardSlider = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div className="slide">
            <div className="row ">
              <div className="col-12 col-md-6">
                <Card
                  cardStyle="carousel__card--left"
                  cardImgSrc="/images/speak.jpg"
                  hasButtons={true}
                />
              </div>
              <div className="col-12 col-md-6">
                <div className="row h-100 ">
                  <div className="col-12 my-4">
                    <Card
                      cardStyle="carousel__card--right"
                      cardImgSrc="/images/profile1.jpg"
                      cardText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, consequatur."
                    />
                  </div>
                  <div className="col-12 my-4">
                    <Card
                      cardStyle="carousel__card--right"
                      cardImgSrc="/images/profile2.jpg"
                      cardText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, consequatur."
                      reverseOrder={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div className="slide">
            <div className="row">
              <div className="col-12 col-md-6">
                <Card
                  cardStyle="carousel__card--left"
                  cardImgSrc="/images/code.jpg"
                  hasButtons={true}
                />
              </div>
              <div className="col-12 col-md-6">
                <div className="row h-100 ">
                  <div className="col-12 my-4">
                    <Card
                      cardStyle="carousel__card--right"
                      cardImgSrc="/images/profile3.jpg"
                      cardText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, consequatur."
                    />
                  </div>
                  <div className="col-12  my-4">
                    <Card
                      cardStyle="carousel__card--right"
                      cardImgSrc="/images/profile4.jpg"
                      cardText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, consequatur."
                      reverseOrder={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div className="slide">
            <div className="row">
              <div className="col-12 col-md-6">
                <Card
                  cardStyle="carousel__card--left"
                  cardImgSrc="/images/laptops.jpg"
                  hasButtons={true}
                />
              </div>
              <div className="col-12 col-md-6">
                <div className="row h-100 ">
                  <div className="col-12 my-4">
                    <Card
                      cardStyle="carousel__card--right"
                      cardImgSrc="/images/profile5.jpg"
                      cardText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, consequatur."
                    />
                  </div>
                  <div className="col-12 my-4">
                    <Card
                      cardStyle="carousel__card--right"
                      cardImgSrc="/images/profile6.jpg"
                      cardText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, consequatur."
                      reverseOrder={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
