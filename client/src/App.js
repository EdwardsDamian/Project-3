import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation.js'
import HomePage from './components/HomePage.js'
import AdminView from './components/AdminView.js';



// import AdminView from './components/AdminView.js/index.js'
class App extends Component {


  render() {
    return (
      <Router>
        <Navigation />
        <div>
          <Switch>
            <Route exact path="/home" component={HomePage} />

            <Route exact path ="/orders" component={AdminView} />

          </Switch>
        </div>
      </Router>
    )
  }
}
  

export default App;
