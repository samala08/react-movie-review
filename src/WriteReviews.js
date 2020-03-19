import React, { Component } from 'react';
import {  Toast,ToastHeader,ToastBody,Card, CardBody,CardTitle, Container, Form, Row,FormGroup,Input,Button,Spinner, Col, CardHeader } from 'reactstrap';

import MovieReviewService from './api/MovieReviewService.js'
import ReviewToast from './components/ReviewToast.js'


import AppNav from './components/AppNavLoggedIn';

class WriteReviews extends Component {
   

    constructor(props){
        super(props)
        this.state ={  isLoading : true,
                        Movies : [],
                        mtitle:'', rating:'',userName:'', comment:'',
                        Users :[]
                     }
        this.state.show = false;
        this.state.showError = false;
        this.state.errorMessage =''

        this.submitCommit = this.submitCommit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSuccessResponse = this.handleSuccessResponse.bind(this)
        this.handleErrorResponse = this.handleErrorResponse.bind(this)
        }

    submitCommit(event){
       

       MovieReviewService.executeAddReview(this.state.mtitle,this.state.rating,
                                                this.state.userName,this.state.comment)
       .then(response => this.handleSuccessResponse(response))
       .catch(error => this.handleErrorResponse(error) )

       event.preventDefault();
       }

       handleChange(event){
        this.setState({[event.target.name] : event.target.value})
  }


    handleSuccessResponse(response){
        //alert('Review saved successfully for '+ this.state.mtitle +'. Thank You '+this.state.userName)
        this.setState({show:true})
        setTimeout(()=>this.setState({show:false}), 10000);
         this.setState({ mtitle : '',
                        rating: '',
                        userName: '',
                        comment:''});

                      
 }

 handleErrorResponse(error){
    //alert('Review saved successfully for '+ this.state.mtitle +'. Thank You '+this.state.userName)
    //alert('handleErrorResponse====>'+error.response.data.message);

    this.setState({ showError : true,
                    errorMessage : [error.response.data.message]
                  })
    setTimeout(()=>this.setState({showError:false}), 10000);
    this.setState({ mtitle : '',
                    rating: '',
                    userName: '',
                    comment:''});

                  
}

 
    async componentDidMount(){
        const response= await fetch("http://reviewrestapi.us-west-2.elasticbeanstalk.com/movie/movies")
        const moviebody=await response.json();

        const userresponse= await fetch("http://reviewrestapi.us-west-2.elasticbeanstalk.com/movie/userNames")
        const userbody=await userresponse.json();

        this.setState({Movies :moviebody , Users :userbody ,isLoading:false});
    }

    
   
    render() { 

        const {isLoading , Movies, mtitle, rating, comment, userName, Users} = this.state

        if (isLoading)
            return(<div>   <AppNav /> <Spinner color="info" /></div>)

           let optionList = 
              Movies.map(mv =>
              <option name="mtitle" value={mv.title} >
                    {mv.title}
                </option>    
               )

               let optionUserList = 
               Users.map(usr =>
               <option name="userName" value={usr.userName} >
                     {usr.username}
                 </option>    
                )
            
        return ( 
            
            <div>
            <AppNav/>
          
            <Container>
                    <div style={{"display" : this.state.show ? "block" : "none"}}>
                        <ReviewToast></ReviewToast>
                    </div>
                    <div style={{"display" : this.state.showError ? "block" : "none"}}>
                        <div className="p-3 bg-danger my-2 rounded">
                            <Toast>
                            <ToastHeader>
                            Error
                            </ToastHeader>
                            <ToastBody>
                                {this.state.errorMessage}
                            </ToastBody>
                            </Toast>
                        </div>
                    </div>
                
                    <Card className={"border border-dark "}>
                        <CardHeader><b>Write Reviews</b></CardHeader>
                        <CardBody>
                        <Form id="reviewsId" onSubmit={this.submitCommit}>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <CardTitle>Movie Title</CardTitle>
                                        <Input type="select" name="mtitle" id="mtitleId"  onChange={this.handleChange} required>
                                            
                                            <option name="mtitle" value={mtitle} >Select a movie title </option>
                                            {optionList}
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <CardTitle>Rating</CardTitle>
                                        <Input type="select" name="rating" id="ratingId"  onChange={this.handleChange} required>
                                            <option name="rating" value={rating} >Select a rating </option>
                                            <option value='1'  >1</option>
                                            <option value='2'  >2</option>
                                            <option value='3' >3</option>
                                            <option value='4' >4</option>
                                            <option value='5' >5</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <CardTitle>User Name</CardTitle>
                                            <Input type="text" name="userName" id="userNameId" value={userName} placeholder="Enter your comment" onChange={this.handleChange} required autoComplete="off"/>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <CardTitle>Comment</CardTitle>
                                        <Input type="text" name="comment" id="commentId" value={comment} placeholder="Enter your comment" onChange={this.handleChange} required autoComplete="off"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                        
                        <Button size="sm" color="success">Submit</Button>
                    </Form>

                    </CardBody>
                    </Card>

    
            </Container>
        </div>);
    }
}
 
export default WriteReviews;