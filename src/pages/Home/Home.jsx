import React from "react";
import "./home.css";
import {
  Action,
  Deals,
  Explore,
  Footer,
  Header,
  Label,
  Library,
  NavBar,
  Possibility,
  Posts,
  Questions,
  Subscribe,
} from "../../containers/imports";

const Home = () => {
  return (
    <div>
      <div className="gradient__bg">
        {/* <NavBar></NavBar> */}
        <Header></Header>
      </div>
      <div>
        <Library></Library>
        <Possibility></Possibility>
        <Action></Action>
        <Posts></Posts>
        <Explore></Explore>
        <Deals></Deals>
        <Action></Action>
        <Questions></Questions>
        <Label></Label>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
