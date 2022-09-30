import React from "react";
import rating from "../../assets/rating.png";
import star from "../../assets/star.png";
import "./header.css";
import { Box } from "../../components/imports";

const Header = () => {
  return (
    <div className="sec__header section__padding gradient__bgs">
      <div className="sec__heading">
        <h1 className="gradient__text">Grow more.</h1>
        <h1 className="gradient__text">Spend less.</h1>
        <p>
          Join 41,000+ entrepreneurs who have saved millions of dollars on
          software with Secret, the #1 SaaS deals platform.
        </p>
        <div className="sec__heading-icons">
          <h4>Excellent</h4>
          <img src={rating} alt="rating..." />
          <img src={star} alt="star..." />
          <p>Trustpoint</p>
        </div>
        <a href="/signup">
          <button type="button btn-hover">Join Secret</button>
        </a>
      </div>
      <div className="sec__heading-containers">
        <Box></Box>
      </div>
    </div>
  );
};

export default Header;
