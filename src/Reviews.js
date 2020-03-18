import React, { Component } from 'react';
import { Table,Spinner } from 'reactstrap';
import MovieReviewService from './api/MovieReviewService.js'

import AppNav from './AppNav'
import { Container, Button } from 'reactstrap';



class Reviews extends Component {
  
  constructor(props){
        super(props)
        this.state ={ 
            isLoading : true ,
            Movies : [],
            ReviewList : [],
            mtitle : ''
        }

   this.handleChange = this.handleChange.bind(this)
   this.handleSubmit = this.handleSubmit.bind(this)

   this.handleSuccessResponse = this.handleSuccessResponse.bind(this)
     

}

    async componentDidMount(){
        const response= await fetch("http://reviewrestapi.us-west-2.elasticbeanstalk.com/movie/movies")
        const body=await response.json();
        this.setState({Movies :body , isLoading:false});
    }

     handleChange(event){
        this.setState({mtitle : event.target.value})
      // alert(this.state.mtitle);
    }
    handleSubmit(){
       // alert(this.state.mtitle);

        if( this.state.mtitle =='')
             alert("<b>Please select a valid Movie Title</b>");

        MovieReviewService.executeReviewList(this.state.mtitle)
        .then(response => this.handleSuccessResponse(response))
    }

  
        handleSuccessResponse(response){
           const body= response.data;
            this.setState({ReviewList : body});
    }

    render() {
        var divStyle = {
           marginBottom:'25px',
           marginRight:'20px'
           
          };
          
        
        const {isLoading , ReviewList, Movies} = this.state

        if (isLoading)
            return(<div>   <AppNav /> <Spinner color="info" /></div>)

           let optionList = 
              Movies.map(mv =>
              <option name="mtitle" value={mv.title} >
                    {mv.title}
                </option>    
               )
            
        return (  
        <div>
            <AppNav/>
        
            <Container>
                <h2> Get Reviews</h2>
                
                <label><span style={divStyle} ><b>Movie Title: </b></span></label>
                    <select onChange={this.handleChange}>
                    <option name="label" value='' >Select a movie title </option>
                        {optionList}
                    </select>
                    <div>
                    <Button style={divStyle} color="success" onClick={this.handleSubmit}> Click here</Button> 
                    </div>
            </Container>
            
           
            <Container>
                <div>

                    <Table>
                    <thead>
                    <tr>

                    <th>Comment</th>
                    <th>Rating</th>
                    </tr>
                    </thead>
                    <tbody>
                        { ReviewList.map(rw =>
                            <tr>
                                <td>{rw.comment}</td>
                                <td>{rw.rating}</td>
                            </tr>                      
                            )
                        }
                   </tbody>
                    </Table>




                </div>
            </Container>    
        </div>);
    }
}
 
export default Reviews;