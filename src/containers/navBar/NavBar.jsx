import React, { useState } from "react";
import secret from "../../assets/secret.svg";
import search from "../../assets/search.png";
import gt from "../../assets/greater-than.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navBar.css";
import { NavLink } from "react-router-dom";

import { menuBottom, menuTop } from "./Menu";

// const menuTop = [
//   { url: "/affilation", title: "Affiliation" },
//   { url: "/api", title: "White Label & API" },
//   { url: "/get20", title: "Get $20" },
//   { url: "/signin", title: "SignIn" },
//   { url: "/signup", title: "Join Secret" },
// ];

// const menuBottom = [
//   { url: "/allProducts", title: "All Products" },
//   { url: "/analytics", title: "Analytics" },
//   { url: "/data", title: "Data" },
//   { url: "/customer", title: "Customer Communication" },
//   { url: "/finance", title: "Finance" },
//   { url: "/ecommerce", title: "Ecommerce" },
//   { url: "/legal", title: "Legal" },
//   { url: "/cloud", title: "Cloud Services" },
//   { url: "/sales", title: "Sales" },
//   { url: "/humanResources", title: "Human Resources" },
//   { url: "/marketing", title: "Marketing" },
//   { url: "/design", title: "Design" },
//   { url: "/nocode", title: "NoCode" },
//   { url: "/productivity", title: "Productivity" },
//   { url: "/web", title: "Web Develeopment & IT" },
// ];

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="sec__navbar">
      <div className="sec__navbar-topMenu">
        <div className="sec__navbar-logo_link">
          <a href="/">
            <img src={secret} alt="secret img" />
          </a>
        </div>
        <div className="sec__navbar-input">
          <input type="search" placeholder="Search Products" />
        </div>
        <div className="sec__navbar-topMenu_link">
          {menuTop.map((item, index) => (
            <p>
              <NavLink to={item.url} key={item.title + index}>
                {item.title}
              </NavLink>
            </p>
          ))}
        </div>
        <div className="sec__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="sec__navbar-menu_container scale-up-center">
              <div className="sec__navbar-topMenu_container-links">
                {menuTop.map((item, index) => (
                  <p>
                    <NavLink to={item.url} key={item.title + index}>
                      {item.title}
                    </NavLink>
                  </p>
                ))}
              </div>
              <div className="sec__navbar-botmenu_container-links">
                <h3>
                  Cotegouries <img src={gt} alt="img.." />
                </h3>
                {menuBottom.map((item, index) => (
                  <p>
                    <NavLink to={item.url} key={item.title + index}>
                      {item.title}
                    </NavLink>
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="sec__navbar-bottomMenu_link">
        {menuBottom.map((item, index) => (
          <p>
            <NavLink to={item.url} key={item.title + index}>
              {item.title}
            </NavLink>
          </p>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
