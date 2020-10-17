import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css';
import logo from './logo.svg';
import useRocket from '../hooks/useRocket';

const Header = (props) => {
    const { data } = useRocket();

    return (
        <header className="header">
            <Link to='/'>
                <img
                    src={logo}
                    alt="Logo Space X"
                    className="logo"
                />
            </Link>
            <nav className="main-nav nav">
            <ul className="list">
                {data.map((rocket, i) => (
                    <li key={i} className="item">
                        <Link 
                            to={`/rocket/${rocket.name.replace(/ /g, "_")}`} 
                            className="item-link"
                        >{rocket.name}</Link>
                    </li>                   
                ))}
            </ul>
            </nav>
            <nav className="secondary-nav">
                <ul className="list">
                    <li className="item">
                        <NavLink 
                            exact
                            to="/" 
                            className="item-link"
                        >Home</NavLink>
                    </li>
                    <li className="item">
                        <NavLink 
                            to="/calendar" 
                            className="item-link"
                            activeClassName="active"
                            >Calendar</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;