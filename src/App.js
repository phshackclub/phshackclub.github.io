import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';

const App = () => {
  return (
    <HashRouter>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/project" exact component={Project} />
      <Route path="/calender" exact component={About} />
    </HashRouter>
  )
}

export default App;
