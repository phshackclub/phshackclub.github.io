import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Calendar from './components/Calendar';

const App = () => {
  return (
    <HashRouter>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/project" exact component={Project} />
      <Route path="/calendar" exact component={Calendar} />
    </HashRouter>
  )
}

export default App;
