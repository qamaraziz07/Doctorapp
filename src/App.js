import React from "react";
import "./App.css";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Dashboard from "./Components/DashBoard";
import Profile from "./Components/Profile";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserDetails from "./Components/UserDetails";
function App() {
  return (
    <div className="App">
      <div className="outer">
        <div className="inner loginner">
          <Router>
            <Switch>
              <Route exact path="/login" component={Login} />

              <Route exact path="/register">
                <Registration cond={true} />
              </Route>

              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/profile/:id" component={Profile}></Route>
              <Route
                exact
                path="/Userdetails/:id"
                component={UserDetails}
              ></Route>

              <Redirect to="/login" />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
