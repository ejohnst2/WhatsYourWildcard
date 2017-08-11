import React from 'react'
import ReactDOM from 'react-dom'

// const gotoplace = <Travelcard place="Costa Rica"/>;

export function travelCard() {
    return <h1>Go to CostaRica</h1>;
      ReactDOM.render(travelCard, document.getElementById('root'))
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
