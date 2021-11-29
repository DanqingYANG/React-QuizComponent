import React, { Component } from 'react' // imrc

class QuizQuestion extends Component
{
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
                        <li>
                            {this.props.quiz_question.answer_options[0]}
                        </li>
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