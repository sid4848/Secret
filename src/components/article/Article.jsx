import React from "react";
import "./article.css";
import {
  Airtable,
  Bubble,
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
  Algolia,
  AWSLogo,
  Freshwork,
  IBMCloud,
  Loom,
  Monday,
  Qonto,
  Sendgrid,
  Sendinblue,
  Shopify,
  secret,
  flame,
} from "../../assets/imports";

const Article = () => {
  return (
    <div className="sec__lib-article_container">
      <div className="sec__lib-article">
        <div className="sec__lib-article_head">
          <img src={Qonto} alt="qonto...." />
          <div>
            <h3>Qonto</h3>
            <p>The all-in-one business account</p>
          </div>
        </div>
        <div className="sec__lib-article_body">
          <h3>
            3 months free on Essential (for businesses), 4 months free on Smart,
            or 7 months free on the Basic plan (for freelancers)
          </h3>
          <p>save up to 100$</p>
        </div>
        <div className="sec__lib-article_footer">
          <button className="sec__lib-btn btn" type="button">
            free
          </button>
        </div>
      </div>
      <div className="sec__lib-article">
        <div className="sec__lib-article_head">
          <img src={AWSLogo} alt="qonto...." />
          <div>
            <h3>AWSActivate</h3>
            <p>The all-in-one business account</p>
          </div>
        </div>
        <div className="sec__lib-article_body">
          <h3>
            3 months free on Essential (for businesses), 4 months free on Smart,
            or 7 months free on the Basic plan (for freelancers)
          </h3>
          <p>save up to 100$</p>
        </div>
        <div className="sec__lib-article_footer">
          <button className="btn" type="button">
            Unlimited
          </button>
          <button className="btn" type="button">
            <img src={flame} alt="fire...." /> Popular
          </button>
        </div>
      </div>
      <div className="sec__lib-article">
        <div className="sec__lib-article_head">
          <img src={Airtable} alt="Airtable...." />
          <div>
            <h3>Airtable</h3>
            <p>The all-in-one business account</p>
          </div>
        </div>
        <div className="sec__lib-article_body">
          <h3>
            3 months free on Essential (for businesses), 4 months free on Smart,
            or 7 months free on the Basic plan (for freelancers)
          </h3>
          <p>save up to 100$</p>
        </div>
        <div className="sec__lib-article_footer">
          <button className="btn" type="button">
            Unlimited
          </button>
          <button className="btn" type="button">
            <img src={flame} alt="fire...." /> Popular
          </button>
        </div>
      </div>
      <div className="sec__lib-article">
        <div className="sec__lib-article_head">
          <img src={Algolia} alt="Algolia...." />
          <div>
            <h3>Algolia</h3>
            <p>The all-in-one business account</p>
          </div>
        </div>
        <div className="sec__lib-article_body">
          <h3>
            3 months free on Essential (for businesses), 4 months free on Smart,
            or 7 months free on the Basic plan (for freelancers)
          </h3>
          <p>save up to 100$</p>
        </div>
        <div className="sec__lib-article_footer">
          <button className="btn" type="button">
            Unlimited
          </button>
        </div>
      </div>
      <div className="sec__lib-article">
        <div className="sec__lib-article_head">
          <img src={Freshwork} alt="Freshwork...." />
          <div>
            <h3>Freshwork</h3>
            <p>The all-in-one business account</p>
          </div>
        </div>
        <div className="sec__lib-article_body">
          <h3>
            3 months free on Essential (for businesses), 4 months free on Smart,
            or 7 months free on the Basic plan (for freelancers)
          </h3>
          <p>save up to 100$</p>
        </div>
        <div className="sec__lib-article_footer">
          <button className="btn" type="button">
            Unlimited
          </button>
        </div>
      </div>
      <div className="sec__lib-article">
        <div className="sec__lib-article_head">
          <img src={GoogleWorkspace} alt="GoogleWorkspace...." />
          <div>
            <h3>GoogleWorkspace</h3>
            <p>The all-in-one business account</p>
          </div>
        </div>
        <div className="sec__lib-article_body">
          <h3>
            3 months free on Essential (for businesses), 4 months free on Smart,
            or 7 months free on the Basic plan (for freelancers)
          </h3>
          <p>save up to 100$</p>
        </div>
        <div className="sec__lib-article_footer">
          <button className="btn" type="button">
            Unlimited
          </button>
          <button className="btn" type="button">
            <img src={flame} alt="fire...." /> Popular
          </button>
        </div>
      </div>
      <div className="sec__lib-article">
        <div className="sec__lib-article_head">
          <img src={Hubspot} alt="Hubspot...." />
          <div>
            <h3>Hubspot</h3>
            <p>The all-in-one business account</p>
          </div>
        </div>
        <div className="sec__lib-article_body">
          <h3>
            3 months free on Essential (for businesses), 4 months free on Smart,
            or 7 months free on the Basic plan (for freelancers)
          </h3>
          <p>save up to 100$</p>
        </div>
        <div className="sec__lib-article_footer">
          <button className="btn" type="button">
            Unlimited
          </button>
        </div>
      </div>
      <div className="sec__lib-article">
        <div className="sec__lib-article_head">
          <img src={IBMCloud} alt="IBMCloud...." />
          <div>
            <h3>IBMCloud</h3>
            <p>The all-in-one business account</p>
          </div>
        </div>
        <div className="sec__lib-article_body">
          <h3>
            3 months free on Essential (for businesses), 4 months free on Smart,
            or 7 months free on the Basic plan (for freelancers)
          </h3>
          <p>save up to 100$</p>
        </div>
        <div className="sec__lib-article_footer">
          <button className="btn" type="button">
            Unlimited
          </button>
        </div>
      </div>
      <div className="sec__lib-article">
        <div className="sec__lib-article_head">
          <img src={Loom} alt="Loom...." />
          <div>
            <h3>Loom</h3>
            <p>The all-in-one business account</p>
          </div>
        </div>
        <div className="sec__lib-article_body">
          <h3>
            3 months free on Essential (for businesses), 4 months free on Smart,
            or 7 months free on the Basic plan (for freelancers)
          </h3>
          <p>save up to 100$</p>
        </div>
        <div className="sec__lib-article_footer">
          <button className="btn" type="button">
            Unlimited
          </button>
        </div>
      </div>
      <div className="sec__lib-article">
        <div className="sec__lib-article_head">
          <img src={Mailjet} alt="Mailjet...." />
          <div>
            <h3>Mailjet</h3>
            <p>The all-in-one business account</p>
          </div>
        </div>
        <div className="sec__lib-article_body">
          <h3>
            3 months free on Essential (for businesses), 4 months free on Smart,
            or 7 months free on the Basic plan (for freelancers)
          </h3>
          <p>save up to 100$</p>
        </div>
        <div className="sec__lib-article_footer">
          <button className="btn" type="button">
            Unlimited
          </button>
        </div>
      </div>
      <div className="sec__lib-article">
        <div className="sec__lib-article_head">
          <img src={Make} alt="Make...." />
          <div>
            <h3>Make</h3>
            <p>The all-in-one business account</p>
          </div>
        </div>
        <div className="sec__lib-article_body">
          <h3>
            3 months free on Essential (for businesses), 4 months free on Smart,
            or 7 months free on the Basic plan (for freelancers)
          </h3>
          <p>save up to 100$</p>
        </div>
        <div className="sec__lib-article_footer">
          <button className="btn" type="button">
            Unlimited
          </button>
          <button className="btn" type="button">
            <img src={flame} alt="fire...." /> Popular
          </button>
        </div>
      </div>
      <div className="sec__lib-article">
        <div className="sec__lib-article_head">
          <img src={Monday} alt="Monday...." />
          <div>
            <h3>Monday</h3>
            <p>The all-in-one business account</p>
          </div>
        </div>
        <div className="sec__lib-article_body">
          <h3>
            3 months free on Essential (for businesses), 4 months free on Smart,
            or 7 months free on the Basic plan (for freelancers)
          </h3>
          <p>save up to 100$</p>
        </div>
        <div className="sec__lib-article_footer">
          <button className="btn" type="button">
            Unlimited
          </button>
        </div>
      </div>
      <div className="sec__lib-article">
        <div className="sec__lib-article_head">
          <img src={Notion} alt="Notion...." />
          <div>
            <h3>Notion</h3>
            <p>The all-in-one business account</p>
          </div>
        </div>
        <div className="sec__lib-article_body">
          <h3>
            3 months free on Essential (for businesses), 4 months free on Smart,
            or 7 months free on the Basic plan (for freelancers)
          </h3>
          <p>save up to 100$</p>
        </div>
        <div className="sec__lib-article_footer">
          <button className="btn" type="button">
            Unlimited
          </button>
        </div>
      </div>
      <div className="sec__lib-article">
        <div className="sec__lib-article_head">
          <img src={Pipedrive} alt="Pipedrive...." />
          <div>
            <h3>Pipedrive</h3>
            <p>The all-in-one business account</p>
          </div>
        </div>
        <div className="sec__lib-article_body">
          <h3>
            3 months free on Essential (for businesses), 4 months free on Smart,
            or 7 months free on the Basic plan (for freelancers)
          </h3>
          <p>save up to 100$</p>
        </div>
        <div className="sec__lib-article_footer">
          <button className="sec__lib-btn btn" type="button">
            free
          </button>
          <button className="btn" type="button">
            <img src={flame} alt="fire...." /> Popular
          </button>
        </div>
      </div>
      <div className="sec__lib-article">
        <div className="sec__lib-article_head">
          <img src={Revolut} alt="Revolut...." />
          <div>
            <h3>Revolut</h3>
            <p>The all-in-one business account</p>
          </div>
        </div>
        <div className="sec__lib-article_body">
          <h3>
            3 months free on Essential (for businesses), 4 months free on Smart,
            or 7 months free on the Basic plan (for freelancers)
          </h3>
          <p>save up to 100$</p>
        </div>
        <div className="sec__lib-article_footer">
          <button className="btn" type="button">
            Unlimited
          </button>
        </div>
      </div>
      <div className="sec__lib-article">
        <div className="sec__lib-article_head">
          <img src={Sendgrid} alt="Sendgrid...." />
          <div>
            <h3>Sendgrid</h3>
            <p>The all-in-one business account</p>
          </div>
        </div>
        <div className="sec__lib-article_body">
          <h3>
            3 months free on Essential (for businesses), 4 months free on Smart,
            or 7 months free on the Basic plan (for freelancers)
          </h3>
          <p>save up to 100$</p>
        </div>
        <div className="sec__lib-article_footer">
          <button className="btn" type="button">
            Unlimited
          </button>
        </div>
      </div>
      <div className="sec__lib-article">
        <div className="sec__lib-article_head">
          <img src={Sendinblue} alt="Sendinblue...." />
          <div>
            <h3>Sendinblue</h3>
            <p>The all-in-one business account</p>
          </div>
        </div>
        <div className="sec__lib-article_body">
          <h3>
            3 months free on Essential (for businesses), 4 months free on Smart,
            or 7 months free on the Basic plan (for freelancers)
          </h3>
          <p>save up to 100$</p>
        </div>
        <div className="sec__lib-article_footer">
          <button className="btn" type="button">
            Unlimited
          </button>
        </div>
      </div>
      <div className="sec__lib-article">
        <div className="sec__lib-article_head">
          <img src={Shopify} alt="Shopify...." />
          <div>
            <h3>Shopify</h3>
            <p>The all-in-one business account</p>
          </div>
        </div>
        <div className="sec__lib-article_body">
          <h3>
            3 months free on Essential (for businesses), 4 months free on Smart,
            or 7 months free on the Basic plan (for freelancers)
          </h3>
          <p>save up to 100$</p>
        </div>
        <div className="sec__lib-article_footer">
          <button className="btn" type="button">
            Unlimited
          </button>
        </div>
      </div>
      <div className="sec__lib-article">
        <div className="sec__lib-article_head">
          <img src={Stripe} alt="Stripe...." />
          <div>
            <h3>Stripe</h3>
            <p>The all-in-one business account</p>
          </div>
        </div>
        <div className="sec__lib-article_body">
          <h3>
            3 months free on Essential (for businesses), 4 months free on Smart,
            or 7 months free on the Basic plan (for freelancers)
          </h3>
          <p>save up to 100$</p>
        </div>
        <div className="sec__lib-article_footer">
          <button className="btn" type="button">
            Unlimited
          </button>
        </div>
      </div>
      <div className="sec__lib-article">
        <div className="sec__lib-article_head">
          <img src={Twilio} alt="Twilio...." />
          <div>
            <h3>Twilio</h3>
            <p>The all-in-one business account</p>
          </div>
        </div>
        <div className="sec__lib-article_body">
          <h3>
            3 months free on Essential (for businesses), 4 months free on Smart,
            or 7 months free on the Basic plan (for freelancers)
          </h3>
          <p>save up to 100$</p>
        </div>
        <div className="sec__lib-article_footer">
          <button className="btn" type="button">
            Unlimited
          </button>
        </div>
      </div>
      <div className="sec__lib-article">
        <div className="sec__lib-article_head">
          <img src={Zendesk} alt="Zendesk...." />
          <div>
            <h3>Zendesk</h3>
            <p>The all-in-one business account</p>
          </div>
        </div>
        <div className="sec__lib-article_body">
          <h3>
            3 months free on Essential (for businesses), 4 months free on Smart,
            or 7 months free on the Basic plan (for freelancers)
          </h3>
          <p>save up to 100$</p>
        </div>
        <div className="sec__lib-article_footer">
          <button className="btn" type="button">
            Unlimited
          </button>
        </div>
      </div>
      <div className="sec__lib-article">
        <div className="sec__lib-article_head">
          <img src={Notion} alt="Notion...." />
          <div>
            <h3>Notion</h3>
            <p>The all-in-one business account</p>
          </div>
        </div>
        <div className="sec__lib-article_body">
          <h3>
            3 months free on Essential (for businesses), 4 months free on Smart,
            or 7 months free on the Basic plan (for freelancers)
          </h3>
          <p>save up to 100$</p>
        </div>
        <div className="sec__lib-article_footer">
          <button className="btn" type="button">
            Unlimited
          </button>
        </div>
      </div>
      <div className="sec__lib-article">
        <div className="sec__lib-article_head">
          <img src={Bubble} alt="Bubble...." />
          <div>
            <h3>Bubble</h3>
            <p>The all-in-one business account</p>
          </div>
        </div>
        <div className="sec__lib-article_body">
          <h3>
            3 months free on Essential (for businesses), 4 months free on Smart,
            or 7 months free on the Basic plan (for freelancers)
          </h3>
          <p>save up to 100$</p>
        </div>
        <div className="sec__lib-article_footer">
          <button className="btn" type="button">
            Unlimited
          </button>
        </div>
      </div>
      <div className="sec__lib-article">
        <div className="sec__lib-article_head">
          <img src={secret} alt="Bubble...." />
        </div>
        <div className="sec__lib-article_body">
          <p>Get full access</p>
          <h3>Sign up for only $199.</h3>
        </div>
        <div className="sec__lib-article_footer">
          <button className="btn" type="button">
            Get full access
          </button>
        </div>
      </div>
    </div>
  );
};

export default Article;
