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
      <div {...this.props} >
        <button className="button" onClick={() => this.setState({value: 'X'})}
        >
          Get Your Wildcard
        </button>
      </div>
    );
  }
}

