import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SubscriptionPage from './pages/SubscriptionPage';
import CategoriesPage from './pages/CategoriesPage';
import MarketsPage from './pages/MarketsPage';
export function App() {
  return <Router>
      <div className="bg-[#0a0e17] min-h-screen text-gray-100 font-sans">
        <Routes>
          <Route path="/" element={<Layout>
                <HomePage />
              </Layout>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/subscription" element={<Layout>
                <SubscriptionPage />
              </Layout>} />
          <Route path="/categories" element={<Layout>
                <CategoriesPage />
              </Layout>} />
          <Route path="/markets" element={<Layout>
                <MarketsPage />
              </Layout>} />
        </Routes>
      </div>
    </Router>;
}