import React from "react";
import "./explore.css";
import {
  HumanResourses,
  Analytics,
  Data,
  Finance,
  Customer,
  Cloud,
  NoCode,
  WebDevelopment,
  Productivity,
  Marketing,
  Sales,
  Design,
  Ecommerce,
  Legal,
} from "../../assets/imports";

const Explore = () => {
  const images = [
    { img: HumanResourses, title: "HumanResourses" },
    { img: Marketing, title: "Marketing" },
    { img: WebDevelopment, title: "WebDevelopment" },
    { img: Productivity, title: "Productivity" },
    { img: Sales, title: "Sales" },
    { img: Design, title: "Design" },
    { img: Cloud, title: "Cloud" },
    { img: NoCode, title: "NoCode" },
    { img: Legal, title: "Legal" },
    { img: Ecommerce, title: "Ecommerce" },
    { img: Finance, title: "Finance" },
    { img: Customer, title: "Customer" },
    { img: Data, title: "Data" },
    { img: Analytics, title: "Analytics" },
  ];

  return (
    <div className="sec__explore">
      <h1 className="sec__explore-header gradient__text">
        Explore the marketplace.
      </h1>
      <div className="sec__explore-container">
        {images.map((item, index) => (
          <div
            style={{ backgroundImage: `url(${item.img})` }}
            key={item.title + index}
          >
            <h2>
              <a href="/">{item.title}</a>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
