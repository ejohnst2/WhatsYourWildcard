import React from 'react';
import ReactDOM from 'react-dom';

// const gotoplace = <Travelcard place="Costa Rica"/>;

export class TravelCard extends React.Component {

    render() {

        const place = this.props.place;
        const country = "Mongolia"
        const task = "take a selfie"
        const person = "Tinder Date"
        const pricePull = "546"

        return(

        <div>
            <h1>Go to {place} in {country} and invite your {person} to {task}! What have you got to lose? </h1>
            <h2>Flights right now are only {pricePull} for your travel date, buy them here and be on your way!</h2>
        </div>
        );

  }
}


// ReactDOM.render(gotoplace, document.getElementById('root'))

// const fiftyFifty = Math.random() < 0.5;
//
// export class TravelCard extends React.Component{
//   render(){
//   if (fiftyFifty) {
//     return <h1>Go to Costa Rica</h1>;
//   } else {
//     return <h1>Go to Cuba</h1>;
//   }
// }
// }

// export class TravelCard extends React.Component {
//   render() {
//     if (fiftyFifty) {
//       return <h1>Go to Costa Rica</h1>;
//     } else {
//       return <h1>Go to Cuba</h1>;
//     }
//   }
// }
//
// ReactDOM.render(
// 	<TravelCard />,
// 	document.getElementById('app')
// );

// function travelCard(){
// var countries = Math.floor(Math.random() * 3);
// switch (countries) {
//   case 0:
//     return <h1>Latin America</h1>
//     break
//   case 1:
//     return <h1>Africa</h1>
//     break
//   case 2:
//     return <h1>America</h1>
//     break
//   }
// //   ReactDOM.render(<countries />, document.getElementById ('app'));
// }
