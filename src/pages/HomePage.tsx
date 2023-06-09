import React from 'react';
import  "../styles/HomePage.css";
import {useNavigate} from "react-router-dom"

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    // Handle button click logic here
    // Redirect to another page
    // window.location.href = 'http://localhost:3000/';
    navigate("/chatbot/chat")

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
