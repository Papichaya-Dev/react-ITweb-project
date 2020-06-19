import React from 'react';
import Navbar from '../Layout/Navbar';
import styled from 'styled-components';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { deletePost, removeLike } from '../../actions/postActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../Layout/Footer';
import { getArticle, addLike } from '../../actions/ArticleAction';

const TitleArticle = styled.div`
	margin-left: 600px;
	margin-top: 20px;
	text-decoration: none;
	color: black;
	font-family: 'Kanit', sans-serif;
	width: 300px;
	text-align: center;
	justify-content: center;
	font-size: 50px;
	font-weight: bolder;
`;
const TitleArticleTwo = styled.div`
	margin-top: -10px;
	text-decoration: none;
	color: black;
	font-family: 'Kanit', sans-serif;
	text-align: center;
	justify-content: center;
	font-size: 23px;
	font-weight: bolder;
`;
const TitleArticleThree = styled.div`
	margin-top: -5px;
	text-decoration: none;
	color: black;
	font-family: 'Kanit', sans-serif;
	text-align: center;
	justify-content: center;
	font-size: 23px;
	font-weight: bolder;
`;
const CustomCardArticle = styled(Card)`
margin-left:200px;
  width:22rem;
  height:26rem;
  margin-top:-30px;
  font-family: 'Kanit', sans-serif;
  background-color:black;
  color:white;
  transition: transform .10s;
    transition: 300ms ;
 &:hover {
    transform: scale(1.1);
		cursor: pointer;
    }
`;
const TextCardNewsTitle = styled(Card.Title)`
    font-family: 'Kanit', sans-serif;
	font-size:19px;
`;

const CardImage = styled(Card.Img)`
	height:14.5rem;
`;

const TextCardNew = styled(Card.Text)`
    transition: transform .10s;
    transition: 300ms ;
    
 &:hover {
		color: #5226FF;
		cursor: pointer;
	}
`;
const TextCardNewTwo = styled(Card.Text)`
    transition: transform .10s;
    transition: 300ms ;
 &:hover {
		color: #A6009B;
		cursor: pointer;
	}
`;

const CustomCardReview = styled(Card)`
margin-left:200px;
  width:22rem;
  height:25rem;
  margin-top:-30px;
  font-family: 'Kanit', sans-serif;
  background-color:black;
  color:white;
  transition: transform .10s;
    transition: 300ms ;
 &:hover {
    transform: scale(1.1);
		cursor: pointer;
    }
`;
const TextCardNewThree = styled(Card.Text)`
    transition: transform .10s;
    transition: 300ms ;
 &:hover {
		color: #39C741;
		cursor: pointer;
	}
`;
const CustomCol = styled(Col)`
  margin-bottom:50px;

`;
const CustomColTwo = styled(Col)`
  margin-bottom:50px;
  margin-left:-100px;

`;
const CustomRow = styled(Row)`
margin-top:50px;
`;

const FooterHome = styled.div`
	background-color: black;
	width: 100%;
	transition: 100ms;
	height: 15vh;
	font-family: 'IM Fell French Canon SC', serif;
	font-size: 50px;
	color: white;
	margin-top: 20px;
`;
const ButtonNext = styled(Button)`
border-radius:50px;
background-color:black;
color:white;
width:50px;
height:7vh;
margin-left:650px;
margin-top:40px;
&:hover {
   
    cursor: pointer;
    color:yellow;
    
    }
`;

const ButtonNextTwo = styled(Button)`
border-radius:50px;
background-color:black;
color:white;
width:50px;
height:7vh;
margin-left:30px;
margin-top:40px;
&:hover {
   
   cursor: pointer;
   color:yellow;
   
   }
`;
const ButtonNextThree = styled(Button)`
border-radius:50px;
background-color:black;
color:white;
width:50px;
height:7vh;
margin-left:30px;
margin-top:40px;
&:hover {
  color: yellow;
   cursor: pointer;
   
   
   }
`;
const BackgroundBody = styled.div`
	background-image: linear-gradient(to right, #a8caba 0%, #5d4157 100%);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	width: '100vw';
	height: '100vh';
`;
class ArticlePage extends React.Component {
	readArticle() {
		console.log('Fetch');
		this.props.history.push('/articleone');
	}
	readArticleTwo() {
		console.log('Fetch');
		this.props.history.push('/articletwo');
	}
	readArticleThree() {
		console.log('Fetch');
		this.props.history.push('/articlethree');
	}
	state = {
		likes: 0
	};

	componentWillMount() {
		this.props.getArticle();
	}

	getLikeCount(id) {
		let likesCount;
		if (this.props.article) {
			console.log('have data already');
			console.log(this.props.article);
			this.props.article.map((article) => {
				if (id === article._id) {
					console.log(article.likes.length);
					likesCount = article.likes.length;
				}
			});
		} else {
			console.log("doesn't have data");
		}
		return likesCount;
	}

	render() {
		const { post, auth, showActions } = this.props;
		return (
			<div>
				<BackgroundBody>
					<Navbar />
					<TitleArticle>Article</TitleArticle>
					<TitleArticleTwo>รวมบทความต่างๆเกี่ยวกับอุปกรณ์คอมพิวเตอร์</TitleArticleTwo>
					<TitleArticleThree>ครบวงจร ไว้ที่นี้เเล้ว</TitleArticleThree>
					<CustomRow>
						<CustomCol md={4}>
							<CustomCardArticle>
								<Card.Img
									variant="top"
									onClick={() => this.readArticle()}
									src="https://i.insider.com/5dd2d2f27eece55b137c4a2c?width=1100&format=jpeg&auto=webp"
								/>
								<Card.Body onClick={() => this.readArticle()}>
									<TextCardNewsTitle>“หูฟัง” อาวุธสำคัญสำหรับเหล่าเกมเมอร์"</TextCardNewsTitle>
									<TextCardNew>
										1.Earbuds หูฟังประเภท Earbuds คือ 1 ใน
										หูฟังรูปแบบที่เก่าแก่ที่สุดของโลกตั้งแต่สมัยเทป
										ซึ่งปัจจุบันยังได้รับความนิยมอย่างต่อเนื่อง . . .
									</TextCardNew>
								</Card.Body>
								<button onClick={() => this.props.addLike('5eecc85b5b042230f0c7be50')}>
									❤️Likes: {this.getLikeCount('5eecc85b5b042230f0c7be50')}{' '}
								</button>
							</CustomCardArticle>
						</CustomCol>

						<CustomColTwo md={4}>
							<CustomCardArticle>
								<CardImage
									variant="top"
									onClick={() => this.readArticleTwo()}
									src="https://newcastlebeach.org/images/smule-9.jpg"
								/>
								<Card.Body onClick={() => this.readArticleTwo()}>
									<Card.Title>"Smule" แอพสำหรับสายร้องเพลง</Card.Title>
									<TextCardNew>
										สำหรับช่วงของการกักตัว Covid-19 ทำให้หลายต่อหลายคนไม่สามารถออกจากบ้านได้
										ทำให้กิจกรรมหลายๆอย่างนอกสถานที่ถูกระงับไป ซึ่ง . . .
									</TextCardNew>
								</Card.Body>
								<button onClick={() => this.props.addLike('5eecc8c0dd5f432984f4e243')}>
									❤️Likes: {this.getLikeCount('5eecc8c0dd5f432984f4e243')}{' '}
								</button>
							</CustomCardArticle>
						</CustomColTwo>

						<CustomColTwo md={4}>
							<CustomCardArticle>
								<CardImage
									variant="top"
									onClick={() => this.readArticleThree()}
									src="https://mercular.s3.ap-southeast-1.amazonaws.com/upload/contents/2018/09/what-is-a-sound-card-885x400.jpg"
								/>
								<Card.Body onClick={() => this.readArticleThree()}>
									<Card.Title>Sound Card คืออะไร และสำคัญขนาดไหน</Card.Title>
									<TextCardNew>
										สำหรับสื่อบันเทิงต่างๆในปัจจุบัน เราไม่อาจปฏิเสธิได้เลยว่า ‘เสียง’
										คือหนึ่งในสื่อที่มีอิทธิพลอย่างมาก ไม่ว่าจะเป็น . . .
									</TextCardNew>
								</Card.Body>
								<button onClick={() => this.props.addLike('5eecc8f8dd5f432984f4e244')}>
									❤️Likes: {this.getLikeCount('5eecc8f8dd5f432984f4e244')}{' '}
								</button>
							</CustomCardArticle>
						</CustomColTwo>
					</CustomRow>
					<ButtonNext variant="dark">1</ButtonNext> <ButtonNextTwo variant="dark">2</ButtonNextTwo>{' '}
					<ButtonNextThree variant="dark">3</ButtonNextThree> <FooterHome>ITDismember</FooterHome>
				</BackgroundBody>
			</div>
		);
	}
}

ArticlePage.defaultProps = {
	showActions: true
};

ArticlePage.propTypes = {
	deletePost: PropTypes.func.isRequired,
	addLike: PropTypes.func.isRequired,
	removeLike: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	getArticle: PropTypes.func.isRequired,
	article: PropTypes.array,
	addLike: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	article: state.article.article_list
});

export default connect(mapStateToProps, { deletePost, addLike, removeLike, getArticle, addLike })(ArticlePage);
