import React from 'react';
import ReactDOM from 'react-dom';
import {WildcardButton} from './button';

class App extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="question" placeholder="Ask us anything about your travels, business, or relationships"/>
        </form>
      <WildcardButton />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App
