import React from 'react'

function QuizResult(props){
    return (
        <>
        <div className='show-score'>
            Score : {props.score}<br/>
            Total Question : {props.totalScore}
        </div>
        <button id="next-button" onClick={props.tryAgain}>Play Again</button>
        </>
    )
}

export default QuizResult