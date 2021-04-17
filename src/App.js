import React from 'react';
import { useState, createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from './Components/Home/Home/Home';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <PrivateRoute exact path='/dashboard/:destination'>
            <Dashboard />
          </PrivateRoute>
          <Route exact path='/login'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;
