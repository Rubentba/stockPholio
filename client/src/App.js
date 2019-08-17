import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Footer from './components/Footer/Footer'
import './app.css'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/homepage" component={Home} />
          <Route exact path="/loginpage" component={Login} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
