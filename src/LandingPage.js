import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <header className="py-6 px-4 border-b border-gray-100">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-base">H</span>
              </div>
              <h1 className="text-xl font-semibold text-gray-900">HEAL</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">Home</a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">About</a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">Contact</a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-24 px-4 md:px-8 rounded-2xl bg-cover bg-center" style={{
          backgroundImage: 'url("/images/hero-background.svg")'
        }}>
          <div className="max-w-3xl">
            <div className="inline-block bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full mb-6">
              Healthcare Research Initiative
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              Transforming Healthcare Through Community Insights
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
              Join thousands of patients, providers, and healthcare professionals in shaping a more accessible and equitable healthcare system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/surveys" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3.5 px-8 rounded transition duration-300 text-base">
                Take Survey
              </Link>
              <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3.5 px-8 rounded transition duration-300 text-base">
                View Reports
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-semibold text-indigo-600 mb-2">85%</div>
              <p className="text-gray-600 text-sm">of patients face access barriers</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-semibold text-indigo-600 mb-2">72%</div>
              <p className="text-gray-600 text-sm">of providers report administrative burdens</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-semibold text-indigo-600 mb-2">90%</div>
              <p className="text-gray-600 text-sm">believe systemic changes are needed</p>
            </div>
          </div>
        </section>

        {/* Survey Types */}
        <section className="py-20 px-4 md:px-8">
          <h2 className="text-2xl font-semibold text-center text-gray-900 mb-16">Who We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="border border-gray-100 rounded-lg p-6 text-center hover:shadow-sm transition-shadow duration-300">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Patients</h3>
              <p className="text-gray-600 text-sm">Share your experiences accessing healthcare services</p>
            </div>

            <div className="border border-gray-100 rounded-lg p-6 text-center hover:shadow-sm transition-shadow duration-300">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Pharmacies</h3>
              <p className="text-gray-600 text-sm">Tell us about challenges in medication distribution</p>
            </div>

            <div className="border border-gray-100 rounded-lg p-6 text-center hover:shadow-sm transition-shadow duration-300">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Doctors</h3>
              <p className="text-gray-600 text-sm">Share insights on patient care challenges</p>
            </div>

            <div className="border border-gray-100 rounded-lg p-6 text-center hover:shadow-sm transition-shadow duration-300">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Hospitals</h3>
              <p className="text-gray-600 text-sm">Describe systemic challenges in healthcare delivery</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Ready to Make a Difference?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Your insights can help shape a better healthcare system for everyone. Take our survey today.
            </p>
            <Link to="/surveys" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded transition duration-300 text-sm">
              Start Survey
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-12 px-4 border-t border-gray-100">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">H</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">HEAL</h3>
              </div>
              <p className="text-gray-500 text-sm">
                Improving healthcare access through research and community insights.
              </p>
            </div>

            <div>
              <h4 className="text-base font-semibold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-500">
                <li><a href="#" className="hover:text-indigo-600 transition-colors text-sm">Home</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors text-sm">Surveys</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors text-sm">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-semibold text-gray-900 mb-4">Contact Us</h4>
              <address className="not-italic text-gray-500 text-sm">
                <p>123 Health Street</p>
                <p>Medical District, MD 12345</p>
                <p className="mt-2">contact@heal-health.com</p>
                <p>(123) 456-7890</p>
              </address>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-gray-100 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} HEAL. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;