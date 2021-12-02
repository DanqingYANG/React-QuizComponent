import QuizQuestionButton from './QuizQuestionButton'
import React, { Component } from 'react' // imrc

class QuizQuestion extends Component
{
    // handleClick (buttonText){
    //     this.props.quiz_question.answer === this.props.buttonText? this.props.showNextQuestionHandler():""
    // }

    constructor(props){
        super(props)
        this.state = {incorrectAnswer: false}
    }

    handleClick(buttonText) {
        if(buttonText === this.props.quiz_question.answer) {
            //   this.setState((state) => {incorrectAnswer: true });
            this.setState((state) => {
                  return { incorrectAnswer: true }
            })
            console.log(this.state.incorrectAnswer)
            this.props.showNextQuestionHandler()
        }
    }

    render(){
        return(
            <main>
                <section>
                    <p>
                        {this.props.quiz_question.instruction_text}
                    </p>
                </section>
                <section className="button">
                    <ul>
                        {this.props.quiz_question.answer_options.map((val, i) => <QuizQuestionButton key={i} button_text={val} clickHandler ={this.handleClick.bind(this)}/>)}
                    </ul>
                </section>
                <li>{this.state.incorrectAnswer?<p className='error'>Sorry, that's not right.</p>:""}</li>
            </main>
        )
    }
}

// function QuizQuestion(props){
//     return(
//     )
// }
export default QuizQuestion
