import React from "react";

import { Switch, Route } from "react-router-dom";

import Attendance from "./views/home";

export default () => {
  return (
      <Switch>
        <Route exact path="/atendimento" component={Attendance} />
      </Switch>
  );
};
