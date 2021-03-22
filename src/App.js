import React, {Suspense, lazy} from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import NotFoundPage from './pages/NotFoundPage';
import routes from './routes';

const HomePage = lazy(() =>
  import('./pages/HomePage.jsx' /* webpackChunkName: "home-page" */)
);

const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage.jsx' /* webpackChunkName: "movie-detail-page" */)
);

const MoviesPage = lazy(() =>
  import('./pages/MoviesPage.jsx' /* webpackChunkName: "movies-page" */)
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