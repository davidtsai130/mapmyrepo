import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-toolbox/lib/button/Button';

class RepoButton extends PureComponent {

	handleClick = () => {
		this.props.action(this.props.userName, this.props.repoName)
	}

	render() {
		return (
			<div>
				<Button
					key={this.props.id}
					label={this.props.repoName}
					onClick={this.handleClick}
					accent
				/>
			</div>
		)
	}
}

RepoButton.propTypes = {
	action: PropTypes.func,
	id: PropTypes.number,
	repoName: PropTypes.string,
	userName: PropTypes.string,
}

export default RepoButton
