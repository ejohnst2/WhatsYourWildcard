import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { TravelCard } from './travelcard';

export class WildcardButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
}

handleChange(e) {
    const place = e.target.value;
    this.props.onChange(place);
}

  render() {
    return (
      <div>
        <button
          style={{ background: 'blue', color: 'white' }}
          className="square" onClick={() => this.setState({value: 'X'})}
        >
          Get Your Wildcard
        </button>
        <div>
          {this.props.place}
        </div>
      </div>
    );
  }
}

// _handleWildCardButtonClick() {
//   console.log('working');
//
//   this.props.wildCardString === 'new';
// }
// WildcardButton.propTypes = {
//   wildCardString: PropTypes.string.isRequired,
// };
//
// WildcardButton.defaultProps = {
//   wildCardString: 'Wildington',
// };
