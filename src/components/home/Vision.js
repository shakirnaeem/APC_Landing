import React from "react";
import "./Vision.css";
import vision from "../../assets/home-vision.png";

function Vision() {
  return (
    <div className="vision">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 vision__left">
            <img src={vision} alt="" className="vision__image" />
          </div>
          <div className="col-md-6 vision__right">
            <h1 className="vision__heading">Our vision</h1>
            <p className="vision__content">
              Our believe is that by strategically investing in the
              best-in-class tech and fintech firms we can help them
              become better. Together with our team of experts, we will
              revolutionize the tech industry and make it more accountable,
              accessible and human. We have 65 people in six Development teams
              plus Marketing, BI, Project Management and General Support to fuel
              the growth of our portfolio companies. And with 100 million
              committed capital our ambition is only limited to our own
              imagination. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
