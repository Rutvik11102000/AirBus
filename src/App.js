import React, { Component } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './Component/Home';
import Welcome from './Component/Welocome';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Logout from './Component/Logout';


class App extends Component {
  render() {
    return (
      <Router>
        <div class="container">
          <div class="row">
            <nav class="navbar navbar-light bg-light">
              <Link to="/">
                <span class="navbar-brand mb-0 h1">Airbus</span>
              </Link>
              <Link to="/Home">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">
                      Flights
                    </a>
                  </li>
                </ul>
              </Link>
              <Link to="/Logout">
                <button class="bn d-flex justify-content-end btn btn-light">
                  Logout
                </button>
              </Link>
            </nav>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/Home" component={Home} />
              <Route exact path="/Logout" component={Logout} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
