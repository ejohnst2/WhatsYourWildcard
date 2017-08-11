import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { travelCard } from './travelcard';

export class WildcardButton extends React.Component {
  _handleWildCardButtonClick() {
    console.log('working');

    this.props.wildCardString === 'new';
  }

  render() {
    return (
      <div>
        <button
          style={{ background: 'red', color: 'white' }}
          onClick={this._handleWildCardButtonClick.bind(this)}
        >
          Get Your Wildcard
        </button>
        <div>
          {this.props.wildCardString}
        </div>
      </div>
    );
  }
}

WildcardButton.propTypes = {
  wildCardString: PropTypes.string.isRequired,
};

WildcardButton.defaultProps = {
  wildCardString: 'Wildington',
};
