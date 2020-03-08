import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App';
import FilmDetails from './components/FilmDetails/FilmDetails';
import NotFound from './components/NotFound/NotFound';

const routing = (
          <Router>
            <div>
                   <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>

                  </ul>
                  <Switch>
                      <Route path="/" component={App} exact />
                      <Route path="/films/:id" component={FilmDetails} />

                      <Route component={NotFound} />
                  </Switch>
            </div>
          </Router>

)

ReactDOM.render(routing, document.getElementById('root'));
