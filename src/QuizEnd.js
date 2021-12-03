import React, { useState, Component } from 'react'

class QuizEnd extends Component{
    handleResetClick(){
        this.props.resetClickHandler()
    }

    render(){
        return(
            <div>
                <p>Thanks for playing!</p>
                <a href='' onClick={this.handleResetClick.bind(this)}>Reset Quiz</a>
          </div>
        )
    }
}

// const QuizEnd = (props) => {
//     const [count, setCount] = useState(0);
//     return(
//         <div>
//             <p>Thanks for playing!</p>
//             <a href='' onClick={}>Reset Quiz</a>
//         </div>
//     )
// }

export default QuizEnd 
