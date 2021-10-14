
import './App.css';

import { Redirect, Route, Switch } from "react-router-dom";
import Register from './pages/Register' ;
import HomePage from './pages/HomePage' ;
import Login from './pages/Login' ;
import Navbar from './components/Navbar';


function App() {
    return ( 
      <div className = "App">
        <h1 > Initial project files </h1> 
      </div>
    );

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
            <Redirect to ="/home" />
          </Route>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          
        </Switch>
    </div>
  );
}

export default App;