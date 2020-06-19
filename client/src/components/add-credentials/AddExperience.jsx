import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import TextFieldGroup from '../common/TextFieldGroup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profileActions';
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
const TextTopic = styled.h1`font-family: 'Cormorant Garamond', serif;`;

const Background = styled.div`
	background-image: linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%);
	width: 100%;
	height: 100vh;
`;

const ButtonSubmit = styled.input`
	font-family: 'DM Serif Display', serif;
	font-weight: bolder;
	padding: 0.2rem;
	width: 130px;
	height: 50px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 250px;
	margin-top: -20px;
	letter-spacing: 0.1rem;
	opacity: 1;
	background-color: black;
	color: white;
`;

class AddExperience extends Component {
	constructor(props) {
		super(props);
		this.state = {
			company: '',
			title: '',
			location: '',
			from: '',
			to: '',
			current: false,
			description: '',
			errors: {},
			disabled: false
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onCheck = this.onCheck.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
		}
	}

	onSubmit(e) {
		e.preventDefault();

		const expData = {
			company: this.state.company,
			title: this.state.title,
			location: this.state.location,
			from: this.state.from,
			to: this.state.to,
			current: this.state.current,
			description: this.state.description
		};

		this.props.addExperience(expData, this.props.history);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onCheck(e) {
		this.setState({
			disabled: !this.state.disabled,
			current: !this.state.current
		});
	}

	render() {
		const { errors } = this.state;

		return (
			<Background className="add-experience">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<ButtonBack to="/dashboard" className="btn btn-light">
								Go back
							</ButtonBack>
							<TextTopic className="display-4 text-center">Add more info</TextTopic>
							<p className="lead text-center">Add any info ex. your email , contact number :-)</p>
							<small className="d-block pb-3">* = required field</small>
							<form onSubmit={this.onSubmit}>
								<TextFieldGroup
									placeholder="*Email"
									name="company"
									value={this.state.company}
									onChange={this.onChange}
									error={errors.company}
								/>
								<TextFieldGroup
									placeholder=" Contact number"
									name="title"
									value={this.state.title}
									onChange={this.onChange}
									error={errors.title}
								/>
								<TextFieldGroup
									placeholder="Location"
									name="location"
									value={this.state.location}
									onChange={this.onChange}
									error={errors.location}
								/>
								<h6>Your birthday</h6>
								<TextFieldGroup
									name="from"
									type="date"
									value={this.state.from}
									onChange={this.onChange}
									error={errors.from}
								/>

								<ButtonSubmit type="submit" value="Submit" className="btn  mt-4" />
							</form>
						</div>
					</div>
				</div>
			</Background>
		);
	}
}

AddExperience.propTypes = {
	addExperience: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	profile: state.profile,
	errors: state.errors
});

export default connect(mapStateToProps, { addExperience })(withRouter(AddExperience));
