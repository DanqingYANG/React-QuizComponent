import QuizEnd from './QuizEnd'
import React, {Component} from 'react'
import QuizQuestion from './QuizQuestion'

let quizData = require('./quiz_data.json')

class Quiz extends Component
{
    constructor(props){
        super(props)
        this.state = {quiz_position: 1}
    }
    // console.log(this.state.quiz_position);

    render(){
        const isQuizEnd = (this.state.quiz_position - 1 === quizData.quiz_questions.length)
        return(
            <div>
                {/* instruction_text, add a prop named quiz_question that passes the value of the quizData.quiz_questions array at the state's quiz_position minus 1. */}
                {isQuizEnd? <QuizEnd/> : ""}
                <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position-1]}/>
            </div>
        )
    }
}

// function Quiz(props){
//     return(
//         <div>
//             <QuizQuestion/>
//             {quizData.quiz_questions[0].instruction_text}
//         </div>
//     )
// }

export default Quiz