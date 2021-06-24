import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Home extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         showPopup: false
    //     };
    // };

    render() {
        return (
            <div id="homePage">
                <h1 className="chcTitle"> C Hoare & Co Quiz </h1>
                <Link to='/options' className="startBtn"> START </Link> 
            </div>
        );
    };
};

export default Home;