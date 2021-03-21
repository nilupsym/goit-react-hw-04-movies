import React, { Component } from 'react';
import Axios from 'axios';

class Cast extends Component {
    state = {
        actors: [],
    };

    async componentDidMount() {
        const {movieId} = this.props.match.params;
        const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=6ac85d37fc5933a9e58505b5650ac08b&language=en-US`);
        console.log(response.data);
        this.setState({ actors: response.data.cast });
    }

    render() {
        const { actors } = this.state;
        return <ul>
            {actors.map(
                actor => (
                    <li key={actor.id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                            alt={actor.name} />
                        <p>{actor.name}</p>
                        <p>Character: {actor.character}</p>
                    </li>
                )
            )}
        </ul>
    }
}

export default Cast;