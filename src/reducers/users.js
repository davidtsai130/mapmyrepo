const users = (state = [], action) => {
	switch (action.type) {
		case 'GET_USER':
			return state = state.concat({user: action.user.login, url: action.user.url, location: action.user.location})
		default:
			return state
	}
}

export default users
