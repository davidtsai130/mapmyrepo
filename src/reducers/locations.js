const locations = (state = [], action) => {
	switch (action.type) {
		case 'GET_LOCATIONS':
			return state = state.concat(action.location)
		default:
			return state
	}
}

export default locations
