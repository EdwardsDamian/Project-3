import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <div className="nav">
            <div className="nav-item"><span className="nav-logo">SweetGirl SugarScrubs</span></div>
            <div className="nav-item"><Link to="/home">Home</Link></div>
            <div className="nav-item"><Link to="/shop">Shop</Link></div>
            <div className="nav-item"><Link to="/about">About</Link></div>
            </div>
        )
    }
}
export default Navigation