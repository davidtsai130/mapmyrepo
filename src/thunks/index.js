import { addUsers, addRepos, addContributors, addLocations } from '../actions'
import { GITHUB_KEY, GOOGLE_MAPS_KEY } from '../constants/env'

export function retrieveRepos(username) {
	return dispatch => {
		fetch(`https://api.github.com/users/${username}/repos?${GITHUB_KEY}`
		).then((response) => {
			return response.json()
		}).then((repos) => {
			dispatch(addRepos(repos))
		})
	}
}

export function retrieveContributors(username, repo) {
	return dispatch => {
		fetch(`https://api.github.com/repos/${username}/${repo}/contributors?${GITHUB_KEY}`
		).then((response) => {
			return response.json()
		}).then((repoData) => {
			dispatch(addContributors(repoData))
			repoData.forEach((contributor) => {
				dispatch(retrieveUser(contributor.login))
			})
		})
	}
}

export function retrieveUser(username) {
	return dispatch => {
		fetch(`https://api.github.com/users/${username}?${GITHUB_KEY}`
		).then((response) => {
			return response.json()
		}).then((userData) => {
			dispatch(addUsers(userData))
			if (userData.location) {
				dispatch(retrieveContributorLocation(userData.location))
			}
		})
	}
}

export function retrieveContributorLocation(location) {
	return dispatch => {
		fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${GOOGLE_MAPS_KEY}`).then((response) => {
			return response.json()
		}).then((locationData) => {
			dispatch(addLocations(locationData.results[0]))
		})
	}
}
