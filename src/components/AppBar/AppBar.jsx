import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './AppBar.module.css';

const AppBar = () => {
    return (
      <ul className={s.AppBar}>
      <li>
          <NavLink exact
            to={routes.home}
            className={s.navLink}
            activeClassName={s.active}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
            to={routes.movies}
            className={s.navLink}
            activeClassName={s.active}
        >
          Movies
        </NavLink>
      </li>
        </ul>
    )
};

export default AppBar;