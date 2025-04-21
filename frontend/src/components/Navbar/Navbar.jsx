import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import PropTypes from 'prop-types';

const Navbar = ({ setShowLogin, showMenu, showSignInButton }) => {
    const { user, logout } = useAuth();

    function handleSignOut() {
        logout();
        setShowLogin(false);
    }

    return (
        <div className='navbar'>
            <h1>LR CUBE.</h1>
            {showMenu && (
                <ul className="navbar-menu">
                    <Link to='/' className={window.location.pathname === '/' ? "active" : ""}>Home</Link>
                    <a href='#explore-menu'>Menu</a>
                    <a href='#app-download'>Mobile App</a>
                    <a href='#footer'>Contact Us</a>
                </ul>
            )}
            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="Basket" />
                    <div className="dot"></div>
                </div>
                {user ? (
                    <div className="user-info">
                        <span>Welcome, {user.firstName}</span>
                        <button onClick={handleSignOut}>Sign Out</button>
                    </div>
                ) : (
                    showSignInButton && (
                        <button onClick={() => setShowLogin(true)}>Sign In</button>
                    )
                )}
            </div>
        </div>
    );
};

Navbar.propTypes = {
    setShowLogin: PropTypes.func.isRequired,
    showMenu: PropTypes.bool.isRequired,
    showSignInButton: PropTypes.bool.isRequired,
};

export default Navbar;