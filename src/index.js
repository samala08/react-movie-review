import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MovieList from './MovieList';
import Home from './Home';

import 'bootstrap/dist/css/bootstrap.css'

import * as serviceWorker from './serviceWorker';
exports.handler = function(event, context, callback) {

    callback(null, {
        statusCode: '200',
        body: "Hello world",
        headers: {
            // This is ALSO required for CORS to work. When browsers issue cross origin requests, they make a 
            // preflight request (HTTP Options) which is responded automatically based on SAM configuration. 
            // But the actual HTTP request (GET/POST etc) also needs to contain the AllowOrigin header. 
            // 
            // NOTE: This value is *not* double quoted: ie. "'www.example.com'" is wrong
            "Access-Control-Allow-Origin": "http://reviewrestapi.us-west-2.elasticbeanstalk.com"
        }
    });

}

ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
