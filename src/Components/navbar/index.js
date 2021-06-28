import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const NavBar = () => {
    return (
        <nav className="navBar">
             <NavLink  exact to="/" className="nav" activeClassName="current"> Home</NavLink>
        </nav>
    );
}


export default NavBar;