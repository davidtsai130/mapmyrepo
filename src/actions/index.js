export const addUsers = (user) => {
	return {
		type: 'GET_USER',
		user,
	}
}

export const addRepos = (repos) => {
	return {
		type: 'GET_REPOS',
		repos,
	}
}

export const addContributors = (contributors) => {
	return {
		type: 'GET_CONTRIBUTORS',
		contributors,
	}
}

export const addLocations = (location) => {
	return {
		type: 'GET_LOCATIONS',
		location,
	}
}

export const updateInput = (value) => {
	return {
		type: 'UPDATE_INPUT',
		value,
	}
}
