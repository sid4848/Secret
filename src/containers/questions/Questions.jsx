import React, { useState, Component } from "react";
import "./questions.css";
import { Plus, Minus } from "../../assets/imports";
import { Content } from "./content";

const Questions = () => {
  let limit = Content.length;

  let emp = [];
  for (let i = 0; i < limit - 1; i++) {
    emp.push(false);
  }

  let [isShown, setIsShown] = useState(emp);

  const images = {
    plus: Plus,
    minus: Minus,
  };

  const handleToggle = (i) => {
    const temp = [...isShown];
    temp[i] = !temp[i];
    setIsShown(temp);
  };

  return (
    <div className="sec__que">
      <h1 className="gradient__text">Frequently Asked Questions</h1>
      {Content.map((item, index) => (
        <div className="sec__que-container" key={index}>
          <div className="sec__que-content">
            <h2>{item.que}</h2>
            <p onClick={() => handleToggle(index)}>
              {!isShown[index] ? (
                <img src={images.plus} alt="image..." />
              ) : (
                <img src={images.minus} alt="image..." />
              )}
            </p>
          </div>
          {isShown[index] && <p className="sec__que-ans">{item.ans}</p>}
        </div>
      ))}
      <button className="btn-hover">Check our FAQs</button>
    </div>
  );
};

export default Questions;
