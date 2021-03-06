import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getUser, logout } from './services/users';
import Auth from './views/Auth';
import Todo from './views/Todo';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentUser && (
              <div className="todo-portal">
                <Todo />
                <button className="logout-button button" onClick={logoutUser}>
                  Log Out
                </button>
              </div>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
