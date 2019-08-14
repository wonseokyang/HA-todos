import React from 'react';
import { Route } from 'react-router-dom';
import { Main, Users, User, ToDos, Posts } from './pages';
import './App.css'

const App = () => (
  <>
    <Route exact path="/" component={Main} />
    <Route exact path="/users" component={Users} />
    <Route exact path="/users/:id" component={User} />
    <Route path="/users/:id/todos" component={ToDos} />
    <Route exact path="/posts" component={Posts} />
  </>
);

export default App;
