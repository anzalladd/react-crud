import React from 'react';
import './App.css';
import Home from './views/Home'
import Detail from './views/Detail'
import NotFound from './views/Not-found'
import CreateEmployee from './views/Create-employee'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return(
      <Router>
          <Container>
            <Switch>
              <Route path="/" exact component={ Home }/>
              <Route path="/employee/:id" component={ Detail }/>
              <Route path="/create" component={ CreateEmployee }/>
              <Route component={ NotFound }/>
            </Switch>
          </Container>
      </Router>
    )
  }
}

export default App;
