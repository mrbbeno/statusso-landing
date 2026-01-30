import React, { useEffect, useRef } from 'react';
import { Layout, Users, TrendingUp, DollarSign, Calendar, CheckCircle2, Circle, Activity } from 'lucide-react';
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
                            <span className="badge-icon">🚀</span>
                            <span>Satusso 2.0 is live</span>
                        </div>

                        <h1 className="hero-title">
                            Client Management,
                            <br />
                            <span className="text-gradient">Redefined.</span>
                        </h1>

                        <p className="hero-description">
                            The all-in-one workspace for modern agencies. Manage projects,
                            track monthly recurring revenue, and collaborate with clients in a stunning interface.
                        </p>

                        <div className="hero-actions">
                            <a href="/signup" className="btn btn-primary btn-large">
                                Start Free Trial
                                <span className="arrow">→</span>
                            </a>
                            <a href="/login" className="btn btn-secondary btn-large">
                                View Demo
                            </a>
                        </div>

                        <div className="hero-stats">
                            <div className="stat">
                                <div className="stat-value">$12k</div>
                                <div className="stat-label">Avg. Revenue Increase</div>
                            </div>
                            <div className="stat">
                                <div className="stat-value">150+</div>
                                <div className="stat-label">Agencies Onboarded</div>
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
                                    <div className="window-title">app.statusso.com/dashboard</div>
                                </div>
                                <div className="window-content" style={{ padding: 0, display: 'flex', height: '320px', background: 'var(--color-bg)' }}>
                                    {/* Mini Sidebar */}
                                    <div style={{ width: '60px', borderRight: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px', gap: '20px' }}>
                                        <div style={{ width: '32px', height: '32px', background: 'var(--primary)', borderRadius: '8px' }}></div>
                                        <Layout size={20} color="var(--color-text-muted)" />
                                        <Users size={20} color="var(--color-text-muted)" />
                                        <TrendingUp size={20} color="var(--color-text-muted)" />
                                    </div>

                                    {/* Mini Dashboard Content */}
                                    <div style={{ flex: 1, padding: '24px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                                            <div>
                                                <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>Welcome back, Alex</h3>
                                                <p style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Here's what's happening today.</p>
                                            </div>
                                            <div style={{ padding: '8px 16px', borderRadius: '8px', background: 'var(--color-surface)', fontSize: '12px', fontWeight: '600' }}>
                                                Oct 25, 2026
                                            </div>
                                        </div>

                                        {/* Stats Row */}
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                                            <div style={{ padding: '16px', background: 'var(--color-surface)', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                                    <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Total Revenue</span>
                                                    <DollarSign size={14} color="var(--primary)" />
                                                </div>
                                                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>$48,250</div>
                                            </div>
                                            <div style={{ padding: '16px', background: 'var(--color-surface)', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                                    <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Active Projects</span>
                                                    <Activity size={14} color="#22C55E" />
                                                </div>
                                                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>12</div>
                                            </div>
                                        </div>

                                        {/* Projects List */}
                                        <div style={{ background: 'var(--color-surface)', borderRadius: '12px', border: '1px solid var(--color-border)', padding: '16px' }}>
                                            <div style={{ fontSize: '13px', fontWeight: '600', marginBottom: '12px', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>Recent Projects</div>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                                                    <span>Website Redesign</span>
                                                    <span style={{ color: 'var(--primary)' }}>In Progress</span>
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                                                    <span>Mobile App Dev</span>
                                                    <span style={{ color: 'var(--color-text-muted)' }}>Done</span>
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                                                    <span>SEO Campaign</span>
                                                    <span style={{ color: 'var(--color-text-muted)' }}>To Do</span>
                                                </div>
                                            </div>
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
