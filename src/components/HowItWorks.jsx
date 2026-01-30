import React, { useEffect, useRef } from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
    const stepsRef = useRef(null);

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

        const steps = stepsRef.current?.querySelectorAll('.step');
        steps?.forEach((step) => observer.observe(step));

        return () => observer.disconnect();
    }, []);

    const steps = [
        {
            number: '01',
            title: 'Add a Project',
            description: 'Input project details, set a value and deadline, and assign it to a client in seconds.',
            icon: '📝'
        },
        {
            number: '02',
            title: 'Manage Workflow',
            description: 'Move cards through the visual Kanban board. Update statuses from "To Do" to "In Progress" to "Done".',
            icon: '📋'
        },
        {
            number: '03',
            title: 'Share Access',
            description: 'Send clients a secure, read-only link to their personal portal. No login required for them.',
            icon: '🔗'
        },
        {
            number: '04',
            title: 'Track Growth',
            description: 'Watch your Monthly Recurring Revenue (MRR) grow on the dashboard as you complete more projects.',
            icon: '📈'
        }
    ];

    return (
        <section id="how-it-works" className="how-it-works section" ref={stepsRef}>
            <div className="container">
                <div className="section-header">
                    <h2>How Statusso Works</h2>
                    <p>A simple, powerful workflow designed for modern agencies.</p>
                </div>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="step"
                            style={{ '--delay': `${index * 0.15}s` }}
                        >
                            <div className="step-number">{step.number}</div>
                            <div className="step-icon">{step.icon}</div>
                            <div className="step-content">
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                            </div>
                            {index < steps.length - 1 && <div className="step-connector"></div>}
                        </div>
                    ))}
                </div>

                <div className="cta-box">
                    <h3>Ready to upgrade your workflow?</h3>
                    <p>Join hundreds of agencies managing their business with Statusso.</p>
                    <a href="https://statusso-frontend.vercel.app/signup?plan=free" className="btn btn-primary btn-large">
                        Get Started Now
                        <span className="arrow">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
