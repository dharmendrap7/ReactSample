import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

<<<<<<< HEAD
ReactDOM.render(<App />, document.getElementById('root'));
=======
ReactDOM.render(<div><App>Button is here</App></div>, document.getElementById('root'));
>>>>>>> c88c3ebf10f7d3f07b9d7b7c154f515f3d588ec7

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
