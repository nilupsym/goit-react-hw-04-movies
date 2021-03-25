import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import s from './MovieDetailsPage.module.css';
import routes from '../../routes';
import Api from '../../services/Api';

class MoviesDetailsPage extends Component {
    state = {
        title: null,
        release_date: null,
        vote_average: null,
        poster_path: null,
        overview: null,
        genres: [],
        error: null,
        cameFrom: null,
    };

    componentDidMount() {
        const {movieId} = this.props.match.params;
        Api
            .fetchMovieDetails(movieId)
            .then(data => this.setState({ ...data }))
            .catch(error => this.setState({ error }));
        
        this.setState({ cameFrom: this.props.location.state });

    }

    handleGoBack = () => {
        const { history } = this.props;
        const { cameFrom } = this.state;
        // history.push(cameFrom?.from || routes.movies);
        cameFrom ? (history.push(cameFrom.from)) : (history.push(routes.home));

    };

    render() {
        const { title, overview, genres, poster_path, vote_average, release_date } = this.state;

        const { url, path } = this.props.match;

        return <div className={s.Container}>
            <button type="button" className={s.Button} onClick={this.handleGoBack}>Go back</button>
            <h1>{title} ({`${release_date}`.substr(0, 4)})</h1>
            <p>User Score: {vote_average * 10} %</p>
            {poster_path && <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
            />}
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>
                {genres.map(genre => (<li key={genre.id}>{genre.name}</li>))}
            </ul>
            <p>Additional information</p>
            <ul>
                <li><NavLink to={`${url}/cast`}>Cast</NavLink></li>
                <li><NavLink to={`${url}/reviews`}>Reviews</NavLink></li>
            </ul>
            <Route path={`${path}/cast`} component={Cast} />
            <Route path={`${path}/reviews`} component={Reviews} />
        </div>
    }

}

export default MoviesDetailsPage;