import { Route } from "react-router";
import React from "react";

import App from "./containers/App";

//Redux Smart
import RedditPage from "./containers/RedditPage";

//Redux Dumb
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import PortfolioPage from "./components/Portfolio";
import ServicesPage from "./components/Services";
import ContactPage from "./components/Contact";
import error404 from "./components/404";

export default (
  <Route name="app" path="/" component={App}>
      <Route path="home" component={HomePage} />
      <Route path="reddit" component={RedditPage} />
      <Route path="portfolio" component={PortfolioPage} />
      <Route path="services" component={ServicesPage} />
      <Route path="about" component={AboutPage} />
      <Route path="contact" component={ContactPage} />
      <Route path="*" component={error404}/>
  </Route>
);
