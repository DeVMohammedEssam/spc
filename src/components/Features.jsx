import React from "react";
import Card from "./Card";
const Features = () => {
  return (
    <div className="features">
      <div className="row no-gutters ">
        <div className="col-12 col-md-6 ">
          <Card cardStyle="card-simple" cardImgSrc="/images/alexa.jpg" />
        </div>
        <div className="col-12 col-md-6 d-flex align-items-center">
          <p className="px-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            ipsa blanditiis odit quis pariatur ipsam, sequi eveniet corporis
            possimus eaque doloribus mollitia consequatur enim libero quisquam
            tempore! Magni, nemo assumenda fugiat perspiciatis sequi odio non,
            molestiae debitis nisi hic, nesciunt culpa id perferendis
          </p>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-12 col-md-6 d-flex align-items-center order-1 order-md-0">
          <p className="pr-md-5 px-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            ipsa blanditiis odit quis pariatur ipsam, sequi eveniet corporis
            possimus eaque doloribus mollitia consequatur enim libero quisquam
            tempore! Magni, nemo assumenda fugiat perspiciatis sequi odio non,
            molestiae debitis nisi hic, nesciunt culpa id perferendis
          </p>
        </div>
        <div className="col-12 col-md-6 features__second-card">
          <Card cardStyle="card-simple" cardImgSrc="/images/AI1.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Features;
