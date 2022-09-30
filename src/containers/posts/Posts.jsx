import React, { useState, useEffect } from "react";
import "./posts.css";
import { Post } from "../../components/imports";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Posts = () => {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  var slidingLenght = 0;
  if (screenSize.dynamicWidth <= 350) {
    slidingLenght = 0.8 * screenSize.dynamicWidth;
  } else if (screenSize.dynamicWidth <= 400) {
    slidingLenght = 0.8295 * screenSize.dynamicWidth;
  } else if (screenSize.dynamicWidth <= 550) {
    slidingLenght = 0.85 * screenSize.dynamicWidth;
  } else if (screenSize.dynamicWidth <= 800) {
    slidingLenght = 0.45 * screenSize.dynamicWidth;
  } else if (screenSize.dynamicWidth <= 1050) {
    slidingLenght = 0.308 * screenSize.dynamicWidth;
  } else {
    slidingLenght = 0.318 * screenSize.dynamicWidth;
  }

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - slidingLenght;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + slidingLenght;
  };

  return (
    <div className="sec__posts">
      <div className="sec__posts-heading">
        <h1 className="gradient__text">
          41,000+ startups, freelancers and SMBs trust us
        </h1>
        <p>
          We’ve helped thousands of startups, SMBs, agencies and freelancers
          around the globe grow more and spend less. You’re in good company.
        </p>
      </div>
      <Post></Post>
      <div className="sec__posts-slider">
        <MdChevronLeft
          className="sec__posts-arrows"
          onClick={slideLeft}
          size={40}
        />
        <MdChevronRight
          className="sec__posts-arrows"
          onClick={slideRight}
          size={40}
        />
      </div>
    </div>
  );
};

export default Posts;
