import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Life from './pages/Life';
import Work from './pages/Work';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/life" component={ Life } />
          <Route exact path="/work" component={ Work } />
          <Route exact path="/blog" component={ Blog } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
