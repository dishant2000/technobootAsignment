import React from 'react'
import './index.css'
import {IoSearch} from 'react-icons/io5'
function Header() {
    return (
        <div className = "nav-wrapper">
            <div className = "container">
                <div className = "nav-list">
                    <a className = "nav-list-item active" href = "#home">Home</a>
                    <a className = "nav-list-item " href = "#property">About</a>
                    <a className = "nav-list-item " href = "#Agents">Course</a>
                    <a className = "nav-list-item " href = "#contact">Staff</a>
                    <a className = "nav-list-item " href = "#News">Blog</a>
                    <a className = "nav-list-item " href = "#Pages">Contact</a>
                </div>
                <div className = "nav-search">
                   <input type = "text" placeholder = "search" />
                   <IoSearch style = {{
                       color : "rgb(255, 20, 98)",
                       fontSize:"20px",
                       
                       
                   }}/>
                </div>
            </div>
        </div>
    )
}

export default Header
