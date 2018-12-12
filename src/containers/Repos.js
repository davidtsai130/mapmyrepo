import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import RepoButton from '../components/RepoButton'
import { retrieveContributors } from '../thunks'

class Repos extends PureComponent {

	get displayRepos() {
		return this.props.repos.map((repo) => {
			return (
				<RepoButton
					key={repo.id}
					userName={repo.owner.login}
					repoName={repo.name}
					action={this.props.retrieveContributors}
				/>
			)
		})
	}

	render() {
		return(
			<div>
				{this.displayRepos}
			</div>
		)
	}

}

Repos.propTypes = {
	repos: PropTypes.array,
	retrievereposAndRepos: PropTypes.func,
}

export default connect(
	state => {
		return {
			repos: state.repos
		}
	},
	{ retrieveContributors }
)(Repos)
