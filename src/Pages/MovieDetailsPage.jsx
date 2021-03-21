import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Axios from 'axios';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';

class MoviesDetailsPage extends Component {
    state = {
        title: null,
        release_date: null,
        vote_average: null,
        poster_path: null,
        overview: null,
        genres: [],
    };

    async componentDidMount() {
        const {movieId} = this.props.match.params;
        const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=6ac85d37fc5933a9e58505b5650ac08b&language=en-US`);
        // console.log(response.data);
        this.setState({ ...response.data });
    }

    render() {
        const { title, overview, genres, poster_path, vote_average, release_date } = this.state;

        const { url, path } = this.props.match;

        return <>
            <button>Go back</button>
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
        </>
    }

}

export default MoviesDetailsPage;