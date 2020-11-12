import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import { MainPage } from "../Pages";

export const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={MainPage} />
          <Redirect to={"/"} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
