import React from "react";
import "./possibility.css";
import { user, launch, leaf, thumbsUp, star } from "../../assets/imports";

const Possibility = () => {
  return (
    <div className="sec__possibility">
      <div className="sec__possibility-contents">
        <div className="sec__possibility-contents_header">
          <h1 className="gradient__text">
            Start saving on all your business needs with Secret.
          </h1>
          <p>
            Secret gives you instant access to hundreds of deals and thousands
            of savings on must-have software and services for startups and small
            businesses.
          </p>
        </div>
        <div className="sec__possibility-subcontents">
          <div className="sec__possibility-container">
            <img src={launch} alt="launch.." />
            <h3>210+ deals & growing.</h3>
            <p>
              We negotiate all our deals directly with the vendors and add
              amazing new offers each week.
            </p>
          </div>
          <div className="sec__possibility-container">
            <img src={leaf} alt=";eaf...." />
            <h3>All your business needs.</h3>
            <p>
              From cloud to e-mail marketing, Secret gathers all the best tools
              to kickstart and grow your startup.
            </p>
          </div>
          <div className="sec__possibility-container">
            <img src={thumbsUp} alt="" />
            <h3>Credits on tools you’re already using.</h3>
            <p>
              Already have your stack? Lower your burn rate with credits on
              tools you’re already using like AWS, Notion, Airtable or Stripe.
            </p>
          </div>
          <div className="sec__possibility-container">
            <img src={star} alt="leaf...." />
            <h3>One single membership.</h3>
            <p>
              Pay only one (small) membership fee and access all our deals! A
              no-brainer for all entrepreneurs.
            </p>
          </div>
        </div>
        <button type="button">Join Secret</button>
      </div>
      <div className="sec__possibility-user">
        <img src={user} alt="user img...." />
      </div>
    </div>
  );
};

export default Possibility;
