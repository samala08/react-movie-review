import React, { Component } from 'react';


import AppNav from './AppNav'
import { Container, Form, FormGroup, Button } from 'reactstrap';

class Reviews1 extends Component {
    state = {  
        isLoading : true ,
        Movies : []
    }

    async componentDidMount(){
        const response= await fetch("http://reviewrestapi.us-west-2.elasticbeanstalk.com/movie/movies")
        const body=await response.json();
        this.setState({Movies :body , isLoading:false});
    }

    render() { 

        const { Movies , isLoading} = this.state

        if (isLoading)
            return(<div>   <AppNav />Loading....</div>)

           let optionList = 
                Movies.map(mv =>
                <option>
                    {mv.title}
                </option>    
                )
            
        return (  <div>
            <AppNav/>
           
            <Container>
            <h2> Get Reviews</h2>
            <Form>
                <FormGroup>
                    <label for="movietitle"><b>Movie title </b></label>
                   
                <select>
                {optionList}
                  
                </select>
                 </FormGroup>
                <FormGroup>
                    <Button color="primary" type="submit">Get Reviews</Button>
                </FormGroup>
            </Form>

            </Container>
        </div>);
    }
}
 
export default Reviews1;