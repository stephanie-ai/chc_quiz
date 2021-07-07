import React from 'react';
// import { NavLink } from 'react-router-dom';
import logo from '../../../public/images/white_logo.png';
import './style.css';

class Header extends React.Component {
    render(){
        return (
            <div className="header">
                <img id="logoImg" src={logo}/>
                <div id="headerQuiz">
                  <h1>Quiz</h1>  
                  {/* <NavLink  exact to="/" className="nav" activeClassName="current">Home</NavLink> */}
                </div>
                
            </div>
        );
    }
}

export default Header;