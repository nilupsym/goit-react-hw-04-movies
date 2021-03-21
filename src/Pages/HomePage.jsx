import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class HomePage extends Component {
    state = {
        movies: [],
    };
    
    async componentDidMount() {
        const response = await Axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=6ac85d37fc5933a9e58505b5650ac08b');
        this.setState({ movies: response.data.results });
        // console.log(response.data.results);
    }

    render() {
        // console.log('matchURL:', this.props.match.url);
        const { movies } = this.state;
        return (
            <>
                <ul>
                    {movies.map(
                        movie => (
                            <li key={movie.id}>
                                <Link to={`/movies${this.props.match.url}${movie.id}`}>
                                    {movie.title} {movie.name}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </>
        );

    }
}
export default HomePage;