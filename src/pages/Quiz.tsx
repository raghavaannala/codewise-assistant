
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Sidebar from '@/components/layout/Sidebar';
import { Button } from '@/components/ui/button';
import { Timer, CheckCircle, XCircle } from 'lucide-react';
import GlassMorphCard from '@/components/ui/GlassMorphCard';
import { useParams, useNavigate } from 'react-router-dom';

interface QuizQuestion {
  id: number;
  question: string;
  code?: string;
  options: string[];
  answer: number;
}

// Mock quizzes data
const quizzes: Record<string, {title: string, description: string, questions: QuizQuestion[]}> = {
  'javascript': {
    title: 'JavaScript Fundamentals',
    description: 'Test your knowledge of JavaScript basics, closures, and asynchronous programming.',
    questions: [
      {
        id: 1,
        question: 'What does the following code return?',
        code: `
const x = 10;
function foo() {
  console.log(x);
  var x = 20;
}
foo();`,
        options: [
          '10',
          '20',
          'undefined',
          'Reference Error'
        ],
        answer: 2
      },
      {
        id: 2,
        question: 'Which of the following is true about closures in JavaScript?',
        options: [
          'Closures are only available in ES6+',
          'Closures allow a function to access variables from an enclosing scope after it leaves the scope',
          'Closures can only access global variables',
          'Closures are automatically garbage collected when the function returns'
        ],
        answer: 1
      },
      {
        id: 3,
        question: 'What will be logged to the console?',
        code: `
Promise.resolve(1)
  .then(x => x + 1)
  .then(x => { throw new Error('Error!') })
  .catch(err => 10)
  .then(x => x + 1)
  .then(x => console.log(x));`,
        options: [
          '1',
          '2',
          '11',
          'Error: Error!'
        ],
        answer: 2
      }
    ]
  },
  'python': {
    title: 'Python Concepts',
    description: 'Quiz yourself on Python data structures, comprehensions, and best practices.',
    questions: [
      {
        id: 1,
        question: 'What is the output of the following code?',
        code: `
x = [1, 2, 3]
y = x
y.append(4)
print(x)`,
        options: [
          '[1, 2, 3]',
          '[1, 2, 3, 4]',
          '[4, 1, 2, 3]',
          'Error'
        ],
        answer: 1
      },
      {
        id: 2,
        question: 'Which of the following is a correct way to create a list of squares of numbers from 1 to 10?',
        options: [
          '[x*x for x in range(1, 11)]',
          '[for x in range(1, 11): x*x]',
          'list(map(lambda x: x*x), range(1, 11))',
          'list(x*x from x in range(1, 11))'
        ],
        answer: 0
      }
    ]
  },
  'data-structures': {
    title: 'Data Structures',
    description: 'Test your knowledge of arrays, linked lists, trees, and other data structures.',
    questions: [
      {
        id: 1,
        question: 'What is the time complexity of accessing an element in a linked list?',
        options: [
          'O(1)',
          'O(log n)',
          'O(n)',
          'O(n log n)'
        ],
        answer: 2
      },
      {
        id: 2,
        question: 'Which data structure uses LIFO (Last In First Out) principle?',
        options: [
          'Queue',
          'Stack',
          'Linked List',
          'Heap'
        ],
        answer: 1
      }
    ]
  }
};

const Quiz = () => {
  const { quizId } = useParams<{quizId: string}>();
  const navigate = useNavigate();
  
  // Default to javascript quiz if quizId is not found
  const quizData = quizId && quizzes[quizId] ? quizzes[quizId] : quizzes['javascript'];
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const handleOptionSelect = (optionIndex: number) => {
    if (showAnswer) return; // Prevent changing answer after submitting
    setSelectedOption(optionIndex);
  };
  
  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    
    setShowAnswer(true);
    if (selectedOption === quizData.questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setShowAnswer(false);
    } else {
      setQuizCompleted(true);
    }
  };
  
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setScore(0);
    setQuizCompleted(false);
  };
  
  const question = quizData.questions[currentQuestion];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Sidebar />
      
      <main className="flex-grow pt-20 pl-16 md:pl-64 transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6 py-8">
          {!quizCompleted ? (
            <>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{quizData.title}</h1>
                  <p className="text-muted-foreground">{quizData.description}</p>
                </div>
                <div className="bg-primary/10 text-primary px-3 py-2 rounded-lg text-sm flex items-center">
                  <Timer className="h-4 w-4 mr-1" />
                  Question {currentQuestion + 1} of {quizData.questions.length}
                </div>
              </div>
              
              <GlassMorphCard className="mb-6">
                <h2 className="text-xl font-medium mb-4">
                  {question.question}
                </h2>
                
                {question.code && (
                  <div className="bg-black/90 rounded-lg code-block p-3 mb-6">
                    <pre className="text-xs md:text-sm overflow-x-auto">
                      <code>{question.code}</code>
                    </pre>
                  </div>
                )}
                
                <div className="space-y-3 mb-6">
                  {question.options.map((option, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg cursor-pointer border transition-all ${
                        selectedOption === index 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-primary/50'
                      } ${
                        showAnswer && index === question.answer
                          ? 'bg-green-500/10 border-green-500'
                          : ''
                      } ${
                        showAnswer && selectedOption === index && index !== question.answer
                          ? 'bg-red-500/10 border-red-500'
                          : ''
                      }`}
                      onClick={() => handleOptionSelect(index)}
                    >
                      <div className="flex items-center">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${
                          selectedOption === index
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span>{option}</span>
                        
                        {showAnswer && index === question.answer && (
                          <CheckCircle className="h-5 w-5 ml-auto text-green-500" />
                        )}
                        {showAnswer && selectedOption === index && index !== question.answer && (
                          <XCircle className="h-5 w-5 ml-auto text-red-500" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    disabled={currentQuestion === 0}
                    onClick={() => {
                      setCurrentQuestion(currentQuestion - 1);
                      setSelectedOption(null);
                      setShowAnswer(false);
                    }}
                  >
                    Previous
                  </Button>
                  
                  {!showAnswer ? (
                    <Button 
                      onClick={handleCheckAnswer}
                      disabled={selectedOption === null}
                    >
                      Check Answer
                    </Button>
                  ) : (
                    <Button onClick={handleNextQuestion}>
                      {currentQuestion < quizData.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                    </Button>
                  )}
                </div>
              </GlassMorphCard>
              
              <div className="text-center text-sm text-muted-foreground">
                Current Score: {score} / {currentQuestion + (showAnswer ? 1 : 0)}
              </div>
            </>
          ) : (
            <GlassMorphCard className="text-center py-10 px-6">
              <h2 className="text-2xl font-bold mb-2">Quiz Completed!</h2>
              <p className="text-muted-foreground mb-6">
                You scored {score} out of {quizData.questions.length}
              </p>
              
              <div className="w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E0E0E0"
                    strokeWidth="3"
                    strokeDasharray="100, 100"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeDasharray={`${(score / quizData.questions.length) * 100}, 100`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">
                    {Math.round((score / quizData.questions.length) * 100)}%
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button onClick={resetQuiz}>
                  Retry Quiz
                </Button>
                <Button variant="outline" onClick={() => navigate('/games/quizzes')}>
                  Back to Quizzes
                </Button>
              </div>
            </GlassMorphCard>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Quiz;
