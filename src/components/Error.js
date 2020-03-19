import React,{Component} from 'react';
import AppNav from './AppNavLoggedOut'
import { Toast,ToastHeader,ToastBody, Container } from 'reactstrap';


class Error extends Component {
    state = {  }
    render() { 
        return ( 

            <div>  
                <AppNav />
                <Container>
                    <div className="p-3 bg-danger my-2 rounded">
                    <Toast>
                        <ToastHeader>
                            OOPS, ERROR !
                        </ToastHeader>
                        <ToastBody>
                            ITS INVALID URL. CHECK IT OUT!
                        </ToastBody>
                        </Toast>
                    </div>
                </Container>
            </div>
         );
    }
}
 
export default Error;