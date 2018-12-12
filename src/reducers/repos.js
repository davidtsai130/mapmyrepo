const repos = (state = [], action) => {
	switch (action.type) {
		case 'GET_REPOS':
			return state = action.repos
		default:
			return state
	}
}

export default repos
