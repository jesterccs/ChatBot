import React from 'react';
import ChatBot from './pages/Chatbot'
import {Route, Routes} from "react-router-dom";
import Chatbot from "./pages/Chatbot";
import NavBar from "./NavBar";
import History from "./pages/History";
import Account from "./pages/Account";


function App() {
  return (
      <>
      <NavBar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Chatbot/>}/>
            <Route path="/history" element={<History/>}/>
            <Route path="/account" element={<Account/>}/>
          </Routes>
        </div>
      </>
  );
}

export default App;
