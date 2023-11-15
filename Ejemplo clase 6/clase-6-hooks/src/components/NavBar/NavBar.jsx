import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <header className="container mt-3">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" > Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" > About </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/productos" className="nav-link" > Products </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </header>

    );
};

export default NavBar;
