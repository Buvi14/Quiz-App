import React from 'react';
import './Quiz.css'

export default function Answer({ incorrect_answers, correct_answer, checkAns }) {
    // This is the Component for each questions answer
    incorrect_answers.push(correct_answer);
    const shuffled_array = incorrect_answers.sort((a, b) => 0.5 - Math.random());
    let ans = [...new Set(shuffled_array)];
    return (
        <div className='solution'>
            {ans.map((x, i) => {
                return (
                    <button key={i} onClick={() => { checkAns({ x, correct_answer }) }}>{x}</button>
                )
            })}
        </div>
    )
}
