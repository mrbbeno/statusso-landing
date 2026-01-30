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
            title: 'Create Your Project',
            description: 'Set up a new project in seconds. Add tasks, milestones, and estimated completion dates.',
            icon: '📝'
        },
        {
            number: '02',
            title: 'Share the Link',
            description: 'Generate a custom link and send it to your client. They can bookmark it for instant access.',
            icon: '🔗'
        },
        {
            number: '03',
            title: 'Update Progress',
            description: 'Mark tasks as complete, add notes, and adjust timelines. Changes appear instantly on the client dashboard.',
            icon: '✅'
        },
        {
            number: '04',
            title: 'Stay Transparent',
            description: 'Clients see exactly where their project stands. No more "checking in" emails or status calls.',
            icon: '🎯'
        }
    ];

    return (
        <section id="how-it-works" className="how-it-works section" ref={stepsRef}>
            <div className="container">
                <div className="section-header">
                    <h2>How It Works</h2>
                    <p>Get started in minutes. No complex setup, no learning curve.</p>
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
                    <h3>Ready to Transform Your Client Communication?</h3>
                    <p>Join thousands of freelancers and agencies who've eliminated status update calls.</p>
                    <a href="#" className="btn btn-primary btn-large">
                        Start Your Free Trial
                        <span className="arrow">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
