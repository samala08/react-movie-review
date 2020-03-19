import React, { Component } from 'react';
import AppNav from './components/AppNavLoggedOut'
import { Card, CardHeader, CardBody,Input,Form,FormGroup,Row,Col,Button,CardTitle,Container, CardFooter} from 'reactstrap';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { userName:'', password:'' };

        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this)
    }


    handleChange(event)
    {
        console.log(event);
        this.setState( { [event.target.name] : event.target.value});
    }
    handleLogin(event){
       // alert(this.state.userName);
       // alert(this.state.password);

        this.props.history.push(`/welcome/${this.state.userName}`);


    }
    handleRegister(event){
        alert('Yet to implement Registration'+this.state.userName);
       // alert(this.state.password);


    }
    render() { 

           const { userName, password} = this.state
        return ( 

            <div>
                <AppNav />
                <Container>
                    <Card className={"border border-dark"} onSubmit={this.handleFormSubmit} >
                        <CardHeader><b>User Login </b></CardHeader>
                        <CardBody>
                            
                            <Row form>
                                <Col md={5}>
                                    <CardTitle><i>User Name</i></CardTitle>
                                    <Input type="text" name="userName" id="userNameId"  value={this.state.userName} onChange={this.handleChange} placeholder="Enter username" 
                                        required autoComplete="off"/>
                                </Col>
                                <Col md={5}>
                                    <CardTitle><i>Password</i></CardTitle>
                                    <Input type="password" name="password" id="passwordId" value={this.state.password} onChange={this.handleChange}  placeholder="Enter password" 
                                        required autoComplete="off"/>                                   
                                </Col>
                            </Row>
             
                        </CardBody>
                        <CardFooter>
                            <Button size="md" onClick={this.handleLogin} color="success"> Login </Button>{' '}  
                            <Button  size="md" onClick={this.handleRegister} color="secondary"> Register </Button>{' '}
                        </CardFooter>
                    </Card>

                </Container>

            </div>
          );
    }
}
 
export default Login;