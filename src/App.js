import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

const App = () => {
  return (
    <HashRouter>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/projects" exact component={About} />
      <Route path="/calender" exact component={About} />
    </HashRouter>
  )
}

export default App;
