import React from 'react';
import ReactDOM from 'react-dom';


export class InputField extends React.Component {


constructor (props) {
  super(props);
  this.state = {
    email: '',
    password: ''
  }
}

    render() {
        return (

            <input style={{textAlign: 'center'}} type="text" placeholder=
            "What would you like to find out?"/>

        );
}
}



// function isLongEnough (input) {
//     for (var i = 0; i < input.length; i++) {
//         if (input.length >= 8) {
//             return true
//         }
//     }
// }

// function hasQuestionMark (input) {
//     var hasQuestionMark  = ['?']
//     for (var i = 0; i < input.length; i++) {
//         for (var j = 0; j < hasQuestionMark.length; j++)
//             if (input[i] === hasQuestionMark[j]) {
//                 return true
//             }
//     }
// }

// function isQuestionValid(input) {

//     if (!isLongEnough(input)) {
//         return <p> Please ask a complete question </p>
//     }
//     if (!hasQuestionMark(input)) {
//         return <p> Input must be a question </p>
//     }
// }
