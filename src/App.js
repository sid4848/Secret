import "./App.css";
// import { menuBottom, menuTop } from "./containers/navBar/Menu";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
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
} from "./containers/imports";
import { Article, Post } from "./components/imports";
import {
  Affiliation,
  AllProducts,
  Analytics,
  API,
  CloudServices,
  CustomersCom,
  Data,
  Design,
  ECommerce,
  Finance,
  Get20,
  Home,
  HumanServices,
  Legal,
  Marketing,
  NoCode,
  Productivity,
  Sales,
  SignIn,
  SignUp,
  Web,
} from "./pages/imports";

const menu = [
  { url: "/affiliation", title: "Affiliation", component: Affiliation },
  { url: "/api", title: "White Label & API", component: API },
  { url: "/get20", title: "Get $20", component: Get20 },
  { url: "/signin", title: "SignIn", component: SignIn },
  { url: "/signup", title: "Join Secret", component: SignUp },
  { url: "/allProducts", title: "All Products", component: AllProducts },
  { url: "/analytics", title: "Analytics", component: Analytics },
  { url: "/data", title: "Data", component: Data },
  {
    url: "/customer",
    title: "Customer Communication",
    component: CustomersCom,
  },
  { url: "/finance", title: "Finance", component: Finance },
  { url: "/ecommerce", title: "Ecommerce", component: ECommerce },
  { url: "/legal", title: "Legal", component: Legal },
  { url: "/cloud", title: "Cloud Services", component: CloudServices },
  { url: "/sales", title: "Sales", component: Sales },
  {
    url: "/humanResources",
    title: "Human Resources",
    component: HumanServices,
  },
  { url: "/marketing", title: "Marketing", component: Marketing },
  { url: "/design", title: "Design", component: Design },
  { url: "/nocode", title: "NoCode", component: NoCode },
  { url: "/productivity", title: "Productivity", component: Productivity },
  { url: "/web", title: "Web Develeopment & IT", component: Web },
];

function App() {
  return (
    <Router>
      <div className="App">
        <div className="gradient__bg">
          <NavBar></NavBar>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          {menu.map((item, index) => (
            <Route
              path={item.url}
              element={<item.component />}
              key={item.url + index}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
