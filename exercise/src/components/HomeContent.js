import React from 'react';
import Button from './Button';

export default ({ loggedIn, setLoggedIn }) => (
  <div>
    {loggedIn ? (
      <>
        <Button
          onClick={() => setLoggedIn(false)}
          style={{ backgroundColor: 'red', color: 'white' }}>
          Logout
        </Button>
      </>
    ) : (
      <Button onClick={() => setLoggedIn(true)}>Login</Button>
    )}
  </div>
);
