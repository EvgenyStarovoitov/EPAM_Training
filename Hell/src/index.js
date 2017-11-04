import React from 'react';
import ReactDOM from 'react-dom';

import Button from './components/button/button.js';

console.log(document.querySelector('.container'));
// ReactDOM.render(<div>Wassup</div>, document.querySelector('.container'));
ReactDOM.render(<Button />, document.querySelector('.container'));
// ReactDOM.render(<div>Wassup</div>, document.querySelector('container'));
// ReactDOM.render(<div>Wassup</div>, document.getElementById('some'));
