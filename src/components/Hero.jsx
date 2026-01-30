import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="hero" ref={heroRef}>
            <div className="hero-background">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="hero-badge">
                            <span className="badge-icon">✨</span>
                            <span>Trusted by 1000+ Freelancers & Agencies</span>
                        </div>

                        <h1 className="hero-title">
                            Stop Answering
                            <br />
                            <span className="text-gradient">"Where's My Project?"</span>
                        </h1>

                        <p className="hero-description">
                            Give your clients a custom link to track their project progress in real-time.
                            No more status emails. No more awkward calls. Just transparent, professional updates.
                        </p>

                        <div className="hero-actions">
                            <a href="https://statusso-frontend.vercel.app/signup?plan=free" className="btn btn-primary btn-large">
                                Start Free Trial
                                <span className="arrow">→</span>
                            </a>

                        </div>

                        <div className="hero-stats">
                            <div className="stat">
                                <div className="stat-value">98%</div>
                                <div className="stat-label">Client Satisfaction</div>
                            </div>
                            <div className="stat">
                                <div className="stat-value">5hrs</div>
                                <div className="stat-label">Saved Per Week</div>
                            </div>
                            <div className="stat">
                                <div className="stat-value">24/7</div>
                                <div className="stat-label">Client Access</div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="mockup-container">
                            <div className="mockup-window">
                                <div className="window-header">
                                    <div className="window-dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="window-title">trace.app/project/abc123</div>
                                </div>
                                <div className="window-content">
                                    <div className="project-header">
                                        <h3>Website Redesign</h3>
                                        <span className="status-badge in-progress">In Progress</span>
                                    </div>
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{ width: '65%' }}></div>
                                    </div>
                                    <div className="progress-text">65% Complete • Est. 5 days remaining</div>

                                    <div className="task-list">
                                        <div className="task done">
                                            <span className="task-icon">✓</span>
                                            <span className="task-name">Initial Design Mockups</span>
                                        </div>
                                        <div className="task done">
                                            <span className="task-icon">✓</span>
                                            <span className="task-name">Client Feedback Round 1</span>
                                        </div>
                                        <div className="task active">
                                            <span className="task-icon">⚡</span>
                                            <span className="task-name">Development Phase</span>
                                        </div>
                                        <div className="task pending">
                                            <span className="task-icon">○</span>
                                            <span className="task-name">Testing & QA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
