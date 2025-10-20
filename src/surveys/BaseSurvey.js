import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BaseSurvey = ({ entity, questions, entityPath }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOptions, setSelectedOptions] = useState([]); // For multiple selections
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  // Reset selected options when question changes
  useEffect(() => {
    setSelectedOptions([]);
  }, [currentQuestionIndex]);

  // Check if a question should be shown based on previous answers
  const shouldShowQuestion = useCallback((question) => {
    if (!question.conditional) return true;
    
    // For conditional questions, check if the condition is met
    if (question.id === 'patient-11') {
      // Show only if user answered "Yes" to question 10
      return answers['patient-10'] === 'Yes';
    }
    if (question.id === 'patient-12') {
      // Show only if user answered "No" to question 10
      return answers['patient-10'] === 'No';
    }
    
    return true;
  }, [answers]);

  // Find the next valid question index
  const getNextQuestionIndex = useCallback((currentIndex) => {
    let nextIndex = currentIndex + 1;
    while (nextIndex < totalQuestions && !shouldShowQuestion(questions[nextIndex])) {
      nextIndex++;
    }
    return nextIndex;
  }, [questions, shouldShowQuestion, totalQuestions]);

  // Find the previous valid question index
  const getPreviousQuestionIndex = useCallback((currentIndex) => {
    let prevIndex = currentIndex - 1;
    while (prevIndex >= 0 && !shouldShowQuestion(questions[prevIndex])) {
      prevIndex--;
    }
    return prevIndex;
  }, [questions, shouldShowQuestion]);

  const handleAnswer = (answer) => {
    const newAnswers = {
      ...answers,
      [currentQuestion.id]: answer
    };
    setAnswers(newAnswers);

    // Move to next question or finish survey
    const nextIndex = getNextQuestionIndex(currentQuestionIndex);
    if (nextIndex < totalQuestions) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      // Survey completed - in a real app, you would submit the answers here
      console.log('Survey completed:', newAnswers);
      navigate('/surveys/thank-you');
    }
  };

  const handleMultipleSelect = (option) => {
    let newSelected;
    if (selectedOptions.includes(option)) {
      newSelected = selectedOptions.filter(item => item !== option);
    } else {
      // For question 16, limit to 3 selections
      if (currentQuestion.id === 'patient-16' && selectedOptions.length >= 3) {
        return;
      }
      newSelected = [...selectedOptions, option];
    }
    setSelectedOptions(newSelected);
  };

  const handleMultipleSubmit = () => {
    handleAnswer(selectedOptions);
  };

  const handleTextAnswer = (text) => {
    handleAnswer(text);
  };

  const handlePrevious = () => {
    const prevIndex = getPreviousQuestionIndex(currentQuestionIndex);
    if (prevIndex >= 0) {
      setCurrentQuestionIndex(prevIndex);
    }
  };

  const handleSkip = () => {
    const nextIndex = getNextQuestionIndex(currentQuestionIndex);
    if (nextIndex < totalQuestions) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      navigate('/surveys/thank-you');
    }
  };

  // Calculate progress considering conditional questions
  const calculateProgress = useCallback(() => {
    let visibleQuestions = 0;
    for (let i = 0; i < totalQuestions; i++) {
      if (shouldShowQuestion(questions[i])) {
        visibleQuestions++;
      }
    }
    
    let answeredQuestions = 0;
    for (let i = 0; i <= currentQuestionIndex; i++) {
      if (shouldShowQuestion(questions[i])) {
        answeredQuestions++;
      }
    }
    
    return visibleQuestions > 0 ? (answeredQuestions / visibleQuestions) * 100 : 0;
  }, [currentQuestionIndex, questions, shouldShowQuestion, totalQuestions]);

  const progress = calculateProgress();

  // State to manage whether we should skip to next question
  const [shouldSkip, setShouldSkip] = useState(false);

  // Effect to handle skipping to next valid question
  useEffect(() => {
    if (shouldSkip) {
      const nextIndex = getNextQuestionIndex(currentQuestionIndex);
      if (nextIndex < totalQuestions) {
        setCurrentQuestionIndex(nextIndex);
      } else {
        navigate('/surveys/thank-you');
      }
      setShouldSkip(false);
    }
  }, [shouldSkip, currentQuestionIndex, totalQuestions, navigate, getNextQuestionIndex]);

  // Check if current question should be shown
  const isCurrentQuestionVisible = shouldShowQuestion(currentQuestion);
  console.log('Current question:', currentQuestion);
  console.log('Is current question visible:', isCurrentQuestionVisible);

  // If current question shouldn't be shown, trigger skip
  useEffect(() => {
    if (!isCurrentQuestionVisible && questions.length > 0) {
      console.log('Question is not visible, setting shouldSkip to true');
      setShouldSkip(true);
    }
  }, [isCurrentQuestionVisible, currentQuestionIndex, questions.length]);

  // Ensure we don't get stuck in an infinite loop
  useEffect(() => {
    if (currentQuestionIndex >= totalQuestions && totalQuestions > 0) {
      console.log('Reached end of questions, navigating to thank you');
      navigate('/surveys/thank-you');
    }
  }, [currentQuestionIndex, totalQuestions, navigate]);

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
              <Link to="/surveys" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">Surveys</Link>
              <a href="/" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">Home</a>
              <a href="/" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">About</a>
              <a href="/" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">Contact</a>
            </nav>
          </div>
        </header>

        {/* Progress Bar */}
        <div className="py-4 px-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestionIndex + 1} of {totalQuestions}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Main Question Content */}
        <main className="py-8 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="mb-2">
              <span className="inline-block bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full">
                {entity} Survey
              </span>
            </div>

            {questions && questions.length > 0 ? (
              isCurrentQuestionVisible ? (
                <>
                  <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
                    {currentQuestion.question}
                  </h1>

                  <div className="mb-8">
                    {currentQuestion.type === 'multiple-choice' && !currentQuestion.multiple && (
                      <div className="space-y-3">
                        {currentQuestion.options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleAnswer(option)}
                            className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}

                    {currentQuestion.type === 'multiple-choice' && currentQuestion.multiple && (
                      <div>
                        <div className="space-y-3 mb-6">
                          {currentQuestion.options.map((option, index) => (
                            <button
                              key={index}
                              onClick={() => handleMultipleSelect(option)}
                              className={`w-full text-left p-4 border rounded-lg transition-colors flex items-center ${selectedOptions.includes(option)
                                    ? 'border-indigo-300 bg-indigo-50'
                                    : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
                                  }`}
                            >
                              <div className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${selectedOptions.includes(option)
                                    ? 'border-indigo-500 bg-indigo-500'
                                    : 'border-gray-300'
                                  }`}>
                                {selectedOptions.includes(option) && (
                                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </div>
                              {option}
                            </button>
                          ))}
                        </div>
                        <button
                          onClick={handleMultipleSubmit}
                          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition-colors"
                        >
                          Continue
                        </button>
                      </div>
                    )}

                    {currentQuestion.type === 'rating' && (
                      <div className="space-y-6">
                        <div className="flex justify-between">
                          {Array.from({ length: 5 }, (_, i) => i + 1).map((rating) => (
                            <button
                              key={rating}
                              onClick={() => handleAnswer(rating)}
                              className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-full hover:border-indigo-300 hover:bg-indigo-50 transition-colors text-lg font-medium"
                            >
                              {rating}
                            </button>
                          ))}
                        </div>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>{currentQuestion.lowLabel}</span>
                          <span>{currentQuestion.highLabel}</span>
                        </div>
                      </div>
                    )}

                    {currentQuestion.type === 'text' && (
                      <div>
                        <textarea
                          placeholder="Type your response here..."
                          className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 min-h-[150px]"
                          onBlur={(e) => handleTextAnswer(e.target.value)}
                        ></textarea>
                        <button
                          onClick={() => handleTextAnswer(document.querySelector('textarea')?.value || '')}
                          className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition-colors"
                        >
                          Continue
                        </button>
                      </div>
                    )}

                    {currentQuestion.type === 'yes-no' && (
                      <div className="flex gap-4">
                        <button
                          onClick={() => handleAnswer('Yes')}
                          className="flex-1 p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-colors font-medium"
                        >
                          Yes
                        </button>
                        <button
                          onClick={() => handleAnswer('No')}
                          className="flex-1 p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-colors font-medium"
                        >
                          No
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between">
                    <button
                      onClick={handlePrevious}
                      disabled={currentQuestionIndex === 0}
                      className={`px-6 py-2 rounded-lg font-medium ${currentQuestionIndex === 0
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-gray-700 hover:bg-gray-100'
                          }`}
                    >
                      ← Previous
                    </button>

                    <div className="flex gap-3">
                      <button
                        onClick={handleSkip}
                        className="px-6 py-2 text-gray-600 hover:text-gray-900 font-medium"
                      >
                        Skip
                      </button>
                      <button
                        onClick={() => {
                          const nextIndex = getNextQuestionIndex(currentQuestionIndex);
                          if (nextIndex < totalQuestions) {
                            setCurrentQuestionIndex(nextIndex);
                          } else {
                            navigate('/surveys/thank-you');
                          }
                        }}
                        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition-colors"
                      >
                        {getNextQuestionIndex(currentQuestionIndex) < totalQuestions ? 'Next →' : 'Finish Survey'}
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                // Show loading state when question is being skipped
                <div className="flex justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
                  <div className="ml-4 text-gray-600">Loading question...</div>
                </div>
              )
            ) : (
              // Show loading state when questions are not yet loaded
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
                <div className="ml-4 text-gray-600">Loading survey...</div>
              </div>
            )}
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

export default BaseSurvey;