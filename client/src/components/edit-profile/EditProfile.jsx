import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createProfile, getCurrentProfile } from '../../actions/profileActions';
import isEmpty from '../../validation/is-empty';
import styled from 'styled-components';

const ButtonBack = styled(Link)`
	font-family: 'DM Serif Display', serif;
    font-weight:bolder;
	padding: 0.2rem;
	width: 130px;
	height: 50px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: -300px;
	margin-top: 30px;
	letter-spacing: 0.1rem;
	opacity: 1;
    background-color:black;
    color: white;
	
`;
const ButtonSubmit = styled.input`
	font-family: 'DM Serif Display', serif;
	font-weight: bolder;
	padding: 0.2rem;
	width: 150px;
	height: 50px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 250px;
	margin-top: 10px;
	letter-spacing: 0.1rem;
	opacity: 1;
	background-color: black;
	color: white;
`;

const TitleInfo = styled.div`
	font-family: 'Kanit', sans-serif;
	font-size: 15px;
	color: gray;
	font-weight: 500;
	margin-bottom: 10%;
	margin-left: -10px;
`;

const Background = styled.div`
	background-image: linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%);
	width: 100%;
`;

const TextTopic = styled.h1`font-weight: bold;`;
class CreateProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displaySocialInputs: false,
			handle: '',
			company: '',
			website: '',
			location: '',
			status: '',
			skills: '',
			githubusername: '',
			bio: '',
			twitter: '',
			facebook: '',
			linkedin: '',
			youtube: '',
			instagram: '',
			errors: {}
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount() {
		this.props.getCurrentProfile();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
		}

		if (nextProps.profile.profile) {
			const profile = nextProps.profile.profile;

			//Bring skills array back to CSV
			const skillsCSV = profile.skills.join(',');

			//If profile field doesnt exist, make empty string
			profile.company = !isEmpty(profile.company) ? profile.company : '';
			profile.website = !isEmpty(profile.website) ? profile.website : '';
			profile.location = !isEmpty(profile.location) ? profile.location : '';
			profile.githubusername = !isEmpty(profile.githubusername) ? profile.githubusername : '';
			profile.bio = !isEmpty(profile.bio) ? profile.bio : '';
			profile.social = !isEmpty(profile.social) ? profile.social : {};
			profile.twitter = !isEmpty(profile.social.twitter) ? profile.social.twitter : '';
			profile.facebook = !isEmpty(profile.social.facebook) ? profile.social.facebook : '';
			profile.linkedin = !isEmpty(profile.social.linkedin) ? profile.social.linkedin : '';
			profile.youtube = !isEmpty(profile.social.youtube) ? profile.social.youtube : '';
			profile.instagram = !isEmpty(profile.social.instagram) ? profile.social.instagram : '';

			// Set component fields state
			this.setState({
				handle: profile.handle,
				company: profile.company,
				website: profile.website,
				location: profile.location,
				status: profile.status,
				skills: skillsCSV,
				githubusername: profile.githubusername,
				bio: profile.bio,
				twitter: profile.twitter,
				facebook: profile.facebook,
				linkedin: profile.linkedin,
				youtube: profile.youtube,
				instagram: profile.instagram
			});
		}
	}

	onSubmit(e) {
		e.preventDefault();

		const profileData = {
			handle: this.state.handle,
			company: this.state.company,
			website: this.state.website,
			location: this.state.location,
			status: this.state.status,
			skills: this.state.skills,
			githubusername: this.state.githubusername,
			bio: this.state.bio,
			twitter: this.state.twitter,
			facebook: this.state.facebook,
			linkedin: this.state.linkedin,
			youtube: this.state.youtube,
			instagram: this.state.instagram
		};

		this.props.createProfile(profileData, this.props.history);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	render() {
		const { errors, displaySocialInputs } = this.state;

		let socialInputs;

		if (displaySocialInputs) {
			socialInputs = (
				<div>
					<InputGroup
						placeholder="Twitter Profile URL"
						name="twitter"
						icon="fab fa-twitter"
						value={this.state.twitter}
						onChange={this.onChange}
						error={errors.twitter}
					/>
					<InputGroup
						placeholder="Facebook Page URL"
						name="facebook"
						icon="fab fa-facebook"
						value={this.state.facebook}
						onChange={this.onChange}
						error={errors.facebook}
					/>
					<InputGroup
						placeholder="Linkedin Profile URL"
						name="linkedin"
						icon="fab fa-linkedin"
						value={this.state.linkedin}
						onChange={this.onChange}
						error={errors.linkedin}
					/>
					<InputGroup
						placeholder="Youtube Channel URL"
						name="youtube"
						icon="fab fa-youtube"
						value={this.state.youtube}
						onChange={this.onChange}
						error={errors.youtube}
					/>
					<InputGroup
						placeholder="Instagram Page URL"
						name="instagram"
						icon="fab fa-instagram"
						value={this.state.instagram}
						onChange={this.onChange}
						error={errors.instagram}
					/>
				</div>
			);
		}

		//Select option for status
		const options = [
			{ label: '* Select Professional Status', value: 0 },
			{ label: ' Developer', value: 'Devoloper' },
			{ label: 'Junior Developer', value: 'Junior Devoloper' },
			{ label: 'Senior Developer', value: 'Senior Devoloper' },
			{ label: 'Manager ', value: 'Manager' },
			{ label: 'Student or learning ', value: 'Student or learning' },
			{ label: 'Instructor or Teacher ', value: 'Instructor or Teacher' },
			{ label: 'Intern', value: 'Intern' },
			{ label: 'Other ', value: 'Other' }
		];

		return (
			<Background className="create-profile">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<ButtonBack to="/dashboard" className="btn btn-light">
								Go back
							</ButtonBack>
							<TextTopic className="display-4 text-center">Edit Profile</TextTopic>
							<small className="d-block pb-3">* = required fields</small>
							<form onSubmit={this.onSubmit}>
								<TextFieldGroup
									placeholder="* Profile Handle"
									name="handle"
									value={this.state.handle}
									onChange={this.onChange}
									error={errors.handle}
									info="A unique handle for your profile URL. Your full name,
                                    nickname"
								/>
								<SelectListGroup
									placeholder="Status"
									name="status"
									value={this.state.status}
									onChange={this.onChange}
									options={options}
									error={errors.status}
									info="Give us an idea of where you are at in your career"
								/>
								<TextFieldGroup
									placeholder="University or School or Company"
									name="company"
									value={this.state.company}
									onChange={this.onChange}
									options={options}
									error={errors.company}
									info="Could be your own University or School or Company "
								/>
								<TextFieldGroup
									placeholder="Website"
									name="website"
									value={this.state.website}
									onChange={this.onChange}
									error={errors.website}
									info="Could be your own website ( eg. Facebbok , Twitter ) "
								/>
								<TextFieldGroup
									placeholder="* Hobbies and Interests"
									name="skills"
									value={this.state.skills}
									onChange={this.onChange}
									error={errors.skills}
									info="Please use comma separated values (eg.
                                       sleep,eat,play)"
								/>
								<TextAreaFieldGroup
									placeholder="* Short Bio"
									name="bio"
									value={this.state.bio}
									onChange={this.onChange}
									error={errors.bio}
									info="Tell us a little about yourself :-)"
								/>
								<div className="mb-3" />
								{socialInputs}
								<ButtonSubmit className="btn btn-dark" type="submit" value="Submit" />
							</form>
						</div>
					</div>
				</div>
			</Background>
		);
	}
}

CreateProfile.propTypes = {
	createProfile: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	profile: state.profile,
	errors: state.errors
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(CreateProfile));
