import React from 'react';
import questions from '../questions.json'
import './QuestionSection.css';


const QuestionSection = props =>{

    return(
        <div className="question">
            <div className="score">
                <p>Score: {props.score}/10</p>
            </div>
            <h1>Question {props.questionNumber}/10</h1>
            <div className="question-area">
                <p>{questions[props.index].question}</p>
            </div>
        </div>
    )
}

export default QuestionSection;