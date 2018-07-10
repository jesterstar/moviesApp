import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Switch, Route } from "react-router";
import { createStore } from "redux";
import appReducers from "./reducers";

import * as routes from "./routes";
import { Main } from "./routes/main/main";

const store = createStore(appReducers);

ReactDOM.render(
  <Provider store={store}>
    <Main />
    {/*<Router>
      <Switch>
        {Object.keys(routes).map(x => {
          const route = routes[x];
          return (
            <Route path={route.path} exact={route.exact} component={route.component} key={`key-${route.path}`} />
          );
        })}
      </Switch>
    </Router>*/}
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
