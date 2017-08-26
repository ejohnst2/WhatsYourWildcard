import React from 'react';
import ReactDOM from 'react-dom';
import {WildcardButton} from './Actions/button';
import {TravelCard} from "./Actions/travelcard";
import {Clock} from "./Actions/clockfunction"

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

        <h1 style={{textAlign: "center"}} > What's Your WildCard? </h1>

         <input style={{textAlign: 'center'}} type="text" placeholder="Ask anything about your travels"/>

      <WildcardButton onClick={this.handleClick} />

         <br/><br/><br/><br/>

         {this.state.clicked ? <TravelCard /> : null}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App
