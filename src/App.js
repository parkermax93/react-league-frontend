import React from 'react';
import './App.css';
import Home from './components/Home'
import Characters from './components/Characters'
import { Route, Switch } from "react-router-dom";


function App() {
  let routes = (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/characters">
        <Characters />
      </Route>
      {/* <Route exact path="/characters/:id">
        <Show />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route> */}
    </Switch>
  );

  return (
    routes

  );
}

export default App;