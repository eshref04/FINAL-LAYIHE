import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Error.scss';

const Error = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="error-page">
      <div className="error-container">
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <button onClick={handleGoBack}>Return to home page</button>
      </div>
    </div>
  );
};

export default Error;
