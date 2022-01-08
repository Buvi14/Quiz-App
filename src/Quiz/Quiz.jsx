import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Quiz.css';
import Answer from './Answer';
import Result from './Result';

export default function Quiz() {
    // Below State is used to store questions
    const [quiz, setQuiz] = useState([]);
    // Below is used to store how many questions to respond
    const [response, setResponse] = useState(0);
    // This is used to store the score
    const [score, setScore] = useState(0);

    // This hook will help to make the API call
    useEffect(() => {
        axios.get("https://opentdb.com/api.php?amount=5").then((data) => {
            setQuiz(data.data.results);
        })
    }, []);

    //this function helps to store the score and response
    const chekAns = (ans) => {
        if (ans.x === ans.correct_answer) {
            setScore(score + 5);
        }
        setResponse(response + 1);
    }

    return (
        // UI part of Quiz App
        <>
            <h1 className="header">Welcome to Quiz App</h1>
            {response < 5 && quiz.map((x, i) => {
                return (
                    <div className='container' key={i}>
                        <span>Heading: {x.category}</span>
                        <h4>Question:{x.question}</h4>
                        <div className='answer'>
                            <Answer incorrect_answers={x.incorrect_answers} correct_answer={x.correct_answer} checkAns={(value) => chekAns(value)} />
                        </div>
                    </div>
                )
            })}
            {
                response === 5 ? <Result score={score} /> : ""
            }
        </>
    )
}
