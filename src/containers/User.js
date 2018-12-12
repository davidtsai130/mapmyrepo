import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Button from 'react-toolbox/lib/button/Button';
import Avatar from 'react-toolbox/lib/avatar/Avatar';
import Input from 'react-toolbox/lib/input/Input';

import { updateInput } from '../actions'
import { retrieveRepos } from '../thunks'

class User extends PureComponent {

	handleChange = value => {
		this.props.updateInput(value)
	}

	handleSubmit = () => {
		this.props.retrieveRepos(this.props.input)
	}

	render() {
		return(
			<div>
				<Avatar
					image={this.props.user.avatar_url}
					title="David"
				/>
				<Input
				type='text'
					hint='Enter Github Username'
					name='username'
					onChange={this.handleChange}
					value={this.props.input}
				/>
				<Button
					accent
					label='Submit'
					onClick={this.handleSubmit}
				/>
			</div>
		)
	}
}

User.propTypes = {
	user: PropTypes.object,
	input: PropTypes.string,
	updateInput: PropTypes.func,
	retrieveRepos: PropTypes.func,
}

export default connect(
	state => {
		return {
			user: state.contributors_info,
			input: state.input,
		}
	},
	{ updateInput, retrieveRepos }
)(User)
