import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
    </HashRouter>
  )
}

export default App;
