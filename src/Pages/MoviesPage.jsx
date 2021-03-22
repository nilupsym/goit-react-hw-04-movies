import { Component } from 'react';
// import Axios from 'axios';
import SearchBar from '../components/SearchBar/SearchBar';
import MoviesList from '../components/MoviesList/MoviesList';
import Api from '../services/Api';

class MoviesPage extends Component {
    state = {
        query: '',
        movies: []
    };

    onChangeQuery = query => {
        this.setState(
            {
                movies: [],
                currentPage: 1,
                query: query,
                error: null
            }
        );
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevState.query !== this.state.query) {
            const query = this.state.query;
            await Api
                .fetchMovieByQuery(query)
                .then(results => this.setState({ movies: results }))
                .catch(error => this.setState({ error }));
        }
    }

    render() {
        const { movies } = this.state;

        return (
            <>
                <SearchBar onSubmit={this.onChangeQuery} />
                
                {movies.length > 0 && <MoviesList movies={movies} location={this.props.location} />}
            </>
        )
    }
}

export default MoviesPage;