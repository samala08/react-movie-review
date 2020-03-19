import React from 'react';
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom' 
import Home from './Home';
import MovieList from './MovieList'
import Reviews from './Reviews'
import WriteReviews from './WriteReviews'
import Login from './Login'
import Welcome from './Welcome'
import Error from './components/Error.js'


import './App.css';



function App() {
  return (
    <div className="App">
    <Router>
     <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" exact={true} component={Login}/>
          <Route path="/welcome/:name" exact={true} component={Welcome}/>
          <Route path="/movies" exact={true} component={MovieList}/>
          <Route path="/reviews" exact={true} component={Reviews}/>
          <Route path="/writereviews" exact={true} component={WriteReviews}/>
          <Route component={Error}/>
      </Switch>

    </Router>
    </div>
  );
}

export default App ;
