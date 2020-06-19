import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import { getProfiles, deleteAccount } from '../../actions/profileActions';
import ProfileItem from './ProfileItem';
import Navbar from '../Layout/Navbar';
import styled from 'styled-components';

const BackgroundProfile = styled.div`background-image: linear-gradient(-20deg, #616161 0%, #9bc5c3 100%);`;

const TextTopic = styled.h1`
	font-family: 'Vollkorn SC', serif;
	margin-left: 350px;
	margin-top: 20px;
	text-decoration: none;
	color: black;
	width: 300px;
	text-align: center;
	justify-content: center;
	font-size: 40px;
	font-weight: bolder;
`;
const TextTopicTwo = styled.p`margin-left: -100px;`;
class Profiles extends Component {
	componentDidMount() {
		this.props.getProfiles();
	}
	onDeleteClick(e) {
		this.props.deleteAccount();
	}

	render() {
		//* destructure
		const { profiles, loading } = this.props.profile;
		let profileItems;

		if (profiles === null || loading) {
			profileItems = <Spinner />;
		} else {
			if (profiles.length > 0) {
				profileItems = profiles.map((profile) => <ProfileItem key={profile._id} profile={profile} />);
			} else {
				profileItems = <h4>No profile found...</h4>;
			}
		}

		return (
			this.props.status === 'admin' && (
				<BackgroundProfile className="profiles">
					<Navbar />
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<TextTopic className="display-4 text-center">Admin Page</TextTopic>
								<TextTopicTwo className="lead text-center">Browse and connect with Users</TextTopicTwo>

								{profileItems}
							</div>
						</div>
					</div>
				</BackgroundProfile>
			)
		);
	}
}

Profiles.propTypes = {
	getProfiles: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	deleteAccount: PropTypes.func.isRequired,
	status: PropTypes.string
};

const mapStateToProps = (state) => ({
	profile: state.profile,
	status: state.auth.user.status
});
export default connect(mapStateToProps, { getProfiles, deleteAccount })(Profiles);
