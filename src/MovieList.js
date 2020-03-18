import React, { Component } from 'react';
import { Table,Spinner } from 'reactstrap';
import AppNav from './AppNav'
class MovieList extends Component {
    state = {  
        isLoading : true,
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
        return(<div>   <AppNav /> <Spinner color="info" /></div>)

        else
        return ( 
            <div> 
                <AppNav />
                    <Table bordered striped variant="dark">
                        <thead>
                            <tr>
                            <th>Movies</th>
                            <th>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            Movies.map(mv =>
                                <tr>
                                <td>{mv.title}</td>  <td>{mv.category}</td>
                                </tr>    
                            )
                        }
                        
                        </tbody>
                    </Table>
               
            </div>

         );
    }
}
 
export default MovieList;
