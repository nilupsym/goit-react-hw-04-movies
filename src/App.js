import React, {Suspense, lazy} from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import NotFoundPage from './views/NotFoundPage';
import routes from './routes';

const HomePage = lazy(() =>
  import('./views/HomePage.jsx' /* webpackChunkName: "home-page" */)
);

const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage/MovieDetailsPage.jsx' /* webpackChunkName: "movie-detail-page" */)
);

const MoviesPage = lazy(() =>
  import('./views/MoviesPage.jsx' /* webpackChunkName: "movies-page" */)
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h1>Loading...</h1>}>
    <Switch>
      <Route exact path={routes.home} component={HomePage} />
      <Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
      <Route path={routes.movies} component={MoviesPage} />
      <Route component={NotFoundPage} />
    </Switch>
    </Suspense>
  </>
);

export default App;