import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const GoogleOAuth = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (credentialResponse: any) => {
    console.log(credentialResponse);
    // Redirect to another page
    navigate('/chat');
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };

  return (
    <GoogleLogin
      onSuccess={handleLoginSuccess}
      onError={handleLoginError}
    />
  );
};

export default GoogleOAuth;