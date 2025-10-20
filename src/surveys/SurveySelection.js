import React from 'react';
import { Link } from 'react-router-dom';

const SurveySelection = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
            <div className="max-w-4xl w-full">
                {/* Header */}
                <header className="py-6 px-4 border-b border-gray-100">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-base">H</span>
                            </div>
                            <h1 className="text-xl font-semibold text-gray-900">HEAL Survey</h1>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <Link to="/surveys" className="text-indigo-600 font-medium text-sm">Surveys</Link>
                            <a href="/" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">Home</a>
                            <a href="/" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">About</a>
                            <a href="/" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">Contact</a>
                        </nav>
                    </div>
                </header>

                {/* Main Content */}
                <main className="py-16 px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                            Healthcare Access Survey
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                            Help us improve healthcare access by sharing your experiences. Select the survey that best represents your role in the healthcare system.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        <Link to="/surveys/patient" className="border border-gray-100 rounded-lg p-6 text-center hover:shadow-sm transition-all duration-300 hover:border-indigo-200 group">
                            <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-100 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Patient</h3>
                            <p className="text-gray-600 text-sm mb-4">Share your experiences accessing healthcare services</p>
                            <button className="text-indigo-600 font-medium text-sm group-hover:text-indigo-700 transition-colors">
                                Start Survey →
                            </button>
                        </Link>

                        <Link to="/surveys/pharmacy" className="border border-gray-100 rounded-lg p-6 text-center hover:shadow-sm transition-all duration-300 hover:border-indigo-200 group">
                            <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-100 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Pharmacy</h3>
                            <p className="text-gray-600 text-sm mb-4">Tell us about challenges in medication distribution</p>
                            <button className="text-indigo-600 font-medium text-sm group-hover:text-indigo-700 transition-colors">
                                Start Survey →
                            </button>
                        </Link>

                        <Link to="/surveys/doctor" className="border border-gray-100 rounded-lg p-6 text-center hover:shadow-sm transition-all duration-300 hover:border-indigo-200 group">
                            <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-100 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Doctor</h3>
                            <p className="text-gray-600 text-sm mb-4">Share insights on patient care challenges</p>
                            <button className="text-indigo-600 font-medium text-sm group-hover:text-indigo-700 transition-colors">
                                Start Survey →
                            </button>
                        </Link>

                        <Link to="/surveys/hospital" className="border border-gray-100 rounded-lg p-6 text-center hover:shadow-sm transition-all duration-300 hover:border-indigo-200 group">
                            <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-100 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Hospital</h3>
                            <p className="text-gray-600 text-sm mb-4">Describe systemic challenges in healthcare delivery</p>
                            <button className="text-indigo-600 font-medium text-sm group-hover:text-indigo-700 transition-colors">
                                Start Survey →
                            </button>
                        </Link>
                    </div>
                </main>

                {/* Footer */}
                <footer className="bg-white py-8 px-4 border-t border-gray-100">
                    <div className="max-w-5xl mx-auto text-center text-gray-500 text-sm">
                        <p>&copy; {new Date().getFullYear()} HEAL. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default SurveySelection;