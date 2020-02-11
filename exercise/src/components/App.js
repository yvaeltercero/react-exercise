import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

import Landing from '../routes/Landing';
import Home from '../routes/Home';
import Users from '../routes/Users';
import User from '../routes/User';

export default () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    return await axios.get('http://localhost:3001/users');
  };
  useEffect(() => {
    getUsers()
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route exact path='/' component={Landing} />
        <Route
          path='/home'
          render={props => (
            <Home {...props} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          )}
        />
        <Route
          path="/users"
          render={props => <Users {...props} users={users} />}
        />
        <Route
          path="/user/:userId"
          render={props => <User {...props} users={users} />}
        />
      </React.Fragment>
    </BrowserRouter>
  );
  
};

