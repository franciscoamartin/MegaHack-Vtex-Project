import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Call from "./../Pages/Call";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Call} />
      <Route path="/atendimento" exact component={Call} />
      <Redirect from="*" to="/notFound" />
    </Switch>
  );
}
