import React from "react";
import "./deals.css";
import { Deal } from "../../components/imports";

const Deals = () => {
  return (
    <div className="sec__Deals">
      <h1 className="gradient__text">New Deals.</h1>
      <Deal></Deal>
    </div>
  );
};

export default Deals;
