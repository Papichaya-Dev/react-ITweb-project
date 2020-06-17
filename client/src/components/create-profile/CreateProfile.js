import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import PropTypes from 'prop-types'
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import {createProfile } from '../../actions/profileActions';
import styled from 'styled-components';

const Background = styled.div`
background: linear-gradient(-180deg, #BCC5CE 0%, #929EAD 98%), radial-gradient(at top left, rgba(255,255,255,0.30) 0%, rgba(0,0,0,0.30) 100%);
 background-blend-mode: screen;	width: 100%;
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

const TitleCrete = styled.h1`
margin-top:20px;
`

class CreateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySocialInputs: false,
            handle:'',
            company:'',
            website:'',
            location:'',
            status:'',
            skills:'',
            githubusername:'',
            bio:'',
            twitter:'',
            facebook:'',
            linkedin:'',
            youtube:'',
            instagram:'',
            errors:{}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors});
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
            twitter:this.state.twitter,
            facebook:this.state.facebook,
            linkedin: this.state.linkedin,
            youtube:this.state.youtube,
            instagram: this.state.instagram
        }

        this.props.createProfile(profileData, this.props.history);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    render() {
        const { errors , displaySocialInputs } = this.state;
        console.log(displaySocialInputs);
        let socialInputs;

        if(displaySocialInputs) {
            socialInputs= (
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
            { label: '* Select Professional Status', value: 0},
            { label: ' Developer', value: 'Devoloper'},
            { label: 'Junior Developer', value: 'Junior Devoloper'},
            { label: 'Senior Developer', value: 'Senior Devoloper'},
            { label: 'Manager ', value: 'Manager'},
            { label: 'Student or learning ', value: 'Student or learning'},
            { label: 'Instructor or Teacher ', value: 'Instructor or Teacher'},
            { label: 'Intern', value: 'Intern'},
            { label: 'Other ', value: 'Other'},
        ];

        return (
            <Background className="create-profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <TitleCrete className="display-4 text-center">Create Your Profile</TitleCrete>
                            <p className= "lead text-center">
                                Let's get some information to make your profile stand out
                            </p>
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
                                

<ButtonSubmit className="btn btn-dark" type="submit" value="Submit" />
                    
                            </form>
                        </div>
                    </div>
                </div>
            </Background>
        )
    }
}

CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps, { createProfile})(withRouter(CreateProfile));