import React from 'react';
import ChatBot from './pages/Chatbot'
import {Route, Routes} from "react-router-dom";
import Chatbot from "./pages/Chatbot";
import NavBar from "./Components/NavBar";
import History from "./pages/History";
import Account from "./pages/Account";
import HomePage from './pages/HomePage';
import './styles/App.css'


function App() {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<HomePage/>}
                />
                <Route
                    path="/chatbot/history"
                    element={
                        <>
                            <NavBar/>
                            <div className="container">
                                <History/>
                            </div>
                        </>
                    }
                />
                <Route
                    path="/chatbot/account"
                    element={
                        <>
                            <NavBar/>
                            <div className="container">
                                <Account/>
                            </div>
                        </>
                    }
                />
                <Route path="/chatbot/chat" element={
                    <>
                        <NavBar/>
                        <div className="container">
                            <Chatbot/>
                        </div>
                    </>
                }/>
            </Routes>
        </>
    );
}

export default App;
