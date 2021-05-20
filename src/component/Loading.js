import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
function Loading() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Spinner animation="border" role="status" variant="primary" />
    </div>
  );
}
export default Loading;
