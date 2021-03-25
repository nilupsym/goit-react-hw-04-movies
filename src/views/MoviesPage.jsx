import { Component } from 'react';
import queryString from 'query-string';
import SearchBar from '../components/SearchBar/SearchBar';
import MoviesList from '../components/MoviesList/MoviesList';
import Api from '../services/Api';

class MoviesPage extends Component {
    state = {
        query: '',
        movies: [],
        error: null,
    };

    componentDidMount() {
        const query = this.getQueryFromProps(this.props);
        if (query) {
            Api
                .fetchMovieByQuery(query)
                .then(results => this.setState({ movies: results }))
                .catch(error => this.setState({ error }));
        }

    }

    componentDidUpdate(prevProps) {
        const prevQuery = this.getQueryFromProps(prevProps);
        const nextQuery = this.getQueryFromProps(this.props);
        if (prevQuery !== nextQuery) {
            Api
                .fetchMovieByQuery(nextQuery)
                .then(results => this.setState({ movies: results }))
                .catch(error => this.setState({ error }));
        }
    }

    getQueryFromProps = props => queryString.parse(props.location.search).query;

    onChangeQuery = query => {
        const { location, history } = this.props;
        this.setState({ query, });
        history.push({
                pathname: location.pathname,
                search: `query=${query}`,
            });
    }

    render() {
        const { movies } = this.state;

        return (
            <>
                <SearchBar onSubmit={this.onChangeQuery} />

                {movies && <MoviesList movies={movies} />}
            </>
        )
    }
}

export default MoviesPage;