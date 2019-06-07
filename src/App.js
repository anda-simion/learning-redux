import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Age from './components/Age';
import Home from './components/Home';
import Error from './components/Error';
import ToDo from './components/ToDo';
import Sum from './components/Sum';
import Users from './components/Users';
import Navigation from './components/Navigation';
import { connect } from 'react-redux';
import { getUsers} from './redux/actions/actions';

class App extends React.Component {

  componentDidMount() {
    this.props.getUsers()
  }

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
              <Route path="/users" component={Users} />
              <Route component={Error} />
            </Switch>
          </>
        </BrowserRouter>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => (
  {
      getUsers: () => dispatch(getUsers())
  }
)
export default connect(null, mapDispatchToProps)(App);
