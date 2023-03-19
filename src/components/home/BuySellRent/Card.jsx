import React from "react";

const Card = ({ src, text, alt, title, value }) => {
  return (
    <>
      <div>
        <div className="boxes">
          <img src={src} alt={alt} />
          <h2>{title}</h2>
          <p>{text}</p>
          <button className="btn">{value}</button>
        </div>
      </div>
    </>
  );
};

export default Card;
