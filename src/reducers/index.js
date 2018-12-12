import { combineReducers } from 'redux'

import input from './input'
import repos from './repos'
import contributors from './contributors'
import contributors_info from './users'
import locations from './locations'

export default combineReducers({
	input,
	repos,
	contributors,
	contributors_info,
	locations,
})
