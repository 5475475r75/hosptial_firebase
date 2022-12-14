import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext, theme_context } from '../../Context/ThemeContext';

function Header(props) {
    const value = useContext(ThemeContext);

    console.log(value);
    return (
        <div className="main-header">
            <div id="topbar" className={`d-flex align-items-center fixed-top ${value.theme}`}>
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                        <i className="bi bi-phone" /> +91 9988776655
                    </div>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                    </div>
                    <button onClick={() => value.Toogle_Change(value.theme)}>Change-Theme</button>
                </div>
            </div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <div className="logo">
                        <a href="index.html">
                            <h1 className="logo me-auto">City</h1><br/>
                            <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                        </a>
                    </div>

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><NavLink className="nav-link scrollto active" to="Home">Home</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to="/Department">Departments</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to="/Doctor">Doctors</NavLink></li>
                            <li>
                                <NavLink className="nav-link scrollto" to={"/Medician"}>Medician</NavLink>
                            </li>
                            <li><NavLink className="nav-link scrollto " to="/About">About</NavLink></li>
                            <li><NavLink className="nav-link scrollto " to="/Contact">Contact</NavLink></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    <NavLink href="./pages/appointment.html" className="appointment-btn scrollto" to={"/Appointment"}><span className="d-none d-md-inline">Make an</span>
                        Appointment</NavLink>
                    <NavLink href="#" className="appointment-btn scrollto" to={"/Auth"}>
                        <span className="d-none d-md-inline">Login/ Signup</span>
                    </NavLink>
                    
                </div>
            </header>
        </div>

    );
}

export default Header;