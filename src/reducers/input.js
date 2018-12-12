const input = (state = '', action) => {
	switch (action.type) {
		case 'UPDATE_INPUT':
			return state = action.value
		default:
			return state
	}
}

export default input
