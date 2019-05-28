import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Age from './components/Age';
import Home from './components/Home';
import Error from './components/Error';
import ToDo from './components/ToDo';
import Sum from './components/Sum';
import Navigation from './components/Navigation';

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <BrowserRouter>
          <>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/todo" component={ToDo} />
              <Route path="/age" component={Age} /> 
              <Route path="/sum" component={Sum} />
              <Route component={Error} />
            </Switch>
          </>
        </BrowserRouter>
      </div>
    )
  }
};


export default App;
