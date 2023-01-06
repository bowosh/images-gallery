import React from 'react';
import Button from 'react-bootstrap/Button';
const Welcome = () => {
  return (
    <div
      style={{
        backgroundColor: 'lightgrey',
        padding: '1rem',
        marginTop: '1rem',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        <h1 style={{ textAlign: 'left' }}>Hello, world!</h1>
        <p style={{ textAlign: 'left' }}>Example Webapplication using: ...</p>
      </div>
      <p>
        <Button bsstyle="primary">Learn more</Button>
      </p>
    </div>
  );
};
export default Welcome;
