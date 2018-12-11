import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AnotherPage from './newPage';
import App from './App';

const Routes=()=>{
  return   <main>
  <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/new' component={AnotherPage} />
  </Switch>
</main>
}

export default Routes;

