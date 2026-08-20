import React from 'react';
import { Link } from 'react-router-dom';

export default function Services({ onOpenQuoteModal }) {
    const handleCtaClick = (e, serviceName) => {
        e.preventDefault();
        if (onOpenQuoteModal) {
            onOpenQuoteModal(serviceName);
        }
    };

    return (
        <section className="services-section" id="services">
            <div className="container">
                <div className="text-center section-header animate-on-scroll">
                    <span className="section-tagline">Capabilities</span>
                    <h2 className="section-title text-primary">What We Build</h2>
                </div>
                <div className="services-grid">
                    {/* Card 1: Web Development */}
                    <div className="service-card animate-on-scroll delay-100">
                        <span className="material-symbols-outlined service-icon">language</span>
                        <div className="service-content">
                            <h3 className="service-title">Web Development</h3>
                            <p className="service-desc">Business websites, landing pages, custom web apps.</p>
                            <Link to="/web-development" className="service-more-btn">
                                More Details <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                    
                    {/* Card 2: App Development */}
                    <div className="service-card animate-on-scroll delay-200">
                        <span className="material-symbols-outlined service-icon">smartphone</span>
                        <div className="service-content">
                            <h3 className="service-title">App Development</h3>
                            <p className="service-desc">iOS, Android, and cross-platform mobile apps.</p>
                            <button onClick={(e) => handleCtaClick(e, 'Mobile App')} className="service-more-btn bg-transparent border-none p-0 cursor-pointer">
                                More Details <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                    
                    {/* Card 3: SaaS Tools */}
                    <div className="service-card animate-on-scroll delay-300">
                        <span className="material-symbols-outlined service-icon">settings_suggest</span>
                        <div className="service-content">
                            <h3 className="service-title">SaaS Tools &amp; Subscriptions</h3>
                            <p className="service-desc">Custom software tools built and maintained for your business.</p>
                            <Link to="/saas-development" className="service-more-btn">
                                More Details <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                            </Link>
                        </div>
                    </div>

                    {/* Card 4: AI Development */}
                    <div className="service-card animate-on-scroll delay-400">
                        <span className="material-symbols-outlined service-icon">smart_toy</span>
                        <div className="service-content">
                            <h3 className="service-title">AI Development</h3>
                            <p className="service-desc">Custom AI agents, LLM integrations, and automated workflows.</p>
                            <Link to="/ai-development" className="service-more-btn">
                                More Details <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
