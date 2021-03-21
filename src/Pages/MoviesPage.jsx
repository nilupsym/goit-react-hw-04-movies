import { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar/SearchBar';

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
            const response = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6ac85d37fc5933a9e58505b5650ac08b&query=${query}`);
            // console.log(response.data);
            this.setState({ movies: response.data.results });
        }
    }

    render() {
        const { movies } = this.state;
        return (
            <>
                <SearchBar onSubmit={this.onChangeQuery}/>
                
                {movies.length > 0 &&
                    <ul>
                        {movies.map(movie => (
                            <li key={movie.id}>
                                <p>
                                    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                                </p>
                            </li>
                        ))}
                    </ul>
                }
            </>
        )
    }
}

export default MoviesPage;