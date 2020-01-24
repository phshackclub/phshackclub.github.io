import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Calendar from './components/Calendar';
import ErrorPage from './components/ErrorPage';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/project" exact component={Project} />
      <Route path="/calendar" exact component={Calendar} />
      <Route path="/error" exact component={ErrorPage} />
    </Router>
  )
}

export default App;
