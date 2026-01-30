import React, { useEffect, useRef } from 'react';
import { Layout, Users, TrendingUp, Shield, Smartphone, Zap } from 'lucide-react';
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
            icon: <Layout size={24} />,
            title: 'Visual Kanban Board',
            description: 'Drag and drop projects through stages. Get a bird’s eye view of your entire pipeline instantly.',
            color: '#F97316'
        },
        {
            icon: <Users size={24} />,
            title: 'Secure Client Portals',
            description: 'Give clients specialized access links where they can view project status, milestones, and updates in real-time.',
            color: '#F97316'
        },
        {
            icon: <TrendingUp size={24} />,
            title: 'Revenue Tracking',
            description: 'Monitor monthly recurring revenue (MRR) and one-off project income with beautiful, auto-updating charts.',
            color: '#F97316'
        },
        {
            icon: <Zap size={24} />,
            title: 'Optimistic UI',
            description: 'Experience blazing fast interactions. Status updates and edits happen instantly with zero lag.',
            color: '#F97316'
        },
        {
            icon: <Smartphone size={24} />,
            title: 'Mobile-First Design',
            description: 'Manage your agency on the go. Full feature parity across desktop, tablet, and mobile devices.',
            color: '#F97316'
        },
        {
            icon: <Shield size={24} />,
            title: 'Enterprise Security',
            description: 'Your data is encrypted and secure. Granular permissions ensure clients only see what you want them to see.',
            color: '#F97316'
        }
    ];

    return (
        <section id="features" className="features section" ref={featuresRef}>
            <div className="container">
                <div className="section-header">
                    <h2>Everything You Need to Scale</h2>
                    <p>Powerful tools designed to help you focus on the work, not the admin.</p>
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
