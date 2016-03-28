import { Route } from "react-router";
import React from "react";

import App from "./containers/App";

//Redux Smart
import Game from "./containers/Game";
import Build from "./containers/Build";

//Redux Dumb
import error404 from "./components/404";

export default (
  <Route name="app" path="/" component={App}>
      <Route path="game" component={Game} />
      <Route path="build" component={Build} />
      <Route path="*" component={error404}/>
  </Route>
);
