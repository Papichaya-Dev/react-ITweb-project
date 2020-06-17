import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteComment } from '../../actions/postActions';
import styled from 'styled-components';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const ButtonDelete = styled.button`
	font-family: 'DM Serif Display', serif;
	margin-top:-150px;
  margin-left:830px;
  width:50px;
	}
`;

const TextName = styled.p`
	font-family: 'IM Fell French Canon SC', serif;
	font-weight: bolder;
	margin-left: -10px;
`;
const TextPost = styled.p`
	font-family: 'Kanit', sans-serif;
	margin-top: 30px;
`;

class CommentItem extends Component {
	onDeleteClick(postId, commentId) {
		this.props.deleteComment(postId, commentId);
	}
	render() {
		const { comment, postId, auth } = this.props;

		return (
			<div className="card card-body mb-3">
				<div className="row">
					<div className="col-md-2">
						<a href="profile.html">
							<img
								className="rounded-circle d-none d-md-block"
								style={{ width: '100px', marginLeft: '20px' }}
								src={comment.avatar}
								alt=""
							/>
						</a>
						<br />
						<TextName className="text-center">{comment.name}</TextName>
					</div>
					<div className="col-md-10">
						<TextPost className="lead">{comment.text}</TextPost>
						{comment.user === auth.user.id ? (
							<ButtonDelete
								onClick={this.onDeleteClick.bind(this, postId, comment._id)}
								type="button"
								className="btn btn-danger mr-1"
							>
								<DeleteForeverIcon />
							</ButtonDelete>
						) : null}
					</div>
				</div>
			</div>
		);
	}
}

CommentItem.propTypes = {
	deleteComment: PropTypes.func.isRequired,
	comment: PropTypes.object.isRequired,
	postId: PropTypes.string.isRequired,
	auth: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
