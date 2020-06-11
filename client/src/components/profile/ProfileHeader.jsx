import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';
import PropTypes from 'prop-types';
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

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
					<div className="card card-body bg-info text-white mb-3">
						<div className="row">
							<div className="col-4 col-md-3 m-auto">
								<img className="rounded-circle" src={profile.user.avatar} alt={profile.user.name} />
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
										<MDBIcon icon="globe" />
									</a>
								)}

								{isEmpty(profile.social && profile.social.twitter) ? null : (
									<a className="text-white p-2" href={profile.social.twitter} target="_blank">
										<MDBIcon fab icon="twitter" />
									</a>
								)}

								{isEmpty(profile.social && profile.social.facebook) ? null : (
									<a className="text-white p-2" href={profile.social.facebook} target="_blank">
										<MDBIcon fab icon="facebook-square" />
									</a>
								)}

								{isEmpty(profile.social && profile.social.linkedin) ? null : (
									<a className="text-white p-2" href={profile.social.linkedin} target="_blank">
										<MDBIcon fab icon="linkedin-in" />
									</a>
								)}

								{isEmpty(profile.social && profile.social.youtube) ? null : (
									<a className="text-white p-2" href={profile.social.youtube} target="_blank">
										<MDBIcon fab icon="youtube" />
									</a>
								)}

								{isEmpty(profile.social && profile.social.instagram) ? null : (
									<a className="text-white p-2" href={profile.social.instagram} target="_blank">
										<MDBIcon fab icon="instagram" />
									</a>
								)}
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ProfileHeader.propTypes = {
	profile: PropTypes.object.isRequired
};

export default ProfileHeader;
