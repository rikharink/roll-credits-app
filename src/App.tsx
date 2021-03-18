import React from "react";
import "./App.css";
import "@fontsource/montserrat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DesignPage } from "./Pages/DesignPage";
import { RollCreditsPage } from "./Pages/RollCreditsPage";
import {
  CreditsDesign,
  CreditsDesignContextProvider,
} from "./Context/CreditsContext";

function App() {
  const defaults: Partial<CreditsDesign> = {
  };

  return (
    <CreditsDesignContextProvider defaults={defaults}>
      <Router>
        <Switch>
          <Route path="/credits">
            <RollCreditsPage />
          </Route>
          <Route path="/">
            <DesignPage />
          </Route>
        </Switch>
      </Router>
    </CreditsDesignContextProvider>
  );
}

export default App;
