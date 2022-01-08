import React from 'react'
import './Quiz.css'

export default function Result({ score }) {
    // This component will help to show the result
    return (
        <div className='result-container'>
            <h5 className='result-header'>Result for the Quiz</h5>
            <span className='result-score'><b>Your Score is : </b>{score}</span>
        </div>
    )
}
