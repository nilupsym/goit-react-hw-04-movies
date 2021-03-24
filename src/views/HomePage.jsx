import React, { Component } from 'react';
import MoviesList from '../components/MoviesList/MoviesList';
import Api from '../services/Api';

class HomePage extends Component {
    state = {
        movies: [],
        error: null,
    };
    
    componentDidMount() {
        Api
            .fetchPopular()
            .then(results => this.setState({ movies: results }))
            .catch(error => this.setState({ error }));
    }

    render() {
        // console.log('matchURL:', this.props.match.url);
        const { movies } = this.state;
    
        return (
            <>
                {movies.length > 0 && <MoviesList movies={movies} location={this.props.location} />}
            </>
        );

    }
}
export default HomePage;