import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import TodoList from './components/TodoList';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const setAuthToken = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
  };

  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Register setToken={setAuthToken} />
        </Route>
        <Route path="/login">
          <Login setToken={setAuthToken} />
        </Route>
        <Route path="/todos">
          {token ? <TodoList token={token} /> : <Redirect to="/login" />}
        </Route>
        <Redirect from="/" to="/todos" />
      </Switch>
    </Router>
  );
};

export default App;
