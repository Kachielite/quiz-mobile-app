import React from 'react';
import questions from '../questions.json'
import './AnswerSection.css';

const AnswerSection = props =>{


    return(
        <div className="answers">
            <h2>{props.rightAnswer}</h2>
            <ol  type="A" className="answer-area" >
                {questions[props.index].answers.sort().map((answer, key)=>{
                    return <li key={key} style={{pointerEvents:`${props.disable}`}} onClick={() => {props.selectedAnswer(key)}} >{answer} </li>
                })}
            </ol>
        </div>
    )
}

export default AnswerSection;