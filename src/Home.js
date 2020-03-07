import React, { Component } from 'react';
import { Badge } from 'reactstrap';
import AppNav from './AppNav'

class Home extends Component {
    state = {  }
    render() { 
        return ( <div>
            <AppNav />
            <h1 className="display-3">Welcome to Cinema Sameksha</h1>
        </div> );
    }
}
 
export default Home;