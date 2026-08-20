import React, { useState } from 'react';

export default function SaaSDevelopment({ onOpenQuoteModal }) {
    const handleCtaClick = (e, service = 'SaaS Tool Development') => {
        e.preventDefault();
        if (onOpenQuoteModal) {
            onOpenQuoteModal(service);
        }
    };

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Interactive Hero Visual State: Billing Tier Simulator
    const [activeTier, setActiveTier] = useState('pro');
    
    // FAQ Accordion State (all open by default or collapsible)
    const [openFaq, setOpenFaq] = useState(null);
    const toggleFaq = (idx) => {
        setOpenFaq(openFaq === idx ? null : idx);
    };

    const tierData = {
        starter: {
            name: 'Starter Plan',
            price: '$29/mo',
            mrr: '$4,350',
            tenants: '150 orgs',
            stripeEvent: 'evt_starter_sub_paid',
            dbStatus: 'Isolated Schema (24ms)'
        },
        pro: {
            name: 'Pro Plan',
            price: '$99/mo',
            mrr: '$14,850',
            tenants: '142 orgs',
            stripeEvent: 'evt_pro_invoice_cleared',
            dbStatus: 'Dedicated Tenant (12ms)'
        },
        enterprise: {
            name: 'Enterprise Plan',
            price: '$299/mo',
            mrr: '$44,850',
            tenants: '38 orgs',
            stripeEvent: 'evt_enterprise_sso_synced',
            dbStatus: 'VPC Isolation (4ms)'
        }
    };

    const faqs = [
        {
            q: "Can you build just an MVP first?",
            a: "Yes — we recommend it for most first-time founders. Validate the idea, then scale the architecture as you grow."
        },
        {
            q: "Will I own the code and infrastructure?",
            a: "Yes, completely. Nothing proprietary, nothing locked behind us."
        },
        {
            q: "What tech stack do you use?",
            a: "We choose the stack based on your product's needs and scale requirements — modern, well-supported frameworks, not experimental tech that's hard to maintain."
        },
        {
            q: "Do I have to sign up for ongoing support?",
            a: "No. Support is available if you want it, but your product is fully functional and maintainable without a forced retainer."
        },
        {
            q: "How long does a typical SaaS build take?",
            a: "Depends on scope — an MVP can launch in weeks; full-scale platforms take longer. We give you a realistic timeline upfront, not an optimistic sales estimate."
        }
    ];

    return (
        <div className="saas-development-page">
            {/* 1. Hero Section */}
            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content animate-slide-left">
                        <span className="section-tagline">SaaS Development Services</span>
                        <h1 className="hero-title">
                            From Idea to Live SaaS <br />
                            <span className="highlight-text">Built Right, Owned by You</span>
                        </h1>
                        <p className="hero-subtitle">
                            We design, build, and launch SaaS applications end-to-end — clean architecture, scalable from day one, and fully yours. No inflated retainers, no vendor lock-in.
                        </p>
                        <div className="hero-cta-wrapper">
                            <button onClick={(e) => handleCtaClick(e, 'SaaS Tool Development')} className="btn btn-primary hero-btn border-none cursor-pointer">
                                Request Your Quote
                            </button>
                            <a href="#what-we-build" onClick={(e) => scrollToSection(e, 'what-we-build')} className="nav-link font-bold text-xs flex items-center gap-1">
                                See What's Included <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                            </a>
                        </div>
                    </div>

                    {/* Interactive Hero Visual: SaaS Control Plane & Live Revenue Visual */}
                    <div className="hero-visual animate-slide-right" style={{ maxWidth: '540px' }}>
                        <div className="saas-control-card">
                            {/* Window Header */}
                            <div className="saas-card-header">
                                <div className="dot-group">
                                    <span className="dot red"></span>
                                    <span className="dot yellow"></span>
                                    <span className="dot green"></span>
                                    <span className="saas-header-title">saas_control_plane.v1</span>
                                </div>
                                <div className="status-pill">
                                    <span className="pulse-dot"></span>
                                    <span>Engine: Active</span>
                                </div>
                            </div>

                            {/* Live Metrics Row */}
                            <div className="saas-metrics-row">
                                <div className="saas-metric-box">
                                    <span className="metric-label">Live MRR</span>
                                    <span className="metric-val text-emerald-400">{tierData[activeTier].mrr}</span>
                                </div>
                                <div className="saas-metric-box">
                                    <span className="metric-label">Active Scale</span>
                                    <span className="metric-val text-cyan-400">{tierData[activeTier].tenants}</span>
                                </div>
                                <div className="saas-metric-box">
                                    <span className="metric-label">Ownership</span>
                                    <span className="metric-val text-accent">100% Client</span>
                                </div>
                            </div>

                            {/* Tier Selector Buttons */}
                            <div className="saas-tier-selector">
                                <span className="selector-title">Test Multi-Tenant Billing Tiers:</span>
                                <div className="tier-btn-group">
                                    <button 
                                        className={`tier-btn ${activeTier === 'starter' ? 'active' : ''}`}
                                        onClick={() => setActiveTier('starter')}
                                    >
                                        Starter ($29)
                                    </button>
                                    <button 
                                        className={`tier-btn ${activeTier === 'pro' ? 'active' : ''}`}
                                        onClick={() => setActiveTier('pro')}
                                    >
                                        Pro ($99)
                                    </button>
                                    <button 
                                        className={`tier-btn ${activeTier === 'enterprise' ? 'active' : ''}`}
                                        onClick={() => setActiveTier('enterprise')}
                                    >
                                        Enterprise ($299)
                                    </button>
                                </div>
                            </div>

                            {/* Simulated Live Console Log */}
                            <div className="saas-console-stream">
                                <div className="stream-row">
                                    <span className="stream-tag">[Stripe]</span>
                                    <span className="stream-msg">{tierData[activeTier].stripeEvent} ({tierData[activeTier].price})</span>
                                </div>
                                <div className="stream-row">
                                    <span className="stream-tag">[DB]</span>
                                    <span className="stream-msg text-cyan-300">{tierData[activeTier].dbStatus}</span>
                                </div>
                                <div className="stream-row">
                                    <span className="stream-tag">[Auth]</span>
                                    <span className="stream-msg text-emerald-300">OAuth2 / RBAC Session Verified</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Security Badge */}
                        <div className="badge-card floating-badge" style={{ zIndex: 20 }}>
                            <span className="material-symbols-outlined icon-green">verified_user</span>
                            <div className="badge-text">
                                <span className="badge-title">Zero Vendor Lock-In</span>
                                <span className="badge-sub">Fully documented codebase</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. The Problem Section */}
            <section className="problem-section" style={{ borderTop: '1px solid var(--color-border-light)' }}>
                <div className="container">
                    <div className="problem-grid">
                        <div className="problem-content animate-slide-left">
                            <span className="section-tagline tag-alert">The SaaS Trap</span>
                            <h2 className="section-title">Most SaaS Builds Fail Before They Launch</h2>
                            <p className="section-body">
                                Founders lose months to agencies that over-engineer, under-deliver, or disappear after the first version ships. Others end up locked into a dev team they can't leave, paying endless "maintenance retainers" just to keep the lights on. Building a SaaS product shouldn't mean losing control of it.
                            </p>
                        </div>
                        <div className="problem-cards">
                            <div className="problem-card animate-on-scroll delay-100">
                                <span className="material-symbols-outlined card-icon alert-icon">timelapse</span>
                                <h3 className="card-title">Over-Engineered &amp; Delayed</h3>
                                <p className="card-desc">Months lost building complex unneeded features before testing the actual market demand.</p>
                            </div>
                            <div className="problem-card animate-on-scroll delay-200">
                                <span className="material-symbols-outlined card-icon alert-icon">lock_person</span>
                                <h3 className="card-title">Maintenance Retainer Traps</h3>
                                <p className="card-desc">Being held hostage by agencies forcing endless monthly retainers just to keep your server running.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. What We Build */}
            <section className="services-section" id="what-we-build" style={{ backgroundColor: 'var(--color-bg-white)' }}>
                <div className="container">
                    <div className="text-center section-header animate-on-scroll">
                        <span className="section-tagline">Capabilities</span>
                        <h2 className="section-title text-primary">Full-Cycle SaaS Development</h2>
                    </div>
                    
                    <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
                        {/* 1. MVP Development */}
                        <div className="service-card animate-on-scroll delay-100">
                            <span className="material-symbols-outlined service-icon">rocket_launch</span>
                            <div className="service-content">
                                <h3 className="service-title">1. MVP Development</h3>
                                <p className="service-desc">
                                    Get a lean, functional version of your product live fast — enough to test the market and get real user feedback, without over-building.
                                </p>
                            </div>
                        </div>

                        {/* 2. Full-Scale SaaS Platforms */}
                        <div className="service-card animate-on-scroll delay-200">
                            <span className="material-symbols-outlined service-icon">dataset</span>
                            <div className="service-content">
                                <h3 className="service-title">2. Full-Scale SaaS Platforms</h3>
                                <p className="service-desc">
                                    Multi-tenant architecture, user roles, subscription billing, dashboards — built to handle real users and grow with your business.
                                </p>
                            </div>
                        </div>

                        {/* 3. Subscription & Billing Integration */}
                        <div className="service-card animate-on-scroll delay-300">
                            <span className="material-symbols-outlined service-icon">credit_card</span>
                            <div className="service-content">
                                <h3 className="service-title">3. Subscription &amp; Billing Integration</h3>
                                <p className="service-desc">
                                    Stripe, Razorpay, or your preferred provider — tiered plans, trials, usage-based billing, all wired up correctly from the start.
                                </p>
                            </div>
                        </div>

                        {/* 4. Authentication & User Management */}
                        <div className="service-card animate-on-scroll delay-400">
                            <span className="material-symbols-outlined service-icon">shield_lock</span>
                            <div className="service-content">
                                <h3 className="service-title">4. Authentication &amp; User Management</h3>
                                <p className="service-desc">
                                    Secure sign-up/login, role-based access, team/organization support — done properly, not bolted on later.
                                </p>
                            </div>
                        </div>

                        {/* 5. Admin Dashboards & Analytics */}
                        <div className="service-card animate-on-scroll delay-500">
                            <span className="material-symbols-outlined service-icon">monitoring</span>
                            <div className="service-content">
                                <h3 className="service-title">5. Admin Dashboards &amp; Analytics</h3>
                                <p className="service-desc">
                                    See how your product is actually being used — user activity, revenue, churn — in a dashboard built for decision-making, not vanity metrics.
                                </p>
                            </div>
                        </div>

                        {/* 6. API & Third-Party Integrations */}
                        <div className="service-card animate-on-scroll delay-600">
                            <span className="material-symbols-outlined service-icon">hub</span>
                            <div className="service-content">
                                <h3 className="service-title">6. API &amp; Third-Party Integrations</h3>
                                <p className="service-desc">
                                    Connect your SaaS to the tools your customers already use — payment gateways, CRMs, email platforms, and custom APIs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Why Zoserve for SaaS */}
            <section className="different-section" id="why-zoserve">
                <div className="container">
                    <div className="text-center section-header animate-on-scroll">
                        <span className="section-tagline tag-white">Why Zoserve for SaaS</span>
                        <h2 className="section-title text-white">Built to Launch. Built to Last.</h2>
                    </div>

                    <div className="different-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
                        <div className="diff-card animate-on-scroll delay-100">
                            <div className="icon-wrapper">
                                <span className="material-symbols-outlined">auto_graph</span>
                            </div>
                            <h3 className="diff-title">Scalable Architecture</h3>
                            <p className="diff-desc">
                                Scalable architecture from day one — no expensive rebuild when you start growing.
                            </p>
                        </div>

                        <div className="diff-card animate-on-scroll delay-200">
                            <div className="icon-wrapper">
                                <span className="material-symbols-outlined">folder_code</span>
                            </div>
                            <h3 className="diff-title">You Own the Codebase</h3>
                            <p className="diff-desc">
                                You own the codebase — fully documented, no proprietary black-box code only we can touch.
                            </p>
                        </div>

                        <div className="diff-card animate-on-scroll delay-300">
                            <div className="icon-wrapper">
                                <span className="material-symbols-outlined">receipt_long</span>
                            </div>
                            <h3 className="diff-title">Fair, Transparent Pricing</h3>
                            <p className="diff-desc">
                                Fair, transparent pricing — clear scope, clear cost, no scope-creep surprises.
                            </p>
                        </div>

                        <div className="diff-card animate-on-scroll delay-400">
                            <div className="icon-wrapper">
                                <span className="material-symbols-outlined">lock_open</span>
                            </div>
                            <h3 className="diff-title">No Forced Retainers</h3>
                            <p className="diff-desc">
                                No forced retainers — ongoing support is available if you want it, never required.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Our Process */}
            <section className="process-section" id="process" style={{ padding: 'var(--spacing-xxl) 0', backgroundColor: 'var(--color-bg-white)' }}>
                <div className="container">
                    <div className="text-center section-header animate-on-scroll">
                        <span className="section-tagline">How It Works</span>
                        <h2 className="section-title text-primary">Our Process</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
                        {/* Step 1 */}
                        <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl relative animate-on-scroll delay-100">
                            <div className="w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center mb-4 text-sm shadow-md">
                                01
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Discovery &amp; Scoping</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                We understand your product vision, target users, and must-have features.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl relative animate-on-scroll delay-200">
                            <div className="w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center mb-4 text-sm shadow-md">
                                02
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Clear Proposal &amp; Timeline</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Fixed scope, fixed pricing, realistic milestones.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl relative animate-on-scroll delay-300">
                            <div className="w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center mb-4 text-sm shadow-md">
                                03
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Build in Sprints</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Regular demos so you see progress and can course-correct early.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl relative animate-on-scroll delay-400">
                            <div className="w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center mb-4 text-sm shadow-md">
                                04
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Launch &amp; Handover</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Full documentation, walkthroughs, and a codebase you actually understand.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FAQ Section */}
            <section className="faq-section" id="faq" style={{ padding: 'var(--spacing-xxl) 0', borderTop: '1px solid var(--color-border-light)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="text-center section-header animate-on-scroll">
                        <span className="section-tagline">Got Questions?</span>
                        <h2 className="section-title text-primary">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-4 mt-8">
                        {faqs.map((faq, idx) => {
                            const isOpen = openFaq === idx;
                            return (
                                <div 
                                    key={idx}
                                    className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm transition-all duration-200 hover:border-emerald-400 cursor-pointer"
                                    onClick={() => toggleFaq(idx)}
                                >
                                    <div className="flex justify-between items-center gap-4">
                                        <h3 className="text-base font-bold text-slate-900">
                                            Q: {faq.q}
                                        </h3>
                                        <span className="material-symbols-outlined text-slate-500">
                                            {isOpen ? 'remove' : 'add'}
                                        </span>
                                    </div>
                                    {isOpen && (
                                        <div className="mt-3 pt-3 border-t border-slate-100 text-sm text-slate-600 leading-relaxed animate-fade-in">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 7. Final CTA Section */}
            <section className="cta-section" style={{ padding: 'var(--spacing-xxl) 0', backgroundColor: 'var(--color-primary)', color: '#fff', textAlign: 'center' }}>
                <div className="container">
                    <div className="max-w-2xl mx-auto space-y-6 animate-on-scroll">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                            Let's Build Your SaaS — The Right Way
                        </h2>
                        <p className="text-slate-300 text-base md:text-lg">
                            Solid engineering, fair pricing, and a product that's actually yours.
                        </p>
                        <div className="pt-4">
                            <button 
                                onClick={(e) => handleCtaClick(e, 'SaaS Tool Development')}
                                className="btn btn-primary hero-btn border-none cursor-pointer px-8 py-4 text-base font-bold shadow-lg"
                            >
                                Start Your SaaS Project
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
