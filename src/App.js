import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./views/Dashboard";
import { NewExpense } from "./views/NewExpense";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/new" component={NewExpense} />
        <Route path="/" component={Dashboard} exact />
      </Switch>
    </Router>
  );
}

export default App;
