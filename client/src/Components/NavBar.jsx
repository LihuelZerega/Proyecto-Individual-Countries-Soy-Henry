import { Link } from 'react-router-dom';
import './NavBar.css'
import SearchBar from './SearchBar';

const NavBar = () => {
    return (
        <div className="navContainer">
            <div>
                <Link to='/'>
                <h3> Go Back </h3>
                </Link>
            </div>
            <div>
                <h3> Text </h3>
            </div>
            <div>
                <h3> Text </h3>
            </div>
            <div>
                <SearchBar/>
            </div>
        </div>
    )
}

export default NavBar;