import React from 'react';
import ChatBot from './pages/Chatbot'
import {Route, Routes} from "react-router-dom";
import Chatbot from "./pages/Chatbot";
import NavBar from "./Components/NavBar";
import History from "./pages/History";
import Account from "./pages/Account";
import HomePage from './pages/HomePage';


function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <div className="container">
                <Chatbot />
              </div>
            </>
          }
        />
        <Route
          path="/home/history"
          element={
            <>
              <NavBar />
              <div className="container">
                <History />
              </div>
            </>
          }
        />
        <Route
          path="/account"
          element={
            <>
              <NavBar />
              <div className="container">
                <Account />
              </div>
            </>
          }
        />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
