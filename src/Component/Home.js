import React, { Component } from 'react';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Confirm from '../confirm';

class Home extends Component {
  constructor() {
    super();
    this.state = { codes: [], names: [], selected: [] };
  }
  clickHandler = e => {
    var m = e.target.value;

    console.log('clicked' + m);
  };
  chechboxHandler = e => {
    console.log(e.target.value);

    this.state.selected.push(e.target.value);
    console.log(this.state.selected);
    const m = [];

    this.state.selected.map(n =>
      this.state.codes.filter(a =>
        n.includes(a.ValidatingAirlineCode) ? m.push(a) : null
      )
    );
    console.log(m);
    this.setState({ codes: m });
  };
  componentDidMount() {
    axios
      .get(
        'https://86063e87-f41f-40e9-82be-4037ba225a2a.mock.pstmn.io/a5/response'
      )
      .then(res => {
        this.setState({ codes: res.data.PricedItineraries });
        console.log(res.data.PricedItineraries.ValidatingAirlineCode);
        var q = res.data.PricedItineraries.ValidatingAirlineCode;
        axios
          .get(
            'https://cb572db7-2ed9-49de-900e-de24b9d49504.mock.pstmn.io/a5/home'
          )
          .then(res => {
            this.setState({ names: res.data });
            // res.data.map(a => a)(m => m.iata == q);
          });
      });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            val={this.clickHandler}
            exact
            path="/confirm"
            component={Confirm}
          />
        </Switch>
        <div>
          <div class="row" style={{ paddingTop: '15px' }}>
            <div class="col-sm-3">
              <div class="d-flex flex-column bd-highlight mb-3">
                <div class="p-2 bd-highlight" />
                <div class="p-2 bd-highlight" />
                <div class="p-2 bd-highlight" />
                <div class="p-2 bd-highlight">
                  {/* {this.state.codes.map((a, i) => {
                    return (
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                          
                        />
                        {this.state.names.map(b =>
                          b.iata === a.ValidatingAirlineCode ? (
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              {b.name}
                            </label>
                          ) : null
                        )}
                      </div>
                    );
                  })} */}
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="AI"
                      id="flexCheckDefault"
                      onChange={this.chechboxHandler}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Air india
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="TF"
                      id="flexCheckDefault"
                      onChange={this.chechboxHandler}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Malmo Aviation
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="TK"
                      id="flexCheckDefault"
                      onChange={this.chechboxHandler}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Turkish Airlines
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="AU"
                      id="flexCheckDefault"
                      onChange={this.chechboxHandler}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Austral Lineas Aereas
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="BA"
                      id="flexCheckDefault"
                      onChange={this.chechboxHandler}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      British Airways
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="EY"
                      id="flexCheckDefault"
                      onChange={this.chechboxHandler}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Etihad Airways
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="AA"
                      id="flexCheckDefault"
                      onChange={this.chechboxHandler}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      American airlines
                    </label>
                  </div>
                </div>
                <div class="p-2 bd-highlight" />
              </div>
            </div>
            <div class="col-sm-9">
              <table class="table table-secondary">
                <thead>
                  <tr>
                    <th scope="col">Airline name</th>
                    <th scope="col">Departure</th>
                    <th scope="col">Journey Duration & stops</th>
                    <th scope="col">Arrival</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {this.state.codes.map((a, i) => {
                    return (
                      <tr>
                        <th scope="row">
                          <p>
                            {' '}
                            {this.state.names.map(b =>
                              b.iata === a.ValidatingAirlineCode ? b.name : null
                            )}
                          </p>
                          {/* //  {a.ValidatingAirlineCode} */}
                        </th>
                        <td>
                          <p>
                            {a.OriginDestinationOptions.map(k =>
                              k.FlightSegments.map(n =>
                                new Date(n.DepartureDateTime)
                                  .toString()
                                  .substring(16, 21)
                              )
                            )}
                          </p>
                          <b>
                            {a.OriginDestinationOptions.map(k =>
                              k.FlightSegments.map(
                                n => n.DepartureAirportLocationCode
                              )
                            )}
                          </b>
                          <p>
                            {a.OriginDestinationOptions.map(k =>
                              k.FlightSegments.map(n =>
                                new Date(n.DepartureDateTime)
                                  .toString()
                                  .substr(0, 15)
                              )
                            )}
                          </p>
                        </td>
                        <td>
                          <p>
                            {a.OriginDestinationOptions.map(k =>
                              k.FlightSegments.map(n => n.JourneyDuration / 60)
                            )}
                            <br />
                            hours
                          </p>
                          <p>
                            {a.OriginDestinationOptions.map(k =>
                              k.FlightSegments.map(n => n.StopQuantity)
                            )}{' '}
                            <span>stops</span>
                          </p>
                        </td>
                        <td>
                          <p>
                            {a.OriginDestinationOptions.map(k =>
                              k.FlightSegments.map(n =>
                                new Date(n.ArrivalDateTime)
                                  .toString()
                                  .substring(16, 21)
                              )
                            )}
                          </p>
                          <b>
                            {a.OriginDestinationOptions.map(k =>
                              k.FlightSegments.map(
                                n => n.ArrivalAirportLocationCode
                              )
                            )}
                          </b>
                          <p>
                            {a.OriginDestinationOptions.map(k =>
                              k.FlightSegments.map(n =>
                                new Date(n.ArrivalDateTime)
                                  .toString()
                                  .substr(0, 15)
                              )
                            )}
                          </p>
                        </td>
                        <td
                          style={{
                            backgroundColor: '#6c757d',
                            textAlign: 'center'
                          }}
                        >
                          <Link to="/confirm">
                            <button
                              key={i}
                              type="button"
                              class="btn btn-secondary"
                              onClick={this.clickHandler}
                              value={i}
                            >
                              Book a flight
                            </button>
                          </Link>

                          <br />
                          <br />
                          <p>
                            <span>
                              {' '}
                              {
                                a.AirItineraryPricingInfo.ItinTotalFare
                                  .TotalFare.CurrencyCode
                              }
                              <b>
                                {
                                  a.AirItineraryPricingInfo.ItinTotalFare
                                    .TotalFare.Amount
                                }
                              </b>
                            </span>
                          </p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <footer class="row footer d-flex justify-content-center">
          Copyright 2023 Airbus
          </footer>
        </div>
      </Router>
    );
  }
}

export default Home;
