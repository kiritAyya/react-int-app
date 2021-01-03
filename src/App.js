import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./views/Dashboard";
import { NewExpense } from "./views/NewExpense";

function App() {
  return (
    <div className="p-3" style={{ height: '100vh'}}>
      <Router>
        <Switch>
          <Route path="/new" component={NewExpense} />
          <Route path="/" component={Dashboard} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
