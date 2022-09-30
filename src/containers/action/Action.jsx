import React from "react";
import "./action.css";

const Action = () => {
  return (
    <div className="sec__action">
      <div className="sec__action-heading">
        <h3>Subscribe to our newsletters</h3>
        <p>
          Get a 10% discount for Secret and a monthly digest with all our new
          deals & resources.
        </p>
      </div>
      <div className="sec__action-search">
        <input type="email" placeholder="Enter your Email" />
        <button type="button btn-hover">Don't miss a deal</button>
      </div>
    </div>
  );
};

export default Action;
