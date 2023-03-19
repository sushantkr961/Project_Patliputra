import React from "react";
import "./BuySellRent.css";
import Card from "./Card";
import Buy from "./images/Buy.png";
import Sell from "./images/Sell.png";
import Rent from "./images/Rent.png";

const BuySellRent = () => {
  return (
    <div className="all">
      <section className="feature background">
        <div className="cards">
          <Card
            src={Buy}
            alt="Buy"
            text="Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else."
            title="Buy a home"
            value="Browse homes"
          />
          <Card
            src={Sell}
            alt="sell"
            text="No matter what path you take to sell your home, we can help you navigate a successfull sale."
            title="Sell a home"
            value="See your options"
          />
          <Card
            src={Rent}
            alt="rent"
            text="We're creating a seamless online experience - from shopping on the largest rental network, to applying, to paying rent."
            title="Rent a home"
            value="Find rentals"
          />
        </div>
      </section>
    </div>
  );
};

export default BuySellRent;
