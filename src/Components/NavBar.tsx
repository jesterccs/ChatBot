import React from "react";
import "../styles/navbar.css"
import {Link, useMatch, useResolvedPath} from "react-router-dom";

function NavBar() {
    return (
        <div className="chatbot-header">
            <div className="avatar-title">
                <div className="chatbot-avatar"></div>
                <div className="chatbot-title">TaskBuddy</div>
            </div>
            <div className="navbar">
                <Link to="/chatbot/chat">Chat</Link>
                <CustomLink to="/chatbot/history">History</CustomLink>
                <CustomLink to="/chatbot/account">Account</CustomLink>
            </div>
        </div>
    )
}

// @ts-ignore
function CustomLink({to, children, ...props}) {

    const resolvedPath = useResolvedPath(to)
    const isActive =useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : "nonActive"}>
        <Link to={to}>
            {children}
        </Link>
        </li>
    )
}

export default NavBar;