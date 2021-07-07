import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Home extends Component {

    render() {
        return (
            <div id="homePage">
                <Link to='/options' className="startBtn"> START </Link> 
            </div>
        );
    };
};

export default Home;