import React, { Component } from 'react' // imrc

class QuizQuestion extends Component
{
    render(){
        return(
            <main>
                <section>
                    <p>
                       
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

export default QuizQuestion

// function QuizQuestion(props){
//     return(
//         <main>
//             <section>
//                 <p>
//                 </p>
//             </section>
//             <section>
//                 <ul>
//                     <li>
//                         {props.quiz_question.answer_options[0]}
//                     </li>
//                 </ul>
//             </section>
//         </main>
//     )
// }


