import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
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
                            <Link to="/" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">Surveys</Link>
                            <a href="/" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">Home</a>
                            <a href="/" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">About</a>
                            <a href="/" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">Contact</a>
                        </nav>
                    </div>
                </header>

                {/* Main Content */}
                <main className="py-16 px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-8">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                            Thank You for Your Participation
                        </h1>

                        <p className="text-lg text-gray-600 mb-10">
                            Your responses are invaluable in helping us understand healthcare challenges and improve access for everyone. We appreciate the time you've taken to share your experiences.
                        </p>

                        <div className="bg-indigo-50 rounded-lg p-6 mb-10 text-left">
                            <h2 className="text-lg font-semibold text-gray-900 mb-3">What happens next?</h2>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Your responses will be analyzed alongside others to identify key trends</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Findings will be compiled into reports to inform policy and practice</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>You'll receive updates on how your input is making a difference</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/surveys" className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors text-center">
                                Take Another Survey
                            </Link>
                            <a href="/" className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-center">
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