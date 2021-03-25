import React, { Component } from 'react';
import s from './Reviews.module.css';
import Api from '../../services/Api';

class Reviews extends Component {
    state = {
        reviews: [],
        error: null,

    };

    componentDidMount() {
        const {movieId} = this.props.match.params;
        Api
            .fetchMovieReviews(movieId)
            .then(data => this.setState({ reviews: data.results }))
            .catch(error => this.setState({ error }));
    }

    render() {
        const { reviews } = this.state;
        return (
            <>
                {!reviews || reviews.length === 0 && <p>Sorry, there are no reviews yet...</p>}
                {reviews && <ul className={s.Container}>
            {reviews.map(
                review => (
                    <li key={review.id}>
                        <h4>Author: {review.author}</h4>
                        <p>{review.content}</p>
                    </li>
                )
            )}
        </ul>}
            </>)
    }
}

export default Reviews;