import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MoviesPage from './Pages/MoviesPage';

const App = () => (
  <>
    <ul>
      <li>
        <NavLink exact
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
        >
          Movies
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movies" component={MoviesPage} />
      <Route component={HomePage} />
    </Switch>
  </>
);

export default App;