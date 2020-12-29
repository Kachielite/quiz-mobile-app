import React,{useState,useEffect} from 'react';
import AnswerSection from './Component/AnswerSection';
import QuestionSection from './Component/QuestionSection';
import questions from './questions.json';
import ProgressBar from '@ramonak/react-progress-bar';
import './App.css';



const App = () => { 
    
    const [index, setIndex] = useState(Math.floor((Math.random()*50))+ 1);
    const [score, setScore] = useState(0)
    const [questionNumber, setQuestionNumber] = useState(1)
    const [rightAnswer, setRightAnswer] = useState("Select Answer Below");
    const [display, setDisplay] = useState(false)
    const [disable, setDisable] = useState("auto")
    

    const checkAnswer = (key) =>{
        if (questions[index].answers[key] === questions[index].correct){
            setDisable("none")
            setScore(score + 1)
            setRightAnswer("😁 Correct ✔")
        } else{ setRightAnswer("😫 Wrong ❌")}
    }

    
    const selectedAnswer = (key) =>{
        if(questionNumber <= 10){
            checkAnswer(key)
        setTimeout(() => {
            setRightAnswer("Select Answer Below")
        }, 1000);
        setTimeout(() => {
            setQuestionNumber(questionNumber + 1)
            setIndex(Math.floor((Math.random()*50)))
        }, 1200)
        setTimeout(()=>{
            setDisable("auto")
        }, 5500)
        ;}
    }

    let completed = Math.floor((questionNumber/10)*100)

    const start = () =>{
        setQuestionNumber(1)
            setScore(0)
            setDisplay(false)
    }

    useEffect(()=>{
        if (questionNumber > 10){
            setDisplay(true)
        }
    }, [questionNumber])

    return (
    <div className="App">
        <div className="question-section">
                <QuestionSection index={index} questionNumber={questionNumber} score={score}/>
        </div>
        <div className="progress-bar">
                <ProgressBar completed={completed} width="100%" bgcolor="white" labelAlignment="center" labelColor="deepskyblue"/>
        </div>
        <div className="answer-section">
            <AnswerSection index={index} selectedAnswer={selectedAnswer}  rightAnswer={rightAnswer} disable={disable}/>
        </div>
        { display && <div className="results">
            <h2>Final Results</h2>
            <p>You scored: {score}/10</p>
            <button onClick={start}>Play again</button>
        </div>}
    </div>);

};

export default App;