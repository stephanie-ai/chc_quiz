import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import { resetGame } from '../../Actions';
import Player from '../../Components/Player';
import { mSTP } from '../Game';
import './style.css';

class Results extends Component {
    
    componentWillUnmount() {
        this.props.resetGame();
    };

    displayWinner () {
        let finalWinner = this.props.winner[0];
        this.props.winner.forEach( player => {
            if (player.score > finalWinner.score) {
                finalWinner = player
            };
        });
        return <h1>{finalWinner.name} is the winner!</h1>;
    };

    render () {
        return(
            <div>
                <div id="resultsPage">
                  <Player playerStats={this.props.winner}/>  
                <div>
                    {this.displayWinner()}
                    <br></br>
                    <br></br>
                <Link id="playAgain" to='/'> Play Again! </Link>
                </div>
                </div>
            </div>
        );
    };
};

export default connect(mSTP, {resetGame, Player}) (Results);