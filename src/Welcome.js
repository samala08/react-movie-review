import React, {Component} from 'react';
import {Container, Toast,ToastHeader,ToastBody } from 'reactstrap';
import AppNav from './components/AppNavLoggedIn'

class Welcome extends Component {
    state = {  }
    render() { 
        return ( 
            
            <div>
                <AppNav />
                <Container>
                    <div className="p-3 bg-success my-2 rounded">
                        <Toast>
                        <ToastHeader>
                           Welcome {this.props.match.params.name}, your logged in !
                        </ToastHeader>
                        <ToastBody>
                            Use the above navigation links to browse through the site.
                        </ToastBody>
                        </Toast>
                    </div>
                </Container>
            </div>);
    }
}
 
export default Welcome;