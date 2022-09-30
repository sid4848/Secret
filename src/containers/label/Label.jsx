import React from "react";
import "./label.css";
import { WhiteLable } from "../../assets/imports";

const Label = () => {
  return (
    <div className="sec__label">
      <img src={WhiteLable} alt="whitelabel..." />
      <div className="sec__label-content">
        <h3>White Label</h3>
        <p>
          Secret helps VCs, accelerators, incubators, entrepreneurs communities
          & many more businesses create and manage their own perks marketplace
          effortlessly.
        </p>
      </div>
      <button type="button" className="btn-hover sec__label-btn">
        Learn more
      </button>
    </div>
  );
};

export default Label;
