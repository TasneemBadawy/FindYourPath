import '../Style/QuizStyle.css'
import { useState, useEffect } from "react";
import { questions } from '../Data/questions';
import { useNavigate } from 'react-router-dom';
import logy from'../assets/logo-withoutbg.png'

export default function QuizPage() {
  const [userName, setUserName] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const currentQuestion = questions[currentIndex];

  const calculateResult = () => {
    const scores = { frontend: 0, backend: 0, fullstack: 0, testing: 0, cybersecurity: 0, dataanalysis: 0, ai: 0 };
    Object.values(answers).forEach(answer => {
      if (answer.scores) {
        Object.entries(answer.scores).forEach(([field, points]) => { scores[field] += points; });
      }
    });
    const result = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    localStorage.setItem('quizResult', JSON.stringify({ field: result, scores }));
    navigate('/result');
  };

  useEffect(() => {
    const name = localStorage.getItem('userName');
    if (name) setUserName(name);

    // 🔥 حل سحري: امسحي أي إجابات قديمة عند بدء الكويز
    localStorage.removeItem('quizAnswers');
    localStorage.removeItem('quizResult');
    setAnswers({});
    setCurrentIndex(0);
  }, []);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    setIsAnswered(true);
    const updatedAnswers = { ...answers, [currentQuestion.id]: option };
    setAnswers(updatedAnswers);
    localStorage.setItem('quizAnswers', JSON.stringify(updatedAnswers));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      calculateResult();
    }
  };

  if (!questions.length) return <div>Loading questions...</div>;

  return (
    <>
      <div className='logo'><img src={logy} alt="logo" /></div>
      <div className="header1">
        <h1><span>{userName}</span> 😎  اهلا يا بشمهندس/ة </h1>
      </div>
      <div className="card-container">
        <div className="header2">
          <p className="question-text">{currentQuestion?.text}</p>
        </div>
        <div className="options-container">
          {currentQuestion?.options.map((option, idx) => (
            <button key={idx} className={`option-btn ${selectedOption === option ? 'selected' : ''}`} onClick={() => handleAnswer(option)} disabled={isAnswered}>
              {option.text}
            </button>
          ))}
        </div>
        <button className="next-btn" onClick={handleNext}>Next Question</button>
      </div>
    </>
  );
}