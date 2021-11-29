import React, { Component } from 'react' // imrc

// class QuizQuestion extends Component
// {
//     render(){
//         return(
//             <main>
//                 <section>
//                     <p>
//                         // instruction
//                         {/* instruction_text, add a prop named quiz_question that passes the value of the quizData.quiz_questions array at the state's quiz_position minus 1. */}
//                     </p>
//                 </section>
//                 {/* <section className="button"> */}
//                 <section>
//                     <ul>
//                         // quiz question
//                         <li></li>
//                         {/* this.props.quiz_question.answer_options[0]. */}
//                     </ul>
//                 </section>
//             </main>
//         )
//     }
// }

function QuizQuestion(props){

    return(
        <main>
            <section>
                <p>
                    {/* instruction_text, add a prop named quiz_question that passes the value of the quizData.quiz_questions array at the state's quiz_position minus 1. */}
                </p>
            </section>
            {/* <section className="button"> */}
            <section>
                <ul>
                    <li></li>
                    {/* this.props.quiz_question.answer_options[0]. */}
                </ul>
            </section>
        </main>
    )
}

export default QuizQuestion
