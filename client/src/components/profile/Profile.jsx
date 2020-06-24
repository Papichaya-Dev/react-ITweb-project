import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileCreds from './ProfileCreds';
import ProfileGithub from './ProfileGithub';
import Spinner from '../common/Spinner';
import { getProfileByHandle } from '../../actions/profileActions';
import styled from 'styled-components';

const BackgroundHome = styled.div`background-image: linear-gradient(to right, #a8caba 0%, #5d4157 100%);`;

const ButtonBack = styled(Link)`
	font-family: 'DM Serif Display', serif;
   font-size:20px;
   margin-left:-180px;
	
`;
const ButtonBackUser = styled(Link)`
	font-family: 'DM Serif Display', serif;
   font-size:20px;
   margin-left:-700px;
   margin-top:10px;
	
`;
class Profile extends Component {
	componentDidMount() {
		if (this.props.match.params.handle) {
			this.props.getProfileByHandle(this.props.match.params.handle);
		}
	}

	render() {
		const { profile, loading } = this.props.profile;
		let profileContent;

		if (profile === null || loading) {
			profileContent = <Spinner />;
		} else {
			profileContent = (
				<div>
					<div className="row">
						<div className="col-md-6">
							{this.props.status === 'admin' && (
								<ButtonBack to="/profiles" className="btn btn-black mb-3 float-left">
									Back To Profiles
								</ButtonBack>
							)}
						</div>
						{/* <div className="col-md-6">
							{this.props.status === 'user' && (
								<ButtonBackUser to="/dashboard" className="btn btn-black mb-3 float-left">
									Back To Profiles
								</ButtonBackUser>
							)}
						</div> */}
						<div className="col-md-6" />
					</div>
					<ProfileHeader profile={profile} />
					<ProfileAbout profile={profile} />
					<ProfileCreds education={profile.education} experience={profile.experience} />
					<ProfileGithub />
				</div>
			);
		}
		return (
			<div className="profile">
				<BackgroundHome>
					<div className="container">
						<div className="row">
							<div className="col-md-12">{profileContent}</div>
						</div>
					</div>
				</BackgroundHome>
			</div>
		);
	}
}

Profile.propTypes = {
	getProfileByHandle: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	status: PropTypes.string
};

const mapStateToProps = (state) => ({
	profile: state.profile,
	status: state.auth.user.status
});

export default connect(mapStateToProps, { getProfileByHandle })(Profile);
