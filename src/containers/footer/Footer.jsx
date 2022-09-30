import React, { useState } from "react";
import "./footer.css";
import {
  Secret,
  Logo,
  UnitedStates,
  France,
  Stars,
  Arrow,
  Next,
  Facebook,
  Linkedin,
  Twitter,
} from "../../assets/imports";

const Footer = () => {
  const [isShown, setShown] = useState(false);

  const handleShown = () => {
    setShown((current) => !current);
  };
  return (
    <>
      <div className="sec__footer">
        <div className="sec__footer-rating">
          <div className="sec__footer-secret">
            <img src={Secret} alt="secret.." />
            <p>Secret is the #1 startup benefits platform</p>
            <div className="sec__footer-language-english" onClick={handleShown}>
              <img src={UnitedStates} alt="flag.." />
              English
              <img src={Arrow} alt="arrow..." />
            </div>
            {isShown && (
              <div className="sec__footer-language-french">
                <img src={France} alt="france.." />
                Francies
                <img src={Next} alt="next...." />
              </div>
            )}
          </div>
          <div className="sec__footer-star">
            <img src={Logo} alt="logo.." />
            <img src={Stars} alt="stars.." />
            <p>
              <a href="#">TrustScore 4.5 138 reviews</a>
            </p>
          </div>
        </div>
        <div className="sec__footer-links_container">
          <div className="sec__footer-links_container1">
            <div>
              <h4>Platform</h4>
              <ul className="sec__footer-links">
                <li>
                  <a href="#">Get $20</a>
                </li>
                <li>
                  <a href="#"></a>Pricing
                </li>
                <li>
                  <a href="#">Agency Directory</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">hello@joinsecret.com</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Partnerships</h4>
              <ul className="sec__footer-links">
                <li>
                  <a href="#">White Label & API</a>
                </li>
                <li>
                  <a href="#">List your SaaS</a>
                </li>
                <li>
                  <a href="#">Affiliation</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sec__footer-links_container2">
            <h4>Popular Deals</h4>
            <ul className="sec__footer-links">
              <li>
                <a href="#">Google Cloud</a>
              </li>
              <li>
                <a href="#">AWS Activate</a>
              </li>
              <li>
                <a href="#">Microsoft for Startups</a>
              </li>
              <li>
                <a href="#">Pipedrive</a>
              </li>
              <li>
                <a href="#">Notion</a>
              </li>
              <li>
                <a href="#">Airtable</a>
              </li>
              <li>
                <a href="#">Typeform</a>
              </li>
              <li>
                <a href="#">Freshworks</a>
              </li>
              <li>
                <a href="#">Sendinblue</a>
              </li>
              <li>
                <a href="#">Hubspot</a>
              </li>
              <li>
                <a href="#">Slack</a>
              </li>
              <li>
                <a href="#">Quickbooks</a>
              </li>
              <li>
                <a href="#">Google Workspace</a>
              </li>
              <li>
                <a href="#">Make</a>
              </li>
            </ul>
          </div>
          <div className="sec__footer-links_container3">
            <h4>Popular Categories</h4>
            <ul>
              <li>
                <a href="#">Accounting</a>
              </li>
              <li>
                <a href="#">Banking</a>
              </li>
              <li>
                <a href="#">Cloud & Web Hosting</a>
              </li>
              <li>
                <a href="#">Cloud Database</a>
              </li>
              <li>
                <a href="#">CRM</a>
              </li>
              <li>
                <a href="#">Prospecting</a>
              </li>
              <li>
                <a href="#">Business Management</a>
              </li>
              <li>
                <a href="#">Contract Management</a>
              </li>
              <li>
                <a href="#">Payroll</a>
              </li>
              <li>
                <a href="#">Recruitment</a>
              </li>
              <li>
                <a href="#">Website builder</a>
              </li>
              <li>
                <a href="#">Application Monitoring</a>
              </li>
              <li>
                <a href="#">Online Payments</a>
              </li>
              <li>
                <a href="#">Call Centers</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sec__footer-search">
          <h4>Get new deals directly to your inbox</h4>
          <p>
            Sign up for our weekly newsletter and be the first to hear about our
            great new deals as well as exclusive content from our experts.
          </p>
          <input type="email" placeholder="Email" />
          <button className="sec__footer-search_btn">Subscribe</button>
        </div>
      </div>
      <div className="sec__footer-media">
        <div className="sec__footer-socialmedia">
          <a href="#">
            <img src={Facebook} alt="facebook.." />
          </a>
          <a href="#">
            <img src={Twitter} alt="twitter..." />
          </a>
          <a href="#">
            <img src={Linkedin} alt="linkedin" />
          </a>
        </div>
        <p>
          <a href="#">Term of service</a>
          <a href="#">Privacy</a>
          <a href="#">Term of use</a>
          <a href="#">Cookies</a>
        </p>
        <p>
          <a href="#">© 2022 Secret. All rights reserved</a>
        </p>
      </div>
    </>
  );
};

export default Footer;
