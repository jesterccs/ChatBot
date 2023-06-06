import React from 'react';

import  "../styles/Landingpage.css";

import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  function navigatetoLogin() {
    navigate('/loginpage');
  }

  return (
    <div className="container">
      <h1 className="title">Welcome to Landing Page</h1>
      <p className="subtitle">
        This is some sample text for the landing page.
      </p>
      <button onClick={navigatetoLogin}>Login</button>
    </div>
  );
}

export default LandingPage;