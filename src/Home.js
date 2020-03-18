import React, { Component } from 'react';
import AppNav from './AppNav'
import Carousel from 'react-bootstrap/Carousel'

class Home extends Component {
    state = {  }

    render() { 

        var divStyle = { marginLeft: '30%'
            
            };
           

        return ( <div>
            <AppNav />
            <h2 >Welcome to Cinema Sameksha</h2>
            <div style={divStyle}>
            <Carousel  data-interval="100">
                <Carousel.Item>
                    <img
                    className="d-block"
                    src="moviesimages/frozen.png"
                    alt="First slide" width="50%"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src="moviesimages/avengers.png" width="50%"
                    alt="Third slide"
                    />
                     </Carousel.Item>
                     <Carousel.Item>
                    <img
                    className="d-block"
                    src="moviesimages/pikachu.png" width="50%"
                    alt="Third slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src="moviesimages/jurassicpark.png" width="50%"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            </div>


        </div> );
    }
}
 
export default Home;

