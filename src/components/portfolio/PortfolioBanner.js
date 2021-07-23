import React from "react";
import "./PortfolioBanner.css";
import banner from "../../assets/portfolio-banner.png";

function PortfolioBanner() {
  return (
    <div className="portfolioBanner ">
      <div className="container">
        <h1 className="portfolioBanner__heading">
          Be the next fintech<span> success story.</span>
        </h1>
        <p className="portfolioBanner__text mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div className="portfolioBanner__imageSection">
        <img className="portfolioBanner__image" src={banner} alt="" />
      </div>
    </div>
  );
}

export default PortfolioBanner;
