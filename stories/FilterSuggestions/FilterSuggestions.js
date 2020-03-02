import React, { Component } from 'react';
import { action } from '@storybook/addon-actions';
import Autocomplete from '../../src/index';

const suggestions = [
  {
    value: 'Name:',
    label: 'Name'
  },
  {
    value: 'Status:',
    label: 'Status'
  },
  {
    value: 'Type:',
    label: 'Type'
  },
  {
    value: 'Order:',
    label: 'Order'
  }
];

class FilterSuggestions extends Component {
  render() {
    return (
      <div>
        <h1>suggestions</h1>
        <p>Input suggestions on click.</p>
        <Autocomplete
          suggestions={suggestions}
          inputSuggestions={true}
		  suggestOnFocus={true}
		  filterSuggestions={true}
        />
      </div>
    );
  }
}

export default FilterSuggestions;
