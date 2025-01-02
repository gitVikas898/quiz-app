import React from "react";

const Result = ({ question, userAnswers, resetQuiz = () => {} }) => {
  const correctAnswers = userAnswers.filter((answer) => answer).length;

  return (
    <div className="result">
      <h1>Result</h1>
      <p>
        You have answered {correctAnswers} out of {question.length} questions
        correctly
      </p>
      <div className="overview">
        <h3>Overview</h3>
        <ul className="res-opt">
          {question.map((question, index) => {
            return (
              <li key={index} >
                Q{index + 1}. {question.question} {userAnswers.isCo} <br></br>
                <b data-correct={userAnswers[index]}>
                  Correct answer{`- ${question.options.find((ans) => ans.isCorrect).option}`}
                </b>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <button className="retry" onClick={() => resetQuiz()}>
          Retry
        </button>
      </div>
    </div>
  );
};

export default Result;
