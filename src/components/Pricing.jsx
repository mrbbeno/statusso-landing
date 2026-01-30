import React, { useState, useEffect, useRef } from 'react';
import './Pricing.css';

const Pricing = () => {
    const pricingRef = useRef(null);

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

        const cards = pricingRef.current?.querySelectorAll('.pricing-card');
        cards?.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    const plans = [
        {
            name: 'Free',
            description: 'For solo freelancers',
            monthlyPrice: 0,
            annualPrice: 0,
            features: [
                '1 Admin User',
                'Up to 3 Active Clients',
                'Unlimited Projects',
                'Standard Client Portal',
                'Basic Revenue Tracking',
                'Community Support'
            ],
            cta: 'Start Free',
            popular: false
        },
        {
            name: 'Pro',
            description: 'For growing agencies',
            monthlyPrice: 29,
            annualPrice: 29,
            features: [
                'Unlimited Admin Users',
                'Unlimited Clients',
                'White-Label Portals',
                'Custom Domain (CNAME)',
                'Priority Email Support',
                'Advanced Analytics',
                'Export Data to CSV'
            ],
            cta: 'Start Pro',
            popular: true
        },
        {
            name: 'Agency',
            description: 'For large teams',
            monthlyPrice: 'Contact',
            annualPrice: 'Contact',
            features: [
                'Everything in Pro',
                'Dedicated Account Manager',
                'SLA & 99.9% Uptime',
                'Custom Integrations',
                'SSO Authentication',
                'Onboarding Setup'
            ],
            cta: 'Contact Sales',
            popular: false
        }
    ];

    return (
        <section id="pricing" className="pricing section" ref={pricingRef}>
            <div className="container">
                <div className="section-header">
                    <h2>Simple, Transparent Pricing</h2>
                    <p>No hidden fees. Cancel anytime.</p>
                </div>



                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                            style={{ '--delay': `${index * 0.1}s` }}
                        >
                            {plan.popular && <div className="popular-badge">Most Popular</div>}

                            <div className="plan-header">
                                <h3 className="plan-name">{plan.name}</h3>
                                <p className="plan-description">{plan.description}</p>
                            </div>

                            <div className="plan-price">
                                {typeof plan.monthlyPrice === 'number' ? (
                                    <>
                                        <span className="currency">$</span>
                                        <span className="amount">{plan.monthlyPrice}</span>
                                        <span className="period">/month</span>
                                    </>
                                ) : (
                                    <span className="custom-price">{plan.monthlyPrice}</span>
                                )}
                            </div>

                            <ul className="plan-features">
                                {plan.features.map((feature, i) => (
                                    <li key={i}>
                                        <span className="check-icon">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={`/signup?plan=${plan.name.toLowerCase()}`}
                                className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} btn-large plan-cta`}
                            >
                                {plan.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
