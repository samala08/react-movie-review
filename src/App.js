import React from 'react';
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom' 
import Home from './Home';
import MovieList from './MovieList'
import Reviews from './Reviews'
import WriteReviews from './WriteReviews'

import './App.css';



function App() {
  return (
    <div className="App">
    <Router>
     <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/movies" exact={true} component={MovieList}/>
          <Route path="/reviews" exact={true} component={Reviews}/>
          <Route path="/writereviews" exact={true} component={WriteReviews}/>
          <Route path="/reviewslist" exact={true} component={WriteReviews}/>
       </Switch>

    </Router>
    </div>
  );
}

export default App ;
