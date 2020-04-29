import React from "react";
import {Link} from "react-router-dom"

// normal function there is a difference between class and a normal function
function Header() {
    return <header style={headerStyle}>
        <h1>Todo List</h1>
        <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About us</Link>
    </header>
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'

}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header