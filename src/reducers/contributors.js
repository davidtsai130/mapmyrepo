const contributors = (state = [], action) => {
	switch (action.type) {
		case 'GET_CONTRIBUTORS':
			return state = action.contributors
		default:
			return state
	}
}

export default contributors
