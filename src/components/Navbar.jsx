import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    <div className="navbar-logo">
                        <span className="logo-icon">⚡</span>
                        <span className="logo-text">Trace</span>
                    </div>

                    <div className="navbar-links">
                        <a href="#features">Features</a>
                        <a href="#how-it-works">How It Works</a>
                        <a href="#pricing">Pricing</a>
                    </div>

                    <div className="navbar-actions">
                        <a href="https://statusso-frontend.vercel.app/login" className="btn btn-secondary">Login</a>
                        <a href="https://statusso-frontend.vercel.app/signup?plan=free" className="btn btn-primary">Start Free Trial</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
