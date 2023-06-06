import React from 'react';
import ChatBot from './pages/Chatbot'
import {Route, Routes} from "react-router-dom";
import Chatbot from "./pages/Chatbot";
import NavBar from "./NavBar";
import History from "./pages/History";
import Account from "./pages/Account";
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/Loginpage';


function App() {

  return (
      <>
      <NavBar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/chat" element={<ChatBot/>}/>
            <Route path="/history" element={<History/>}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="/loginpage" element={<LoginPage/>}/>
          </Routes>
          
        </div>
      </>
  );
}

export default App;
