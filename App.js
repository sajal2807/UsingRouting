import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Add from './Add';
import Search from './Search';

class App extends Component{
  render() {
    return(
      <Router>
        <div>
          <Header />
          <ol className="navbar-nav mr-auto">
            <li><Link to={'/home'} className="nav-link"> Home </Link></li>
            <li><Link to={'/search'} className="nav-link">Search</Link></li>
            <li><Link to={'/add'} className="nav-link">Add</Link></li>
          </ol>
              <Route exact path='/home'><Home /></Route>
              <Route path='/search' ><Search /></Route>
              <Route path='/add'><Add /></Route>
         
        </div>
      </Router>
    );

  }
}

export default App;
