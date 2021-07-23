import React from "react";
import "./GetStart.css";
import bulb from "../../assets/home-bulb.png";
import line from "../../assets/start-line.png";

function GetStart() {
  return (
    <div className="start_main">
      <div className="start">
        <div className="row my-5 py-5">
          <div className="col-md-6 start__left">
            <h1 className="start__heading">When did we get started?</h1>
            <p className="start__content">
              Founded in 2020, Amsterdam Platform Creation (APC) strategically
              invests in tech and fintech firms that deliver best-in-class
              financial related services. Our experienced and
              talented experts help these firms to become better and build it
              into something bigger.
            </p>
          </div>
          <div className="col-md-6 start__right">
            <img src={bulb} alt="" className="start__image" />
          </div>
        </div>
      </div>
      <div className="start__line text-left">
        <img src={line} alt="" className="line__image" />
      </div>
    </div>
  );
}

export default GetStart;
