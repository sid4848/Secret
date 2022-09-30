import React from "react";
import "./library.css";
import Article from "../../components/article/Article";

const Library = () => {
  return (
    <React.Fragment>
      <div className="sec__library">
        <h1 className="gradient__text">What's hot.</h1>
        <p>Here are some of the most in-demand deals according to our users.</p>
      </div>
      <Article></Article>
      <button className="sec__lib-button btn-hover">View All deals</button>
    </React.Fragment>
  );
};

export default Library;
