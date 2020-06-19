import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { deletePost, addLike, removeLike } from '../../actions/postActions';
import styled from 'styled-components';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';

const BackgroundPost = styled.div`
	background-color: #cddcdc;
	background-image: radial-gradient(at 50% 100%, rgba(255, 255, 255, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%),
		linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%);
	background-blend-mode: screen, overlay;
	background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
`;

const TextPost = styled.p`
	font-family: 'Kanit', sans-serif;
	margin-left: 40px;
	margin-top: 40px;
	font-size: 20px;
`;
const TextName = styled.p`
	font-family: 'IM Fell French Canon SC', serif;
	font-weight: bolder;
`;

const ButtonComment = styled(Link)`
	font-family: 'DM Serif Display', serif;
	border: 2px solid white;
	padding: 0.2rem;
	color: white;
	width: 130px;
	height: 50px;
	border-radius:10px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 300ms ease-in-out;
	margin-left: 5px;
	margin-top: 10px;
	letter-spacing: 0.1rem;
	transition: transform .1s;
	opacity: 0.9;
	background-color:#2F2B9C;

	&:hover {
		background-color: #2F2B9C;
		color: white;
		cursor: pointer;
	}
`;

const ButtonDelete = styled.button`
	font-family: 'DM Serif Display', serif;
	border: 2px solid white;
	padding: 0.2rem;
	color: white;
	width: 130px;
	height: 50px;
	border-radius: 10px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 300ms ease-in-out;
	margin-left: 140px;
	margin-top: -50px;
	letter-spacing: 0.1rem;
	transition: transform .1s;
	opacity: 0.9;
	background-color: #ff0000;

	&:hover {
		background-color: #ff0000;
		color: white;
		cursor: pointer;
	}
`;
class PostItem extends Component {
	onDeleteClick(id) {
		this.props.deletePost(id);
	}

	onLikeClick(id) {
		this.props.addLike(id);
	}

	onUnlikeClick(id) {
		this.props.removeLike(id);
	}

	findUserLike(likes) {
		const { auth } = this.props;
		if (likes.filter((like) => like.user === auth.user.id).length > 0) {
			return true;
		} else {
			return false;
		}
	}
	render() {
		const { post, auth, showActions, status } = this.props;
		return (
			<BackgroundPost className="card card-body mb-3">
				<div className="row">
					<div className="col-md-2">
						<a href="profile.html">
							<img className="rounded-circle d-none d-md-block" src={post.avatar} alt="" />
						</a>
						<br />
						<TextName className="text-center">{post.name}</TextName>
					</div>
					<div className="col-md-10">
						<TextPost className="lead">{post.text}</TextPost>
						{showActions ? (
							<span>
								<button
									onClick={this.onLikeClick.bind(this, post._id)}
									type="button"
									className="btn btn-light mr-1"
								>
									<FavoriteIcon />
									<i
										className={classnames('fas fa-thumb-up', {
											'text-info': this.findUserLike(post.likes)
										})}
									/>
									<span className="badge badge-light">{post.likes.length}</span>
								</button>
								<button
									onClick={this.onUnlikeClick.bind(this, post._id)}
									type="button"
									className="btn btn-light mr-1"
								>
									<ThumbDownAltIcon />
								</button>
								<ButtonComment to={`/post/${post._id}`}>Comments</ButtonComment>
								{post.user === auth.user.id || status === 'admin' ? (
									<ButtonDelete
										onClick={this.onDeleteClick.bind(this, post._id)}
										type="button"
										className="btn btn-danger mr-1"
									>
										<i className="fas fa-times" />
										Delete
									</ButtonDelete>
								) : null}
							</span>
						) : null}
					</div>
				</div>
			</BackgroundPost>
		);
	}
}

PostItem.defaultProps = {
	showActions: true
};

PostItem.propTypes = {
	deletePost: PropTypes.func.isRequired,
	addLike: PropTypes.func.isRequired,
	removeLike: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	status: PropTypes.string
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	status: state.auth.user.status
});

export default connect(mapStateToProps, { deletePost, addLike, removeLike })(PostItem);
