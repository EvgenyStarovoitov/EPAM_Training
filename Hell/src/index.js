import React from 'react';
import ReactDOM from 'react-dom';
import Info from './scenes/information/info.js';
import Header from './scenes/header/header.js';

import styles from './index.css';

let all = () => {
    return (
        <div className="app">
            <Header />
            <Info />
        </div>
    )
}

console.log(document.querySelector('.container'));
ReactDOM.render(all(), document.querySelector('.container'));
