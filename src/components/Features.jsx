import React, { useEffect, useRef } from 'react';
import './Features.css';

const Features = () => {
    const featuresRef = useRef(null);

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

        const cards = featuresRef.current?.querySelectorAll('.feature-card');
        cards?.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    const features = [
        {
            icon: '🔗',
            title: 'Custom Client Links',
            description: 'Generate unique, branded links for each project. Your clients get instant access to their project dashboard.',
            color: '#ea580c'
        },
        {
            icon: '📊',
            title: 'Real-Time Progress',
            description: 'Update task status, milestones, and timelines. Clients see changes instantly without any manual notifications.',
            color: '#F97316'
        },
        {
            icon: '⚡',
            title: 'Automated Updates',
            description: 'Set up automatic notifications for key milestones. Keep clients informed without lifting a finger.',
            color: '#ea580c'
        },
        {
            icon: '🎨',
            title: 'White-Label Branding',
            description: 'Customize the look and feel to match your brand. Add your logo, colors, and domain for a professional touch.',
            color: '#F97316'
        },
        {
            icon: '📱',
            title: 'Mobile-First Design',
            description: 'Clients can check progress anywhere, anytime. Fully responsive design works perfectly on all devices.',
            color: '#ea580c'
        },
        {
            icon: '🔒',
            title: 'Secure & Private',
            description: 'Each project link is private and secure. Only people with the link can access the project dashboard.',
            color: '#F97316'
        }
    ];

    return (
        <section id="features" className="features section" ref={featuresRef}>
            <div className="container">
                <div className="section-header">
                    <h2>Everything You Need to Keep Clients Happy</h2>
                    <p>Stop wasting time on status updates. Let Trace do the heavy lifting.</p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card"
                            style={{ '--delay': `${index * 0.1}s` }}
                        >
                            <div className="feature-icon" style={{ '--icon-color': feature.color }}>
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
