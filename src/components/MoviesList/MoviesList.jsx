import { Link, withRouter } from 'react-router-dom';
import routes from '../../routes';


const MoviesList = ({movies, location}) => {
    return (
        <ul>
            {movies.map(
                ({id, title, name}) => (
                    <li key={id}>
                        <Link to={{
                            pathname: `${routes.movies}/${id}}`,
                            state: { from: location }
                        }}>{ name }{ title }</Link>
                    </li>
                )
            )}
        </ul>

    );
}

export default withRouter(MoviesList);