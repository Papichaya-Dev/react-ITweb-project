import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addPost } from '../../actions/postActions';
import Navbar from '../Layout/Navbar';
import styled from 'styled-components';

const TitlePost = styled.div`
	margin-top: 10px;
	text-decoration: none;
	color: black;
	font-family: 'Kanit', sans-serif;
	text-align: center;
	justify-content: center;
	font-size: 23px;
	font-weight: bolder;
`;
const BackgroundPost = styled.div`
	/* background-color: #cddcdc; */
	/* background-image: radial-gradient(at 50% 100%, rgba(255, 255, 255, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%),
		linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%);
	background-blend-mode: screen, overlay; */
	background-image: url("https://media0.giphy.com/media/LhmtEI5hSfhny/source.gif");

	margin-top: -25px;
`;
const ButtonSubmit = styled.button`
	font-family: 'DM Serif Display', serif;
	border: 2px solid black;
	padding: 0.2rem;
	color: white;
	width: 130px;
	height: 50px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 300ms ease-in-out;
	margin-left: 30px;
	margin-top: -5px;
	letter-spacing: 0.1rem;
	transition: transform .1s;
	opacity: 0.9;
	background-color: black;

	&:hover {
		background-color: black;
		color: white;
		cursor: pointer;
	}
`;

class PostFrom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			errors: {}
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentWillReceiveProps(newProps) {
		if (newProps.errors) {
			this.setState({ errors: newProps.errors });
		}
	}

	onSubmit(e) {
		e.preventDefault();

		const { user } = this.props.auth;

		const newPost = {
			text: this.state.text,
			name: user.name,
			avatar: user.avatar
		};

		this.props.addPost(newPost);
		this.setState({ text: '' });
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	render() {
		const { errors } = this.state;
		return (
			<div className="post-form mb-3">
				<Navbar />
				<BackgroundPost className="card card-info">
					<TitlePost>
						ร่วมสนทนาหัวข้อที่น่าสนใจ <br />หรือ Q & A ถามตอบข้อสงสัยกับแอดมินได้เลยค่ะ 🦋✨
					</TitlePost>
					<div className="card-body">
						<form onSubmit={this.onSubmit}>
							<div className="form-group">
								<TextAreaFieldGroup
									placeholder="Create a post"
									name="text"
									value={this.state.text}
									onChange={this.onChange}
									error={errors.text}
								/>
							</div>
							<ButtonSubmit type="submit">Submit</ButtonSubmit>
						</form>
					</div>
				</BackgroundPost>
			</div>
		);
	}
}

PostFrom.propTypes = {
	addPost: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(mapStateToProps, { addPost })(PostFrom);
