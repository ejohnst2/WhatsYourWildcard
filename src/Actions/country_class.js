import React from 'react';
import ReactDOM from 'react

// const gotoplace = <Travelcard place="Costa Rica"/>;

export class Task extends React.Component {

    constructor(props){
        super(props);
        this.taskClickfunction=this.taskClickFunction.bind(this);
    }
    taskClickFunction(){

        let randomTravel = Math.floor(Math.random() * 4)

        switch (randomTravel) {
            case 0:
                this.taskClickFunction = 'Go to Latin America'
                break;
            case 1:
                this.taskClickFunction = 'Go to Africa'
                break;
            case 2:
                this.taskClickFunction = 'Go to America"
                break;
            case 3:
                this.taskClickFunction = "Go to Asia"
                break;
        }
    }

    render() {
        return (
            <article>
                <h1>React Components</h1>
                <RippleButton onClick={this.taskClickFunction}/>
            </article>
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
