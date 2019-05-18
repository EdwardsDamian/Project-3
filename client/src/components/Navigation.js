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
            <div className="nav-itme"><Link to="/cart"><img src="data:image/png;base64,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" width="40" height="40" alt="cart" /></Link></div>
            
            </div>
            
            
        )
        
    }
}
export default Navigation
