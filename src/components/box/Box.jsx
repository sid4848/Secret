import React from "react";
import "./box.css";
import {
  Airtable,
  Freshwork,
  GoogleWorkspace,
  Hubspot,
  Mailjet,
  Make,
  Notion,
  Pipedrive,
  Revolut,
  Stripe,
  Twilio,
  Zendesk,
} from "../../assets/imports";

const Box = () => {
  return (
    <div className="sec__heading-containers_boxes">
      <div className="sec__containers-box"></div>
      <div className="sec__containers-box">
        <img src={Twilio} alt="Twilio..." />
        <div>
          <h4>Twilio</h4>
          <p>$1,000 credit for startup(lifetime validity)</p>
        </div>
      </div>
      <div className="sec__containers-box">
        <img src={Freshwork} alt="Freshwork..." />
        <div>
          <h4>Freshworks</h4>
          <p>$1,000 credit for startup(lifetime validity)</p>
        </div>
      </div>
      <div className="sec__containers-box"></div>
      <div className="sec__containers-box">
        <img src={GoogleWorkspace} alt="GoogleWorkapace..." />
        <div>
          <h4>GoogleWorkspace</h4>
          <p>$1,000 credit for startup(lifetime validity)</p>
        </div>
      </div>
      <div className="sec__containers-box">
        <img src={Hubspot} alt="Hubspot..." />
        <div>
          <h4>Hubspot</h4>
          <p>$1,000 credit for startup(lifetime validity)</p>
        </div>
      </div>
      <div className="sec__containers-box">
        <img src={Twilio} alt="Twilio..." />
        <div>
          <h4>Twilio</h4>
          <p>$1,000 credit for startup(lifetime validity)</p>
        </div>
      </div>
      <div className="sec__containers-box"></div>
      <div className="sec__containers-box">
        <img src={Mailjet} alt="Mailjet..." />
        <div>
          <h4>Mailjet</h4>
          <p>$1,000 credit for startup(lifetime validity)</p>
        </div>
      </div>
      <div className="sec__containers-box">
        <img src={Zendesk} alt="Zendesk..." />
        <div>
          <h4>Zendesk</h4>
          <p>$1,000 credit for startup(lifetime validity)</p>
        </div>
      </div>
      <div className="sec__containers-box"></div>
      <div className="sec__containers-box">
        <img src={Make} alt="Make..." />
        <div>
          <h4>Make</h4>
          <p>$1,000 credit for startup(lifetime validity)</p>
        </div>
      </div>
      <div className="sec__containers-box"></div>
      <div className="sec__containers-box">
        <img src={Airtable} alt="airtable..." />
        <div>
          <h4>Airtable</h4>
          <p>$1,000 credit for startup(lifetime validity)</p>
        </div>
      </div>
      <div className="sec__containers-box">
        <img src={Airtable} alt="airtable..." />
        <div>
          <h4>Airtable</h4>
          <p>$1,000 credit for startup(lifetime validity)</p>
        </div>
      </div>
      <div className="sec__containers-box"></div>
      <div className="sec__containers-box">
        <img src={Notion} alt="Notion..." />
        <div>
          <h4>Notion</h4>
          <p>$1,000 credit for startup(lifetime validity)</p>
        </div>
      </div>
      <div className="sec__containers-box"></div>
      <div className="sec__containers-box"></div>
      <div className="sec__containers-box">
        <img src={Pipedrive} alt="Pipedrive..." />
        <div>
          <h4>Pipedrive</h4>
          <p>$1,000 credit for startup(lifetime validity)</p>
        </div>
      </div>
      <div className="sec__containers-box"></div>
      <div className="sec__containers-box">
        <img src={Revolut} alt="Revolut..." />
        <div>
          <h4>Revolut</h4>
          <p>$1,000 credit for startup(lifetime validity)</p>
        </div>
      </div>
      <div className="sec__containers-box">
        <img src={Stripe} alt="Stripe..." />
        <div>
          <h4>Stripe</h4>
          <p>$1,000 credit for startup(lifetime validity)</p>
        </div>
      </div>
      <div className="sec__containers-box"></div>
    </div>
  );
};

export default Box;
