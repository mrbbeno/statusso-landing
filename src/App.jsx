import React from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const loginUrl = `${import.meta.env.VITE_APP_URL}/login`;

  return (
    <div className={`landing-page ${isMenuOpen ? 'menu-active' : ''}`}>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo">
            Statusso<span>.</span>
          </div>

          <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✕' : '☰'}
          </button>

          <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
            <a href="#how" className="nav-link" onClick={() => setIsMenuOpen(false)}>How it works</a>
            <a href="#features" className="nav-link" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href={loginUrl} className="btn btn-secondary">Login</a>
            <a href={`${loginUrl}?plan=free`} className="btn btn-primary">Try for Free</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">Stop Sending Status Emails</span>
            <h1 className="hero-title">Your clients will never ask "how is it going?" again.</h1>
            <p className="hero-subtitle">
              The professional way to share project progress. One link, full transparency, zero interruptions. Built for freelancers who value their deep-work time.
            </p>
            <div className="hero-btns">
              <a href={`${loginUrl}?plan=free`} className="btn btn-primary">Start for Free</a>
              <a href="#how" className="btn btn-secondary">See how it works</a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how" className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The Three-Step Workflow</h2>
            <p className="section-subtitle">Reclaim 4+ hours a week lost to manual status updates and email ping-pong.</p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Create Project</h3>
              <p>Add your project details, set an ETA, and define the current phase in seconds.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Share the Link</h3>
              <p>Send your client their private portal link. No login or password required for them.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Focus on Work</h3>
              <p>Clients see the status update in real-time. You get back to doing what you do best.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Professionals Choose Statusso</h2>
            <p className="section-subtitle">Designed to make you look like a high-end agency, even if you're a team of one.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Premium Client Portals</h3>
              <p>Custom-branded pages that give your clients a clear, professional view of their project's health.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Radical Transparency</h3>
              <p>Build trust by showing the 'Done' list and upcoming milestones without them having to ask.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3>Unified Workspace</h3>
              <p>A beautifully simple bento-grid dashboard to manage all your clients and projects in one place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Simple, Honest Pricing</h2>
            <p className="section-subtitle">No per-user fees. Just one simple price to scale your freelance business.</p>
          </div>
          <div className="pricing-grid">
            {/* Basic */}
            <div className="pricing-card">
              <div className="pricing-name">Free</div>
              <div className="pricing-price">$0<span>/mo</span></div>
              <ul className="pricing-features">
                <li>Up to 2 active projects</li>
                <li>Unlimited client views</li>
                <li>Single workspace</li>
                <li>Standard support</li>
              </ul>
              <a href={`${loginUrl}?plan=free`} className="btn btn-secondary" style={{ width: '100%' }}>Get Started</a>
            </div>
            {/* Pro */}
            <div className="pricing-card featured">
              <div className="popular-tag">Most Popular</div>
              <div className="pricing-name">Pro</div>
              <div className="pricing-price">$19<span>/mo</span></div>
              <ul className="pricing-features">
                <li>Unlimited projects</li>
                <li>Custom workspace link</li>
                <li>Priority support</li>
                <li>Advanced Dashboard</li>
                <li>White-labeled views</li>
              </ul>
              <a href={`${loginUrl}?plan=pro`} className="btn btn-primary" style={{ width: '100%' }}>Go Pro</a>
            </div>
            {/* Enterprise */}
            <div className="pricing-card">
              <div className="pricing-name">Agency</div>
              <div className="pricing-price">$49<span>/mo</span></div>
              <ul className="pricing-features">
                <li>Multiple workspaces</li>
                <li>Team collaboration</li>
                <li>API & Webhooks</li>
                <li>Custom domain (Beta)</li>
              </ul>
              <a href={loginUrl} className="btn btn-secondary" style={{ width: '100%' }}>Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <div className="container">
          <h2 className="cta-title">Stop the "How's it going?" emails.</h2>
          <a href={`${loginUrl}?plan=free`} className="btn btn-primary btn-lg" style={{ padding: '20px 48px', fontSize: '18px' }}>Get Started with Statusso</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="logo">Statusso<span>.</span></div>
              <p className="footer-desc">The modern standard for freelancer-client transparency.</p>
            </div>
            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li><a href="#how">How it works</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Freelance Guide</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Statusso. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
