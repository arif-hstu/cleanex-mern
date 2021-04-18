import React from 'react';
import { useState, useEffect, createContext } from 'react';
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
export const AdminContext = createContext();
export const SelectedServiceContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [admins, setAdmins] = useState([]);
  const [selecteService, setSelectedService] = useState([]);

  useEffect(() => {
    fetch('https://cleanex.herokuapp.com/admins')
      .then(res => res.json())
      .then(data => setAdmins(data))
  }, [])

  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <AdminContext.Provider value={[isAdmin, setIsAdmin, admins, setAdmins]}>
          <SelectedServiceContext.Provider value={[selecteService, setSelectedService]}>
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
          </SelectedServiceContext.Provider>
        </AdminContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
