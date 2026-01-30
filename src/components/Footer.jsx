import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="logo-icon">⚡</span>
                            <span className="logo-text">Status.so</span>
                        </div>
                        <p className="footer-tagline">
                            Keep your clients in the loop without the endless status updates.
                        </p>
                        <div className="footer-social">
                            <a href="#" aria-label="Twitter">𝕏</a>
                            <a href="#" aria-label="LinkedIn">in</a>
                            <a href="#" aria-label="GitHub">⚡</a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Product</h4>
                            <ul>
                                <li><a href="#features">Features</a></li>
                                <li><a href="#pricing">Pricing</a></li>
                                <li><a href="#how-it-works">How It Works</a></li>
                                <li><a href="#">Integrations</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Resources</h4>
                            <ul>
                                <li><a href="#">Documentation</a></li>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">API Reference</a></li>
                                <li><a href="#">Community</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Legal</h4>
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Cookie Policy</a></li>
                                <li><a href="#">GDPR</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Status.so. All rights reserved.</p>
                    <p>Made with ❤️ for freelancers and agencies worldwide.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
