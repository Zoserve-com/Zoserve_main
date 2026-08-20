import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import PrivacyModal from './components/PrivacyModal';
import useAnimateOnScroll from './hooks/useAnimateOnScroll';

// Pages
import Home from './pages/Home/Home';
import WebDevelopment from './pages/WebDevelopment/WebDevelopment';
import AIDevelopment from './pages/AIDevelopment/AIDevelopment';
import SaaSDevelopment from './pages/SaaSDevelopment/SaaSDevelopment';

// Helper to scroll to top on routing changes
function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function AppContent() {
    const location = useLocation();
    const containerRef = useAnimateOnScroll(location.pathname);
    const [quoteModalOpen, setQuoteModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('Other');
    const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

    // Disable background page scrolling when a popup modal is open
    useEffect(() => {
        if (quoteModalOpen || privacyModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [quoteModalOpen, privacyModalOpen]);

    const handleOpenQuoteModal = (serviceName = 'Other') => {
        setSelectedService(serviceName);
        setQuoteModalOpen(true);
    };

    const handleCloseQuoteModal = () => {
        setQuoteModalOpen(false);
    };

    const handleOpenPrivacyModal = () => {
        setPrivacyModalOpen(true);
    };

    const handleClosePrivacyModal = () => {
        setPrivacyModalOpen(false);
    };

    return (
        <div ref={containerRef} className="min-h-screen flex flex-col">
            <ScrollToTop />
            
            {/* Global Header */}
            <Header onOpenQuoteModal={handleOpenQuoteModal} />
            
            {/* Page Router */}
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home onOpenQuoteModal={handleOpenQuoteModal} />} />
                    <Route path="/web-development" element={<WebDevelopment onOpenQuoteModal={handleOpenQuoteModal} />} />
                    <Route path="/ai-development" element={<AIDevelopment onOpenQuoteModal={handleOpenQuoteModal} />} />
                    <Route path="/saas-development" element={<SaaSDevelopment onOpenQuoteModal={handleOpenQuoteModal} />} />
                </Routes>
            </main>
            
            {/* Global Footer */}
            <Footer onOpenPrivacyModal={handleOpenPrivacyModal} />

            {/* Global Modals */}
            <QuoteModal 
                isOpen={quoteModalOpen} 
                onClose={handleCloseQuoteModal} 
                initialService={selectedService}
            />

            <PrivacyModal 
                isOpen={privacyModalOpen} 
                onClose={handleClosePrivacyModal}
            />
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
