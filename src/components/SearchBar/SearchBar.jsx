import { Component } from 'react';
import s from './SearchBar.module.css';

class SearchBar extends Component {
    state = {
        query: '',
    };

    handleChange = e => {
        this.setState({ query: e.currentTarget.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className={s.SearchForm}>
                
                <input
                    onChange={this.handleChange}
                    className={s.SearchFormInput}
                    type="text"
                    value={this.state.query}
                    placeholder="Search movies" />
                
                <button type="submit" className={s.SearchFormButton} />

            </form>
        )
    }
}
export default SearchBar;