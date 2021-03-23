import { Component } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import MoviesList from '../components/MoviesList/MoviesList';
import Api from '../services/Api';

class MoviesPage extends Component {
    state = {
        query: '',
        movies: [],
        error: null,
    };
    
    async componentDidUpdate(prevProps, prevState) {
        if (prevState.query !== this.state.query) {
            const query = this.state.query;
            const { location, history } = this.props;
            await Api
                .fetchMovieByQuery(query)
                .then(results => this.setState({ movies: results }))
                .catch(error => this.setState({ error }));
            
            history.push({
                pathname: location.pathname,
                search: `query=${query}`,
            });
        }
    }

    onChangeQuery = query => {
        this.setState({ query, });
    }

    render() {
        const { movies } = this.state;

        return (
            <>
                <SearchBar onSubmit={this.onChangeQuery} />
                
                {movies.length > 0 && <MoviesList movies={movies} />}
            </>
        )
    }
}

export default MoviesPage;