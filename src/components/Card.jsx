import React from "react";
const Card = ({
  cardStyle,
  cardImgSrc,
  hasButtons,
  cardText,
  reverseOrder
}) => {
  return (
    <div className={cardStyle + " custom-card"}>
      <div
        className="card__img-container "
        style={reverseOrder && { order: 1 }}
      >
        {cardImgSrc && (
          <img
            className={`card__img img-responsive `}
            src={cardImgSrc}
            alt=""
          />
        )}
      </div>
      {cardText && (
        <p className={`card__text lead`} style={reverseOrder && { order: 0 }}>
          {cardText}
        </p>
      )}
      {hasButtons && (
        <div className="btns-container">
          <button className="btn  card__btn--explore mr-1">Explore</button>

          <button className="btn card__btn--fav ml-1">
            <i className="fas fa-star " />
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
