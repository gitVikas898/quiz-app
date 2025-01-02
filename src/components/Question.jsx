const Question = ({question,onAnswerClick =()=>{}}) => {
    return (
        <div className="question">
            <h2>{question.question}</h2>
            <ul className="option">
                {question.options.map((choice)=>{
                   return ( <li key={choice.option}>
                        <button onClick={()=>onAnswerClick(choice.isCorrect)}>
                            {choice.option}
                        </button>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Question;