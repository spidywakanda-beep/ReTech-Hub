/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { UpperDeviceSelector } from './components/UpperDeviceSelector';
import { RepairEstimator } from './components/RepairEstimator';
import { DisplayGlassCatalog } from './components/DisplayGlassCatalog';
import { AccessoriesShowcase } from './components/AccessoriesShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-900 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 z-50 px-4 py-2 bg-slate-900 text-white font-semibold rounded-md shadow-lg outline-none ring-2 ring-orange-500"
      >
        Skip to main content
      </a>

      {/* Minimalist Top Bar Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 focus:outline-none">
        {/* Hero Section */}
        <Hero />

        {/* Upper Toggle & Cascading Dropdown Selector (Clean Startup Flow - No Wall of Devices) */}
        <UpperDeviceSelector />

        {/* Section 3: Mobile & Laptop Repairs + Instant Estimator */}
        <RepairEstimator />

        {/* Section 4: Smartphone Glass Replacement & Display Repair Catalog */}
        <DisplayGlassCatalog />

        {/* Section 5: Engineered Tech Accessories */}
        <AccessoriesShowcase />

        {/* Section 5: Why Choose ReTech Hub (40-Point Standards & Owner Sanfi) */}
        <WhyChooseUs />

        {/* Section 6: Customer Journey & Trade-In Matrix */}
        <HowItWorks />
      </main>

      {/* Section 7: Professional Footer */}
      <Footer />
    </div>
  );
}
