import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './homepage';
import NavBar from './navbar';
import AboutUs from './about';
import Service from './service';
import ContactUs from './contact';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
