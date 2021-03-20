import React from 'react'
import './Header.css'
import Primelogo from './images/primelogo.png'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <Link to ="/"><a href ="#home"><img src={Primelogo} className="primeimg"alt="logo"/></a> </Link>
            <a href="#"> <i className="fa fa-globe g"></i></a>
            <div className="dropdown">
                <button className="dropbtn">EN
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="#">Bahasa Indonesia</a>
                    <a href="#">Dansk</a>
                    <a href="#">Deutsch</a>
                    <a href="#">English</a>
                    <a href="#">Espanol</a>
                    <a href="#">Francais</a>
                    <a href="#">Italiano</a>
                    <a href="#">Netherlands</a>
                    <hr className="l"/>
                    <div className="d1">
                        <a href="#">Norsk</a>
                        <a href="#">Polski</a>
                        <a href="#">Portuguese(Brazil)</a>
                        <a href="#">Sumoi</a>
                        <a href="#">Svenska</a>
                        <a href="#">Turkce</a>
                        <a href="#">Pyccknn</a>
                        <a href="#">हिंदी </a>
                    </div>
                    
                </div>
            </div>
            <a href="#" className="signin">Sign In</a>
            
        </div>
    )
}

export default Header
