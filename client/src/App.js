import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Wishlist from './pages/Wishlist';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions'
import Nav from './components/Navbar'

class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser())
  }

  render() {
    return (
      <Provider store={store} >
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/homepage' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/wishlist' component={Wishlist} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
};

export default App;
