import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex flex-col items-center justify-center p-4">
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
                            <Link to="/surveys" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">Surveys</Link>
                            <a href="/" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">Home</a>
                            <a href="/" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">About</a>
                            <a href="/" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">Contact</a>
                        </nav>
                    </div>
                </header>

                {/* Main Content */}
                <main className="py-16 px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
                            Thank You for Your Participation!
                        </h1>

                        <p className="text-lg text-gray-600 mb-10 animate-fade-in-delay">
                            Your responses are invaluable in helping us understand healthcare challenges and improve access for everyone. We appreciate the time you've taken to share your experiences.
                        </p>

                        <div className="bg-white rounded-xl shadow-lg p-6 mb-10 text-left border border-indigo-100 animate-fade-in-delay-2">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">What happens next?</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                                            <span className="text-indigo-600 font-bold text-xs">1</span>
                                        </div>
                                    </div>
                                    <span className="ml-3 text-gray-700">Your responses will be analyzed alongside others to identify key trends</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                                            <span className="text-indigo-600 font-bold text-xs">2</span>
                                        </div>
                                    </div>
                                    <span className="ml-3 text-gray-700">Findings will be compiled into reports to inform policy and practice</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                                            <span className="text-indigo-600 font-bold text-xs">3</span>
                                        </div>
                                    </div>
                                    <span className="ml-3 text-gray-700">You'll receive updates on how your input is making a difference</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-indigo-50 rounded-xl p-6 mb-10 animate-fade-in-delay-3">
                            <h3 className="text-lg font-semibold text-indigo-800 mb-2">Stay Connected</h3>
                            <p className="text-indigo-700 mb-4">Join our community to stay updated on healthcare improvements and research findings.</p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <button className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delay-4">
                            <Link to="/surveys" className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-105 text-center">
                                Take Another Survey
                            </Link>
                            <a href="/" className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all transform hover:scale-105 text-center">
                                Return to Home
                            </a>
                        </div>
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

export default ThankYou;