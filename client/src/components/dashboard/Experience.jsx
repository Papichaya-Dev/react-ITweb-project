import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteExperience } from '../../actions/profileActions';
import styled from 'styled-components';

const TextHeader = styled.h4`margin-top: 13px;`;
class Experience extends Component {
	onDeleteClick(id) {
		this.props.deleteExperience(id, this.props.history);
	}
	render() {
		const experience = this.props.experience.map((exp) => (
			<tr key={exp._id}>
				<td>{exp.company}</td>
				<td>{exp.title}</td>
				<td>
					<Moment format="YYYY/MM/DD">{exp.from}</Moment>
				</td>
				<td>
					<button onClick={this.onDeleteClick.bind(this, exp._id)} className="btn btn-danger">
						Delete
					</button>
				</td>
			</tr>
		));
		return (
			<div>
				<TextHeader className="mb-4">Add more info</TextHeader>
				<table className="table">
					<thead>
						<tr>
							<th>E-mail</th>
							<th>Contact number</th>
							<th>Birthday</th>
							<th />
						</tr>
						{experience}
					</thead>
				</table>
			</div>
		);
	}
}

Experience.propTypes = {
	deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Experience);
