import { useState } from 'react';
import './App.css'
import questions from './constants/questions.json'
import Question from './components/Question';
import Result from './components/Result';

function App() {
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const[userAnswers, setUserAnswers] = useState([]);

  const handleNextQuestion = (isCorrect)=>{
      setCurrentQuestion(currentQuestion+1);
      setUserAnswers([...userAnswers,isCorrect]);
      
  };

  const resetQuiz = ()=>{
    setCurrentQuestion(0);
    setUserAnswers([]);
  }

  
  return ( 
    <>
      <div className='app'>
        <h1>Quiz App</h1>
       {currentQuestion<questions.length &&
          (<Question question={questions[currentQuestion]} onAnswerClick={handleNextQuestion} ></Question>)
        } 
        {
          currentQuestion === questions.length &&(<Result  question={questions} userAnswers={userAnswers} resetQuiz={resetQuiz}></Result>)
        }
      </div>
      
    </>
  )
}

export default App
