import React from 'react';
// import NavBar from '../../components/navbar';
import logo from '../../../public/images/white_logo.png';
import './style.css';

class Header extends React.Component {
    render(){
        return (
            <div className="header">
                <img id="logoImg" src={logo}/>
                {/* <h1 className="chcTitle"> C Hoare & Co Quiz </h1> */}
                {/* <NavBar /> */}
                <div id="headerQuiz">
                  <h1>Quiz</h1>  
                </div>
                
            </div>
        );
    }
}

export default Header;