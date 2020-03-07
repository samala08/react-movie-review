import React, { Component } from 'react';
import AppNav from './AppNav'


class MovieList extends Component {
    state = {  
        isLoading : true,
        Movies : []
    }

    async componentDidMount(){
        const response= await fetch("/movie/movies")
        const body=await response.json();
        this.setState({Movies :body , isLoading:false});
    }
    render() { 

        const { Movies , isLoading} = this.state

        if (isLoading)
        return(<div>   <AppNav />Loading....</div>)

        else
        return ( 
            <div>   <AppNav />
                <h2> Movies List </h2>
                {
                    Movies.map(mv =>
                    <div>
                        {mv.title}
                    </div>    
                    )
                }
            </div>

         );
    }
}
 
export default MovieList;
