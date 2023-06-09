import React from 'react';
import  "../styles/HomePage.css";

const HomePage: React.FC = () => {
  const handleButtonClick = () => {
    // Handle button click logic here
    // Redirect to another page
    window.location.href = 'http://localhost:3000/';
  };

  return (
    <div className="background">
      <div className="content">
      
        <button className="button" onClick={handleButtonClick}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomePage;
