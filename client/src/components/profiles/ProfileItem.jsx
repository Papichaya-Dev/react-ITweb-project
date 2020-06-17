import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';
import styled from 'styled-components';

const Background = styled.div`
	background-color: #cddcdc;
	background-image: radial-gradient(at 50% 100%, rgba(255, 255, 255, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%),
		linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%);
	background-blend-mode: screen, overlay;
`;

const ButtonProfile = styled(Link)`
margin-left:150px;
background-color: #2F2B9C;


`;

const TextName = styled.h3`
	margin-left: 25px;
	margin-top: 20px;
	font-family: 'IM Fell French Canon SC', serif;
	font-weight: bolder;
`;
const TextHobby = styled.h4``;
const TextStatus = styled.p`
	margin-left: 26px;
	font-family: 'IM Fell French Canon SC', serif;
`;
class ProfileItem extends Component {
	render() {
		const { profile } = this.props;
		// console.log(profile);

		if (!profile.user) {
			return false;
		}

		return (
			<Background className="card card-body bg-light mb-3">
				<div className="row">
					<div className="col-2">
						<img className="rounded-circle" src={profile.user.avatar} alt={profile.user.name} />{' '}
					</div>
					<div className="col-lg-6 col-md-4 col-8">
						<TextName>{profile.user.name}</TextName>
						<TextStatus>
							{profile.status} {isEmpty(profile.company) ? null : <span>at {profile.company}</span>}
						</TextStatus>
						<p>{isEmpty(profile.location) ? null : <span>{profile.location}</span>}</p>
						<ButtonProfile to={`/profile/${profile.handle}`} className="btn btn-info">
							View Profile
						</ButtonProfile>
					</div>
					<div className="col-md-4 d-none d-md-block">
						<TextHobby>Hobbies and Interests</TextHobby>
						<ul className="list-group">
							{profile.skills.slice(0, 4).map((skill, index) => (
								<li key={index} className="list-group-item">
									<i className="fa fa-check pr-1" />
									{skill}
								</li>
							))}
						</ul>
					</div>
				</div>
			</Background>
		);
	}
}

ProfileItem.propTypes = {
	profile: PropTypes.object.isRequired
};

export default ProfileItem;
