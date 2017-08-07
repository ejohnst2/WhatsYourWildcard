import React from 'react';

class App extends React.Component {
  render(){
    return userQuestion
    return <Button> Get Your Wildcard </Button>
  }
}

const Button = (props) => <button>{props.children}</button>

const userQuestion = (<form action="#" onClick={wildAnswer}>
  <input
      type = "question"
      placeholder = "Ask us anything about your travels, business, or relationships"/>
  <input
      type = "Get Your Wildcard"/>
</form>)

function wildAnswer() {
  if (userQuestion.includes ('world' || 'travel' || 'plane' || 'globe' || 'airport' || 'go' || 'fly'))
  {
      return travelCard
    }

    if (userQuestion.includes ('company' || 'business' || 'venture' || 'founder' || 'investment' || 'job' || 'work'))
    {
        return businessCard
      }

    if (userQuestion.includes ('girlfriend' || 'boyfriend' || 'wife' || 'husband' || 'divorce' || 'marriage' || 'sex'))
    {
    return relationshipCard
      }
}

const randomTravel = Math.floor(Math.random() * 5)
const randomBusiness = Math.floor(Math.random() * 5)
const randomRelationships = Math.floor(Math.random() * 5)

const travelCard = ''
const businessCard = ''
const relationshipCard = ''

switch (randomTravel) {
    case 0:
        travelCard = 'Go to Latin America'
        break;
    case 1:
        travelCard = 'Go to Africa'
        break;
    case 2:
        travelCard = 'Go to America'
        break;
    case 3:
        travelCard = 'Go to Asia'
        break;
    case 4:
        travelCard = 'Go to Antarctica'
        break;
}

switch (randomBusiness) {
    case 0:
        businessCard = 'Quit now and stop hesitating'
        break;
    case 1:
        businessCard = 'Liquidate all of your assets and buy chocolate'
        break;
    case 2:
        businessCard = 'Fire everyone and hide under a rock'
        break;
    case 3:
        businessCard = 'Sell to a venture capital fund'
        break;
    case 4:
        businessCard = 'You are wasting your time, go do a yoga retreat instead'
        break;

}
switch (randomRelationships) {
    case 0:
        relationshipCard = 'Ask about a polyamorous relationship'
        break;
    case 1:
        relationshipCard = 'You will never find love, go to a Ping Pong show tomorrow'
        break;
    case 2:
        relationshipCard = 'Leave it all alone, read a book'
        break;
    case 3:
        relationshipCard = 'Bullshit'
        break;
    case 4:
        relationshipCard = 'Ridiculous, leave now'
        break
      }

    export default App

  // constructor(){
  //   super();
  //   this.state = {
  //     txt: 'this is the state txt'
  //   }
  // }
//   update(e){
//     this.setState({txt: e.target.value})
//   }
//   render (){
//     return (
//       <div>
//         <input type = "text"
//           onChange = {this.update.bind(this)}/>
//         <h1>{this.state.txt}</h1>
//       </div>
//     )
//   }

//
// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }
// // const App = () => <h1>Hello Stateless</h1>
//
