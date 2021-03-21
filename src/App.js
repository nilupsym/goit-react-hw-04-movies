import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import AppBar from './components/AppBar/AppBar';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MoviesPage from './pages/MoviesPage';

const App = () => (
  <>
    <AppBar />
    <Switch>
      <Route exact path={routes.home} component={HomePage} />
      <Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
      <Route path={routes.movies} component={MoviesPage} />
      <Route component={HomePage} />
    </Switch>
  </>
);

export default App;