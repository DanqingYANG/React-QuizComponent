import QuizQuestionButton from './QuizQuestionButton'
import React, { Component } from 'react' // imrc

class QuizQuestion extends Component
{
    // handleClick (buttonText){
    //     this.props.quiz_question.answer === this.props.buttonText? this.props.showNextQuestionHandler():""
    // }
    handleClick(buttonText) {
        if(buttonText === this.props.quiz_question.answer) {
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
            </main>
        )
    }
}

// function QuizQuestion(props){
//     return(
//     )
// }
export default QuizQuestion
