import React from "react";
import Heading from "../../common/Heading";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading
            title="Search Your Next Home "
            subtitle="Find new & featured property located in your local city."
          />

          <div class="search-container">
            <div class="search-buttons">
              <button>Buy</button>
              <button>Sell</button>
              <button>Rent</button>
            </div>
            <form action="#">
              <input type="text" placeholder="Search..." />
              <button type="submit">
                <i class="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
