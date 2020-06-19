import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';
import PropTypes from 'prop-types';
import FacebookIcon from '@material-ui/icons/Facebook';
import styled from 'styled-components';

const BackgroundHeader = styled.div`
	background-color: #111111;
	border-radius: 10px;
	height: 400px;
	font-family: 'Cormorant Garamond', serif;
`;

const ImageProfile = styled.img`margin-top: 25px;`;

class ProfileHeader extends Component {
	render() {
		const { profile } = this.props;
		console.log(profile);

		if (!profile.user) {
			return false;
		}

		return (
			<div className="row">
				<div className="col-md-12">
					<BackgroundHeader className=" text-light mb-3">
						<div className="row">
							<div className="col-4 col-md-3 m-auto">
								<ImageProfile
									className="rounded-circle"
									src={profile.user.avatar}
									alt={profile.user.name}
								/>
							</div>
						</div>
						<div className="text-center">
							<h1 className="display-4 text-center">{profile.user.name}</h1>
							<p className="lead text-center">
								{profile.status} {isEmpty(profile.company) ? null : <span>at {profile.company}</span>}
							</p>
							{isEmpty(profile.location) ? null : <p>{profile.location}</p>}
							<p>
								{isEmpty(profile.website) ? null : (
									<a className="text-white p-2" href={profile.website} target="_blank">
										<FacebookIcon />
									</a>
								)}
							</p>
						</div>
					</BackgroundHeader>
				</div>
			</div>
		);
	}
}

ProfileHeader.propTypes = {
	profile: PropTypes.object.isRequired
};

export default ProfileHeader;
