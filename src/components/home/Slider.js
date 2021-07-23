import React, { useState } from "react";
import "./Slider.css";
import icon from "../../assets/slider-icon.png";
import company from "../../assets/slide-company.png";

import design from "../../assets/slider_design.png";
import design1 from "../../assets/slider-image1.png";
import design2 from "../../assets/slider-image2.png";
import design3 from "../../assets/slide-image3.png";
import design4 from "../../assets/slider-image4.png";

import next from "../../assets/arrow-next.png";
import prev from "../../assets/arrow-prev.png";

function HomeSlider() {
  const [content, setContent] = useState(1);
  const nextHandler = () => {
    if (content >= 1 && content < 4) {
      setContent(content + 1);
    } else {
      setContent(content - 1);
    }
  };
  const prevHandler = () => {
    if (content <= 4 && content > 1) {
      setContent(content - 1);
    } else {
      setContent(content + 1);
    }
  };

  let text, author, image;
  if (content == 1) {
    text =
      " “You just want to work with people that have been in your shoes, and nobody has the track record that APC has in the Startup and Fintech scene.Their knowhow has been an invaluable asset in order to achieve our targets at each single level.” ";
    author = "Carlos Valenzuela, CEO";
    image = design1;
  }
  if (content == 2) {
    text =
      " “APC brings so much to the table over just money as the team is very experienced in the fintech space. For us, if we could pick any investor to have on board, it would be APC.”";
    author = "Frank Schuitemaker, CEO, Sniptech";
    image = design2;
  }
  if (content == 3) {
    text =
      " “Working with APC, we’ve been able to get connections we never would have been able to previously. The team provides us with active support, has helped us find great technical collaboration partners and potential customers.” ";
    author = "Gijs de Jager, CCO, Orangebuddies";
    image = design3;
  }
  if (content == 4) {
    text =
      " “It’s notable the amount of experience and learnings we were able to accelerate by working with APC. The team knows how to deal with a growing scale-up because they’ve been on the other side.” ";
    author = "Michal Kratochvil, CEO, Budgetbakers    ";
    image = design4;
  }
  return (
    <div className="slider">
      <div className="container">
        <p className="slider__text">{text}</p>
        <p className="slider__author mt-3">{author}</p>
        <div className="slider__company">
          {/* <img src={icon} alt="" />
          <img src={company} alt="" /> */}
          <img className="slider__companyLogo" src={image} alt="" />
        </div>
        <div className="slider__design">
          <img src={design} alt="" />
        </div>
        <div className="slider__arrows">
          <img src={prev} alt="" className="mx-5" onClick={prevHandler} />
          <img src={next} alt="" onClick={nextHandler} />
        </div>
      </div>
    </div>
  );
}

export default HomeSlider;
