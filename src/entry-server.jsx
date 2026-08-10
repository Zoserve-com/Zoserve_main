/**
 * SSR Entry Point — used only by the pre-render build script.
 * This is never loaded by browsers. It exports a renderRoute()
 * function that renders a given URL path to an HTML string.
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
// In react-router-dom v7, StaticRouter is exported from the main package
import { StaticRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import QuoteModal from './components/QuoteModal.jsx';
import PrivacyModal from './components/PrivacyModal.jsx';
import Home from './pages/Home/Home.jsx';
import WebDevelopment from './pages/WebDevelopment/WebDevelopment.jsx';

/**
 * Minimal SSR shell — mirrors the real AppContent but uses StaticRouter
 * and no-op callbacks (modals won't open server-side).
 * This produces the full semantic HTML tree for crawlers.
 */
function AppShell({ url }) {
    return (
        <StaticRouter location={url}>
            <div className="min-h-screen flex flex-col">
                <Header onOpenQuoteModal={() => {}} />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home onOpenQuoteModal={() => {}} />} />
                        <Route path="/web-development" element={<WebDevelopment onOpenQuoteModal={() => {}} />} />
                    </Routes>
                </main>
                <Footer onOpenPrivacyModal={() => {}} />
                <QuoteModal isOpen={false} onClose={() => {}} initialService="Other" />
                <PrivacyModal isOpen={false} onClose={() => {}} />
            </div>
        </StaticRouter>
    );
}

/**
 * Render the full React tree for a given URL path to an HTML string.
 * @param {string} url - e.g. '/' or '/web-development'
 * @returns {string} HTML markup
 */
export function renderRoute(url) {
    return renderToString(
        <React.StrictMode>
            <AppShell url={url} />
        </React.StrictMode>
    );
}
