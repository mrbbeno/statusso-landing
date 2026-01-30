import React, { useState, useEffect, useRef } from 'react';
import './Pricing.css';

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(true);
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
            description: 'Perfect for solo freelancers',
            monthlyPrice: 0,
            annualPrice: 0,
            features: [
                '1 active User',
                'Up to 3 active projects',
                'Unlimited client links',
                'Basic customization',
                'Email support',
                'Mobile app access'
            ],
            cta: 'Start Free',
            popular: false
        },
        {
            name: 'Pro',
            description: 'For growing teams',
            monthlyPrice: 22,
            annualPrice: 19,
            features: [
                'Unlimited clients',
                'Unlimited projects',
                'Unlimited client links',
                'Full white-label branding',
                'Priority support',
                'Team collaboration',
                'Custom domain',
                'Advanced analytics'
            ],
            cta: 'Start Pro',
            popular: true
        },
        {
            name: 'Agency',
            description: 'For large organizations',
            monthlyPrice: 'Coming Soon',
            annualPrice: 'Coming Soon',
            features: [
                'Everything in Pro',
                'Dedicated account manager',
                'Custom integrations',
                'SLA guarantee',
                'On-premise option',
                'Advanced security'
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

                <div className="pricing-toggle">
                    <span className={!isAnnual ? 'active' : ''}>Monthly</span>
                    <button
                        className={`toggle-switch ${isAnnual ? 'annual' : ''}`}
                        onClick={() => setIsAnnual(!isAnnual)}
                    >
                        <span className="toggle-slider"></span>
                    </button>
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
                                        <span className="amount">
                                            {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                                        </span>
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
                                href={`https://statusso-frontend.vercel.app/signup?plan=${plan.name.toLowerCase()}`}
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
