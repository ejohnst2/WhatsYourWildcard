import React from 'react';
import ReactDOM from 'react-dom';

var randomNumber = Math.floor(Math.random() * 7)
var eightBall = '';

switch(randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Don\'t count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
}

export class TravelCard extends React.Component {
    render() {
        const yourWC = eightBall
        return(
        <div>
             <h1> {yourWC} </h1>
         </div>
        );

  }
}


