import React from 'react';
import ReactDOM from 'react-dom';
import {WildcardButton} from './Actions/button';
import {TravelCard} from "./Actions/travelcard";
import {Clock} from "./Actions/clockfunction";
import {InputField} from "./Actions/question"

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            clicked: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            clicked: true
        });
    }

  render() {
    return (
     <div style={{textAlign:'center'}}>

         <Clock />

        <h1 style={{textAlign: "center"}} > Your Magic Eight Ball </h1>

         <InputField/>

         <br/><br/><br/>

         <img src = "http://icons.iconarchive.com/icons/barkerbaggies/pool-ball/256/Ball-8-icon.png" />

         <br/><br/><br/>

      <WildcardButton onClick={this.handleClick} />

         <br/>

         {this.state.clicked ? <TravelCard /> : null}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App
