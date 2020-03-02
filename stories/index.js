import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Autocomplete from './../src/index'
import Basic from './Basic/Basic'
import Change from './onChange/onChange'
import Add from './onAdd/onAdd'
import Delete from './onDelete/onDelete'
import Focus from './onFocus/onFocus'
import Blur from './onBlur/onBlur'
import KeyUp from './onKeyUp/onKeyUp'
import KeyDown from './onKeyDown/onKeyDown'
import Suggestions from './Suggestions/Suggestions'
import Tags from './Tags/Tags'
import LimitTags from './LimitTags/LimitTags'
import SaveOnBlur from './SaveOnBlur/SaveOnBlur'
import Placeholder from './Placeholder/Placeholder'
import FocusSuggestions from './FocusSuggestions/FocusSuggestions'
import InputSuggestions from './InputSuggestions/InputSuggestions'
import FilterSuggestions from './FilterSuggestions/FilterSuggestions'

storiesOf('Events', module)
	.add('Basic', () => <Basic />)
	.add('Handling onChange', () => <Change />)
	.add('Handling onAdd', () => <Add />)
	.add('Handling onDelete', () => <Delete />)
	.add('Handling onFocus', () => <Focus />)
	.add('Handling onBlur', () => <Blur />)
	.add('Handling onKeyUp', () => <KeyUp />)
	.add('Handling onKeyDown', () => <KeyDown />)

storiesOf('Options', module)
	.add('Add placeholder', () => <Placeholder />)
	.add('With suggestions', () => <Suggestions />)
	.add('Suggestions on focus', () => <FocusSuggestions />)
	.add('Input suggestions', () => <InputSuggestions />)
	// .add('Filter suggestions', () => <FilterSuggestions />)
	.add('With initial tags', () => <Tags />)
	.add('Limit in 2 tags', () => <LimitTags />)
	.add('Add tag on blur', () => <SaveOnBlur />)
	