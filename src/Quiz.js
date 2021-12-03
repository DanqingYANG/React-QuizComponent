import React, {Component} from 'react'
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'
let quizData = require('./quiz_data.json')

class Quiz extends Component
{
    constructor(props){
        super(props)
        this.state = {quiz_position: 1}
        this.showNextQuestion = this.showNextQuestion.bind(this)
        console.log(this);
    }

    showNextQuestion() {
        this.setState((state) => {
            return { quiz_position : state.quiz_position +1 }
        })
    }

    handleResetClick(){
        this.setState({ quiz_position : 1 })
    }

    render()
    {
        const isQuizEnd = (this.state.quiz_position - 1 === quizData.quiz_questions.length)
        const {showNextQuestion} = this;
        return(
            <div>
                {isQuizEnd? <QuizEnd resetClickHandler={this.handleResetClick.bind(this)}/> : 
                <QuizQuestion showNextQuestionHandler ={showNextQuestion}
                 quiz_question={quizData.quiz_questions[this.state.quiz_position-1]}/>}
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
