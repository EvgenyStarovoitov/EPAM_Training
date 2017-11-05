import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button/button.js';
import Info from './scenes/information/info.js';
import styles from './index.css';
import Interaction from './scenes/interaction/interaction.js';


let all = () => {
    return (
        <div className="app">
            <Interaction />
            <Info />
        </div>
    )
}


console.log(document.querySelector('.container'));
// ReactDOM.render(<Button />, document.querySelector('.container'));
ReactDOM.render(all(), document.querySelector('.container'));


