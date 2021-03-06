import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './components/containers/Home'
import Characters from './components/containers/Characters'
import NavBar from './components/NavBar';
import ShowCharacter from './components/containers/ShowCharacter'
// import { Route, Switch } from "react-router-dom";


const App = (props) => {
  return (
    <Router>
        <div className="App">

        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/characters' component={Characters} />
        <Route path='/characters/:id' component={ShowCharacter} />
        </div>
    </Router>
  );
};
// function App() {
//   let routes = (
//     <Switch>
//       <Route exact path="/">
//         <Home />
//       </Route>
//       <Route path="/characters">
//         <Characters />
//       </Route>
//       {/* <Route exact path="/characters/:id">
//         <Show />
//       </Route>
//       <Route path="*">
//         <NoMatch />
//       </Route> */}
//     </Switch>
//     <NavBar />
//   );

//   return (
//     routes

//   );
// }

export default App;