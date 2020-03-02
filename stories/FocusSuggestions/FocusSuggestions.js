import React, { Component } from 'react'
import { action } from '@storybook/addon-actions'
import Autocomplete from '../../src/index'

const suggestions = [{
	value: 'S1',
	label: 'Suggestion 1'
},{
	value: 'S2',
	label: 'Suggestion 2'
}]

class FocusSuggestions extends Component {
	render() {
		return (
			<div>
				<h1>suggestions</h1>
				<p>Show suggestion on input focus.</p>
				<Autocomplete suggestions={suggestions} suggestOnFocus={true} />
			</div>
		)
	}
}

export default FocusSuggestions