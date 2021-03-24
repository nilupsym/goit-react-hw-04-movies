import React, { Component } from 'react';
import s from './Cast.module.css';
import Api from '../../services/Api';

class Cast extends Component {
    state = {
        actors: [],
        error: null,
    };
    
    componentDidMount() {
        const { movieId } = this.props.match.params;
        Api
            .fetchMovieCast(movieId)
            .then(data => this.setState({ actors: data.cast }))
            .catch(error => this.setState({ error }));
    }

    render() {
        const { actors } = this.state;
        return <ul className={s.CastList}>
            {actors.map(
                actor => (
                    <li key={actor.id}>
                        {actor.profile_path && <img
                                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                            alt={actor.name} />}
                        <p>{actor.name}</p>
                        <p>Character: {actor.character}</p>
                    </li>
                )
            )}
        </ul>
    }
}

export default Cast;