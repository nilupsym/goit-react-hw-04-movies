import React, { Component } from 'react';
import Axios from 'axios';

class Reviews extends Component {
    state = {
        reviews: [],
    };

    async componentDidMount() {
        const {movieId} = this.props.match.params;
        const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=6ac85d37fc5933a9e58505b5650ac08b&language=en-US&page=1`);
        console.log(response.data);
        this.setState({ reviews: response.data.results });
    }

    render() {
        const { reviews } = this.state;
        return <ul>
            {reviews.map(
                review => (
                    <li key={review.id}>
                        <h4>{review.author}</h4>
                        <p>{review.content}</p>
                    </li>
                )
            )}
        </ul>
    }
}

export default Reviews;