import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const styles = {
  logo: {
    float: 'left',
    margin: 8
  }
};

export default ({ loggedIn, setLoggedIn }) => {
  return (
    <header
      style={{
        height: 48,
        width: '100%',
        backgroundColor: 'rgb(102,63,180)',
        color: 'white',
        padding: '6px 10px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}
    >
      <div style={styles.logo}>
        <Link to='/'>
          <img
            alt='logo'
            style={{ maxHeight: 40, flex: 1 }}
            src='favicon-196x196.png'
          />
        </Link>
      </div>
      <div>Modus Create</div>
      <div style={{ float: 'left', color: 'white', flex: 1 }} />
      <div style={{ display: 'flex', paddingRight: 20 }}>
        {loggedIn ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#a7a6a6',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'black'
              }}
            >
              MR
            </div>
            <Button
              onClick={() => setLoggedIn(false)}
              style={{
                backgroundColor: 'red',
                color: 'white',
                marginLeft: '10px'
              }}
            >
              Logout
            </Button>
          </div>
        ) : (
          <div>
            <Button onClick={() => setLoggedIn(true)}>Login</Button>
            <Button style={{ marginLeft: '10px' }}>Signup</Button>
          </div>
        )}
      </div>
    </header>
  );
};
